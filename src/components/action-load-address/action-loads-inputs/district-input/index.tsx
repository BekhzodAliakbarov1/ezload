import { Tooltip } from '@mui/material';
import { SearchInput } from 'components/input/search-input';
import InfiniteLoader from 'components/loaders/infinite-loader';
import Spinner from 'components/loaders/spinner';
import Popper from 'components/popper/popper';
import Text from 'components/typography/text';
import { bindPopper, bindToggle, usePopper } from 'hooks/use-popper';
import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react';
import { useDistrict } from 'server-state/queries/use-district';
import { Div, List, popperStyles, Rows } from '../action-loads-input.styles';

const DistrictInput: React.FC<{
  country: string;
  region: string;
  value: string;
  onChange: (value: string, field_name: string) => void;
}> = ({ value, onChange, country, region }) => {
  const [district, setDistrict] = useState('');
  const popperState = usePopper();
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    data,
  } = useDistrict({ search: district, country, region });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(debounce(refetch, 1000), [value.length]);

  const handleSelect = ({ id, title }: { title: string; id: number }) => {
    setDistrict(title);
    onChange(title, 'district');
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
      <Tooltip title="Please select country and region">
        <SearchInput
          {...bindToggle(popperState)}
          placeholder={`District ${!region ? '(Region need)' : ''}`}
          onChange={(e) => {
            setDistrict(e.target.value);
            handleSearch();
          }}
          value={district}
          disabled={!region}
        />
      </Tooltip>
    </Popper>
  );
};

export default DistrictInput;
