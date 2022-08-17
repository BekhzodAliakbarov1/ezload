/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import Popper from 'components/popper/popper';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { Div, List, popperStyles, Rows } from '../route-inputs.styles';
import { SearchInput } from 'components/input/search-input';
import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Text from 'components/typography/text';
import { useCountry } from 'server-state/queries/use-country';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';

const CountryRouteInput: React.FC<{
  value?: string;
  selectHanlder: ({ id, title }: { title: string; id: string }) => void;
  token?: string;
}> = ({ selectHanlder, value = '', token }) => {
  const popperState = usePopper();
  const { t } = useTranslation();
  const [country, setCountry] = useState(value);
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useCountry({ search: country, token });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    setCountry(value);
  }, [value]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      refetch();
    }, 500),
    [country.length]
  );

  const handleSelect = ({ id, title }: { title: string; id: string }) => {
    setCountry(title);
    selectHanlder({ id, title });
  };

  return (
    <>
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
                    <Div key={`hello-${index}`}>
                      <Text>Country not found</Text>
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
          placeholder={t('Country')}
          onChange={(e) => {
            setCountry(e.target.value);
            handleSearch();
          }}
          value={country}
        />
      </Popper>
    </>
  );
};

export default CountryRouteInput;
