import React from 'react';
import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import {
  SearchDriversListItemsWrapper,
  SearchDriversListWrapper,
} from './search-drivers-list.styles';
import { Link } from 'react-router-dom';
import { SingleDriverResponse } from 'server-state/queries/use-drivers';
import DriverCardContainerSkeloton from 'components/skelotons/driver-card-container';
import { t } from 'i18next';

const SearchDriversList: React.FC<{ drivers?: SingleDriverResponse[] }> = ({
  drivers,
}) => {
  // DONOT DELETE BELOW COMMENTS
  // const topDriversResponse = useDrivers('top');
  // const workedBeforeDriversResponse = useDrivers('worked_before');

  return (
    <SearchDriversListWrapper>
      <Text weight="700">{t('Top drivers')}</Text>
      <SearchDriversListItemsWrapper>
        {drivers ? (
          drivers?.map((driver) => (
            <Link key={driver.id} to={`/drivers/${driver.id}`}>
              <DriverCard
                sizes="104px"
                {...driver}
                clickable
                image={driver.profile_picture?.file}
              />
            </Link>
          ))
        ) : (
          <DriverCardContainerSkeloton />
        )}
      </SearchDriversListItemsWrapper>
      {/* <Text weight="700">Top drivers</Text>
      <SearchDriversListItemsWrapper>
        {topDriversResponse.data?.pages &&
          topDriversResponse.data.pages[0].results.map((driver) => (
            <Link key={driver.id} to={`/drivers/${driver.id}`}>
              <DriverCard
                sizes="104px"
                {...driver}
                clickable
                image={driver.profile_picture.file}
              />
            </Link>
          ))}
      </SearchDriversListItemsWrapper>
      <Text weight="700">Drivers I worked with before</Text>
      <SearchDriversListItemsWrapper>
        {workedBeforeDriversResponse.data?.pages &&
          workedBeforeDriversResponse.data.pages[0].results.map((driver) => (
            <Link key={driver.id} to={`/drivers/${driver.id}`}>
              <DriverCard
                sizes="104px"
                {...driver}
                clickable
                image={driver.profile_picture.file}
              />
            </Link>
          ))}
      </SearchDriversListItemsWrapper> */}
    </SearchDriversListWrapper>
  );
};

export default SearchDriversList;
