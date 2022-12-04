import moment from 'moment';
import 'moment/locale/tr';
import 'moment/locale/ru';
import 'moment/locale/uz';
import 'moment/locale/en-au';
import i18n from 'i18n';

export const getDate = ({ date = '' }: { date: string }) => {
  moment.locale(i18n.language);
  const result = moment(date).format('LLL');
  return result;
};

export const getSmallDate = ({ date = '' }: { date: string }) => {
  moment.locale(i18n.language);
  const result = moment(date).format('LLLL');

  return result;
};
