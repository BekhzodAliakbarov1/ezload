import Avatar from 'components/avatar';
import React from 'react';
import {
  AcceptBidModalWrapper,
  AvatarWrapper,
  DriverMainInfoContactWrapper,
  DriverMainInfosWrapper,
  DriversMainInfoDataWrapper,
  DriversMainInfoLocationsWrapper,
  ModalButtonsWrapper,
} from './driver-main-infos.styles';
import image from 'assets/img/profile.png';
import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';

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
  const { pathname } = useLocation();
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();

  // user is comming from search driver list or from bidded list
  const biddedDriver = pathname.includes('load');

  const handleClick = () => {
    // accept bid
    navigate(-1);
    close();
  };

  return (
    <>
      <DriverMainInfosWrapper>
        <AvatarWrapper>
          <Avatar sizes="196px" src={image} />
          <RatingComponent value={5} iconSize="20" />
        </AvatarWrapper>
        <DriversMainInfoDataWrapper>
          <Text color="main_90" className="name">
            Antonio Fred.
          </Text>
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
          <Text color="main_70">Locations</Text>
          <div>
            {locations.map((location) => (
              <Text color="main_80" key={location.id} weight="700">
                {location.name}
              </Text>
            ))}
          </div>
        </DriversMainInfoLocationsWrapper>
        <DriverMainInfoContactWrapper>
          <Text color="main_70">Driver сontact</Text>
          <h2>+998 99 223 33 12</h2>
        </DriverMainInfoContactWrapper>
        {biddedDriver && (
          <Button fullWidth buttonType="warning" onClick={open}>
            Accept bid
          </Button>
        )}
      </DriverMainInfosWrapper>
      <Modal open={isOpen} onClose={close}>
        <AcceptBidModalWrapper>
          <Text>
            Are you sure you want to accept this bid from “Driver name” with the
            amount of “4,700,000”?
          </Text>
          <ModalButtonsWrapper>
            <Button onClick={handleClick}>Accept</Button>
            <Button buttonType="white" onClick={close}>
              Cancel
            </Button>
          </ModalButtonsWrapper>
        </AcceptBidModalWrapper>
      </Modal>
    </>
  );
};

export default DriverMainInfos;
