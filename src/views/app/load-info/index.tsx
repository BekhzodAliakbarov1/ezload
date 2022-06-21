import { Modal } from '@mui/material';
import Button from 'components/button/button';
import LoadInfoCard from 'components/cards/load-info-card';
import LoadCard from 'components/cards/single-load/load-card';
import BidIcon from 'components/icons/bid.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import { useModal } from 'hooks/use-modal';
import React, { useState } from 'react';
import LoadBids from './load-bids';
import LoadCreator from './load-creator';
import {
  LoadInfoDataWrapperBox,
  LoadInfoViewWrapper,
  LoadInfowViewHeader,
  MakeBidModalWrapper,
  ModalButtonsWrapper,
} from './load-info.styles';

const date = new Date();

const data = {
  id: 1,
  pickup_address: 'Asaka city, Andijan region',
  pickup_country: 'Uzbekistan',
  pickup_date: date.toUTCString(),
  deliver_address: 'Tashkent city, Andijan region',
  deliver_country: 'Uzbekistan',
  deliver_date: date.toUTCString(),
  distance: '894 km',
  bid_count: '232',
  view_count: 2332,
};
const LoadInfoView = () => {
  const [loadType, setLoadType] = useState<'NEW' | 'BIDDED' | 'ON_THE_WAY'>(
    'ON_THE_WAY'
  );
  const { close, isOpen, open } = useModal();
  const { isDriver } = useDriver();

  const submitHandler = (e: any) => {
    e.preventDefault();
    // just for fun
    setLoadType('BIDDED');

    // last step is close modal
    close();
  };

  return (
    <>
      <LoadInfoViewWrapper>
        <LoadInfowViewHeader>
          <Text weight="700">Load Details</Text>
          {isDriver && (
            <>
              {loadType === 'NEW' ? (
                <Button onClick={open}>Bid to the load</Button>
              ) : (
                loadType === 'BIDDED' && (
                  <Button
                    startIcon={<BidIcon />}
                    variant="outlined"
                    disabled
                    buttonType="disabled"
                  >
                    Bid to the load
                  </Button>
                )
              )}
            </>
          )}
        </LoadInfowViewHeader>
        <LoadInfoDataWrapperBox>
          <LoadCard {...data} />
          <LoadInfoCard loadType={loadType} />
        </LoadInfoDataWrapperBox>
        {isDriver ? (
          <LoadCreator loadType={loadType} />
        ) : (
          <LoadBids loadType={loadType} />
        )}
      </LoadInfoViewWrapper>
      {/* Bid Modal */}
      <Modal open={isOpen} onClose={close}>
        <MakeBidModalWrapper onSubmit={submitHandler}>
          <Text className="header">Make a bid</Text>
          <Text className="cost">Customer’s suggestion 4 500 000 SUM</Text>
          <Input placeholder="Your bid" />
          <ModalButtonsWrapper>
            <Button>Submit</Button>
            <Button type="button" onClick={close} buttonType="white">
              Cancel
            </Button>
          </ModalButtonsWrapper>
        </MakeBidModalWrapper>
      </Modal>
    </>
  );
};

export default LoadInfoView;
