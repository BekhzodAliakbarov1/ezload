import LoadsContainer from 'components/loads-container/loads-container';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  ProfileLoadsWrapper,
  SectionControllerWrapper,
  SingleController,
} from './profile-loads.styles';

const newLoadsData = [
  {
    id: 1,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 2,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
];

const pendingLoadsData = [
  {
    id: 1,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 2,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 3,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
];

const doneLoadsData = [
  {
    id: 1,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: '13:00, 12 April, 2022',
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: '18:00, 16 April, 2022',
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
];

const ProfileLoads = () => {
  const [sectionType, setSectionType] = useState<'NEW' | 'PENDING' | 'DONE'>(
    'NEW'
  );

  const onClickHandler = (type: 'NEW' | 'PENDING' | 'DONE') => {
    setSectionType(type);
  };

  return (
    <ProfileLoadsWrapper>
      <SectionControllerWrapper>
        <SingleController
          onClick={() => onClickHandler('NEW')}
          active={sectionType === 'NEW'}
        >
          <Text weight="700">New</Text>
        </SingleController>
        <SingleController
          onClick={() => onClickHandler('PENDING')}
          active={sectionType === 'PENDING'}
        >
          <Text weight="700">On the way</Text>
        </SingleController>
        <SingleController
          onClick={() => onClickHandler('DONE')}
          active={sectionType === 'DONE'}
        >
          <Text weight="700">Delivered</Text>
        </SingleController>
      </SectionControllerWrapper>
      {sectionType === 'NEW' && <LoadsContainer loads={newLoadsData} />}
      {sectionType === 'PENDING' && <LoadsContainer loads={pendingLoadsData} />}
      {sectionType === 'DONE' && <LoadsContainer loads={doneLoadsData} />}
    </ProfileLoadsWrapper>
  );
};

export default ProfileLoads;
