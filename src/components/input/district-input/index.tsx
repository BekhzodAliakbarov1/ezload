import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback, useEffect } from 'react';
import { SearchInput } from '../search-input';
import { Div, List, popperStyles, Rows } from '../input.styles';
import { useDistrict } from 'server-state/queries/use-district';
import { useTranslation } from 'react-i18next';

const DistrictInput: React.FC<{
  value: string;
  selectHanlder: ({ id, title }: { title: string; id: string }) => void;
  country: string;
  region: string;
}> = ({ value, selectHanlder, country, region }) => {
  const { t } = useTranslation();
  const popperState = usePopper();
  const [district, setdistrict] = useState(value);
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useDistrict({ search: district, country, region });

  useEffect(() => {
    setdistrict(value);
  }, [value]);

  useEffect(() => {
    if (region) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      if (district.length > 0) refetch();
    }, 500),
    [district.length]
  );

  const handleSelect = ({ id, title }: { title: string; id: string }) => {
    setdistrict(title);
    selectHanlder({ id, title });
  };

  return (
    <Popper
      {...bindPopper(popperState)}
      offset={{
        away: 20,
      }}
      paperstyles={popperStyles}
      placement="bottom"
      style={{ zIndex: 6 }}
      content={
        <List>
          <InfiniteLoader
            loadMore={fetchNextPage}
            hasMore={!!hasNextPage}
            loading={isFetchingNextPage}
          >
            <Spinner loading={isLoading} height="100%">
              {data?.pages.map((page, index) =>
                page?.count > 0 ? (
                  page.results.map((item) => (
                    <Rows
                      key={item.id}
                      onClick={() => {
                        handleSelect({
                          id: String(item.id),
                          title: item.title,
                        });
                        popperState.close();
                      }}
                    >
                      {item.title}
                    </Rows>
                  ))
                ) : (
                  <Div key={index}>
                    <Text>District not found</Text>
                  </Div>
                )
              )}
            </Spinner>
          </InfiniteLoader>
        </List>
      }
    >
      <SearchInput
        required
        {...bindToggle(popperState)}
        placeholder={t('District')}
        onChange={(e) => {
          setdistrict(e.target.value);
          handleSearch();
        }}
        value={district}
        disabled={!Boolean(region)}
      />
    </Popper>
  );
};

export default DistrictInput;
