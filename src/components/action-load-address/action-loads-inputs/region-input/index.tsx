import { Tooltip } from '@mui/material';
import { SearchInput } from 'components/input/search-input';
import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback, useEffect } from 'react';
import { useRegion } from 'server-state/queries/use-region';
import { Div, List, popperStyles, Rows } from '../action-loads-input.styles';

const RegionInput: React.FC<{
  country: string;
  value: string;
  onChange: (value: string, field_name: string) => void;
}> = ({ value, onChange, country }) => {
  const [region, setRegion] = useState('');
  const popperState = usePopper();
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useRegion({ search: region, country });

  useEffect(() => {
    setRegion(value);
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(debounce(refetch, 1000), [value.length]);

  const handleSelect = ({ id, title }: { title: string; id: number }) => {
    setRegion(title);
    onChange(title, 'region');
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
        placeholder={`Region ${!country ? '(Country need)' : ''}`}
        onChange={(e) => {
          setRegion(e.target.value);
          handleSearch();
        }}
        value={region}
        disabled={!country}
      />
    </Popper>
  );
};

export default RegionInput;
