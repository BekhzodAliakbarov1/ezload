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
import RatingComponent from 'components/rating/rating';
import Text from 'components/typography/text';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';
import { SingleDriverResponse } from 'server-state/queries/use-driver';

const DriverMainInfos: React.FC<{
  data?: SingleDriverResponse;
}> = ({ data }) => {
  const { pathname } = useLocation();
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();
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
          <Avatar sizes="196px" src={data?.profile_picture?.file} />
          <RatingComponent value={data?.average_rate ?? 1} iconSize="20" />
        </AvatarWrapper>
        <DriversMainInfoDataWrapper>
          <Text color="main_90" className="name">
            {data?.first_name}
          </Text>
          <Text className="weight_loads">
            {data?.vehicle?.title.toLocaleUpperCase()} (
            {data?.vehicle?.capacity} Ton)
          </Text>
          <Text className="number_loads" weight="700">
            1K+ Loads
          </Text>
          <Text className="label_number">Plate number</Text>
          <Text className="car_number" weight="700">
            {data?.vehicle?.licence_plate}
          </Text>
        </DriversMainInfoDataWrapper>
        <DriversMainInfoLocationsWrapper>
          <Text color="main_70">Locations</Text>
          <div>
            {data?.routes?.map((location, index) => (
              <Text color="main_80" key={index} weight="700">
                {location.country.title}, {location.region.title}
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
