import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react';
import { SearchInput } from '../search-input';
import { Div, List, popperStyles, Rows } from '../input.styles';
import { useDistrict } from 'server-state/queries/use-district';

const DistrictInput: React.FC<{
  value: string;
  selectHanlder: ({ id, title }: { title: string; id: number }) => void;
  country: string;
  region: string;
}> = ({ value, selectHanlder, country, region }) => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      if (district.length > 0) refetch();
    }, 500),
    [district.length]
  );

  const handleSelect = ({ id, title }: { title: string; id: number }) => {
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
                        handleSelect({ id: item.id, title: item.title });
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
        {...bindToggle(popperState)}
        placeholder="District"
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
