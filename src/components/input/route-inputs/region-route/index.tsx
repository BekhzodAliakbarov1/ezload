/* eslint-disable react-hooks/exhaustive-deps */
import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback, useEffect } from 'react';
import { SearchInput } from '../../search-input';
import { Div, List, popperStyles, Rows } from '../route-inputs.styles';
import { useRegion } from 'server-state/queries/use-region';

const RegionRouteInput: React.FC<{
  value?: string;
  selectHanlder: ({ id, title }: { title: string; id: string }) => void;
  country: string;
  token?: string;
}> = ({ value = '', selectHanlder, country, token }) => {
  const popperState = usePopper();
  const [region, setRegion] = useState(value);
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useRegion({ search: region, country, token });

  useEffect(() => {
    if (country) {
      refetch();
    }
  }, [country]);

  useEffect(() => {
    setRegion(value);
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(() => {
      if (region.length > 0) refetch();
    }, 500),
    [region.length]
  );

  const handleSelect = ({ id, title }: { title: string; id: string }) => {
    setRegion(title);
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
        required
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

export default RegionRouteInput;
