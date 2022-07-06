import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react';
import { SearchInput } from '../search-input';
import { Div, List, popperStyles, Rows } from '../input.styles';
import { useRegion } from 'server-state/queries/use-region';

const RegionInput: React.FC<{
  value: string;
  selectHanlder: ({ id, title }: { title: string; id: number }) => void;
  country: string;
}> = ({ value, selectHanlder, country }) => {
  const popperState = usePopper();
  const [region, setRegion] = useState(value);
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useRegion({ search: region, country });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      if (region.length > 0) refetch();
    }, 500),
    [region.length]
  );

  const handleSelect = ({ id, title }: { title: string; id: number }) => {
    setRegion(title);
    selectHanlder({ id, title });
  };
  console.log(data?.pages);

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
                    <Text>Region not found</Text>
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
        placeholder="Region"
        onChange={(e) => {
          setRegion(e.target.value);
          handleSearch();
        }}
        value={region}
        disabled={!Boolean(country)}
      />
    </Popper>
  );
};

export default RegionInput;
