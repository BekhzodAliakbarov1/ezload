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
import { useNavigate } from 'react-router-dom';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';
import { SingleDriverResponse } from 'server-state/queries/use-driver';
import { useAcceptBid } from 'server-state/queries/use-bid';
import { useTranslation } from 'react-i18next';

const DriverMainInfos: React.FC<{
  data?: SingleDriverResponse;
  bid_id?: string;
  bidded_price?: number;
}> = ({ data, bid_id, bidded_price }) => {
  const { t } = useTranslation();
  const acceptBidRequest = useAcceptBid({ bid_id });
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();
  const biddedDriver = Boolean(bid_id);

  const handleClick = () => {
    close();

    acceptBidRequest.refetch().then(() => {
      navigate(-1);
    });
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
            1K+ {t('LOADS')}
          </Text>
          <Text className="label_number">{t('Plate number')}</Text>
          <Text className="car_number" weight="700">
            {data?.vehicle?.licence_plate}
          </Text>
        </DriversMainInfoDataWrapper>
        <DriversMainInfoLocationsWrapper>
          <Text color="main_70">{t('Locations')}</Text>
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
          <h2>+{data?.phone_number ?? 'backend donot send number'}</h2>
        </DriverMainInfoContactWrapper>
        {biddedDriver && (
          <Button
            aria-label="accept bid"
            fullWidth
            buttonType="warning"
            onClick={open}
          >
            {t('Accept bid')}
          </Button>
        )}
      </DriverMainInfosWrapper>
      <Modal open={isOpen} onClose={close}>
        <AcceptBidModalWrapper>
          <Text>
            {t('Are you sure you want to accept this bid from')}{' '}
            {data?.first_name}
            {t(' with the amount of ')}${bidded_price}?
          </Text>
          <ModalButtonsWrapper>
            <Button aria-label="accept" onClick={handleClick}>
              {t('Accept')}
            </Button>
            <Button aria-label="cancel" buttonType="white" onClick={close}>
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </AcceptBidModalWrapper>
      </Modal>
    </>
  );
};

export default DriverMainInfos;
