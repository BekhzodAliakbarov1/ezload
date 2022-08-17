import Button from 'components/button/button';
import PenIcon from 'components/icons/pen.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState, useEffect } from 'react';
import {
  ConfirmVerificationCodeWrapper,
  EditableFieldWrapper,
  EditFiedlForm,
  FieldsWrapper,
  PersonalInformationSvgWrapper,
  StyledIconButton,
  VerificationCodeWrapper,
} from './editable-field.styles';
import ReactCodeInputComponent from 'components/code-input/react-code-input';
import { useVerification } from 'server-state/mutations/use-verification';
import { useUpdatePhoneNumber } from 'server-state/mutations/use-phone-number';
import { useUpdateCustomerProfile } from 'server-state/mutations/use-update-profile';
import { useTranslation } from 'react-i18next';

const EditableField: React.FC<{
  label: string;
  value: string;
  onSubmit: (value: string) => void;
  inputType: 'text' | 'number';
  placeholder: string;
}> = ({ label, value, onSubmit, inputType, placeholder }) => {
  const [editClicked, setEditClicked] = useState<boolean>(false);
  const [isPhoneSubmitclicked, setIsPhoneSubmitclicked] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const verificationRequest = useVerification();
  const updatePhoneNumberRequest = useUpdatePhoneNumber();
  const updateProfileRequest = useUpdateCustomerProfile();
  const { t } = useTranslation();

  useEffect(() => {
    setEditClicked(false);
    setIsPhoneSubmitclicked(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputType === 'text') {
      updateProfileRequest.mutate(
        { first_name: inputValue },
        {
          onSuccess() {
            onSubmit(inputValue);
            setEditClicked(false);
          },
        }
      );
    } else {
      if (inputValue === value) {
        setErrorMessage('Current phone is entered!');
      } else {
        setErrorMessage('');
        verificationRequest.mutate({ phone_number: inputValue });
        setIsPhoneSubmitclicked(true);
      }
    }
  };

  const handleChangePhoneNumber = () => {
    updatePhoneNumberRequest.mutate(
      {
        code: verificationCode,
        phone_number: inputValue,
      },
      {
        onSuccess() {
          onSubmit(inputValue);
          setEditClicked(false);
        },
      }
    );
  };

  const resendButtonClick = () => {
    verificationRequest.mutate({ phone_number: inputValue });
  };

  return (
    <FieldsWrapper>
      <Text weight="500">{label}</Text>
      {!editClicked ? (
        <EditableFieldWrapper>
          <Text color="main_100" weight="600" size="md">
            {inputType === 'number' && '+'}
            {value}
          </Text>
          <PersonalInformationSvgWrapper onClick={() => setEditClicked(true)}>
            <StyledIconButton>
              <PenIcon />
            </StyledIconButton>
            <Text>{t('Edit')}</Text>
          </PersonalInformationSvgWrapper>
        </EditableFieldWrapper>
      ) : (
        <EditFiedlForm onSubmit={handleSubmit}>
          <Input
            error={errorMessage}
            disabled={isPhoneSubmitclicked}
            type={inputType}
            value={inputValue}
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            aria-label="save"
            disabled={isPhoneSubmitclicked}
            type="submit"
            loading={
              verificationRequest.isLoading || updateProfileRequest.isLoading
            }
          >
            {t('Save changes')}
          </Button>
          <Button
            aria-label="cancel"
            type="button"
            buttonType="white"
            onClick={() => {
              setEditClicked(false);
              setIsPhoneSubmitclicked(false);
            }}
          >
            {t('Cancel')}
          </Button>
        </EditFiedlForm>
      )}
      {isPhoneSubmitclicked && editClicked && (
        <VerificationCodeWrapper>
          <Text>
            {t('We just sent a code to your phone')} {inputValue}
          </Text>
          <ConfirmVerificationCodeWrapper>
            <ReactCodeInputComponent size="md" setCode={setVerificationCode} />
            <Button
              aria-label="confirm code"
              loading={updatePhoneNumberRequest.isLoading}
              fullWidth
              onClick={handleChangePhoneNumber}
            >
              {t('Confirm code')}
            </Button>
            <Text onClick={resendButtonClick} weight="600">
              {t('Send another code')}
            </Text>
          </ConfirmVerificationCodeWrapper>
        </VerificationCodeWrapper>
      )}
    </FieldsWrapper>
  );
};

export default EditableField;
