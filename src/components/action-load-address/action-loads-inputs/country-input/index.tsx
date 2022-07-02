import { SearchInput } from 'components/input/search-input';
import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback, useEffect } from 'react';
import { useCountry } from 'server-state/queries/use-country';
import { Div, List, popperStyles, Rows } from '../action-loads-input.styles';

const CountryInput: React.FC<{
  value: string;
  onChange: (value: string, field_name: string) => void;
}> = ({ value, onChange }) => {
  const [country, setCountry] = useState('');
  const popperState = usePopper();
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useCountry({ search: country });

  useEffect(() => {
    setCountry(value);
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(debounce(refetch, 1000), [value.length]);

  const handleSelect = ({ id, title }: { title: string; id: number }) => {
    setCountry(title);
    onChange(title, 'country');
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
              {data?.pages.map((page) =>
                page?.results.length
                  ? page.results.map((item) => (
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
                  : !data.pages && (
                      <Div>
                        <Text>User not found</Text>
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
        placeholder="Country"
        onChange={(e) => {
          setCountry(e.target.value);
          handleSearch();
        }}
        value={country}
      />
    </Popper>
  );
};

export default CountryInput;
