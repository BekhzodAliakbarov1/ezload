import Avatar from 'components/avatar';
import React from 'react';
import {
  AvatarWrapper,
  DriverMainInfoContactWrapper,
  DriverMainInfosWrapper,
  DriversMainInfoDataWrapper,
  DriversMainInfoLocationsWrapper,
} from './driver-main-infos.styles';
import image from 'assets/img/profile.png';
import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';

const locations = [
  {
    id: 1,
    name: 'Asaka, Andijan, Uzbekistan',
  },
  {
    id: 2,
    name: 'Almata, Kazakstan',
  },
  {
    id: 3,
    name: 'Ekaterinbur, Russia',
  },
  {
    id: 4,
    name: 'Moscow, Russia',
  },
  {
    id: 5,
    name: 'Kaliningrad, Russia',
  },
];

const DriverMainInfos = () => {
  return (
    <DriverMainInfosWrapper>
      <AvatarWrapper>
        <Avatar sizes="196px" src={image} />
        <RatingComponent value={5} iconSize="20" />
      </AvatarWrapper>
      <DriversMainInfoDataWrapper>
        <Text className="name">Antonio Fred.</Text>
        <Text className="weight_loads">Man (500 Ton)</Text>
        <Text className="number_loads" weight="700">
          1K+ Loads
        </Text>
        <Text className="label_number">Plate number</Text>
        <Text className="car_number" weight="700">
          UZB 01 W 345 WE
        </Text>
      </DriversMainInfoDataWrapper>
      <DriversMainInfoLocationsWrapper>
        <Text>Locations</Text>
        <div>
          {locations.map((location) => (
            <Text key={location.id} weight="700">
              {location.name}
            </Text>
          ))}
        </div>
      </DriversMainInfoLocationsWrapper>
      <DriverMainInfoContactWrapper>
        <Text>Driver сontact</Text>
        <h2>+998 99 223 33 12</h2>
      </DriverMainInfoContactWrapper>
    </DriverMainInfosWrapper>
  );
};

export default DriverMainInfos;
