import QuotesIcon from 'components/icons/quotes.icon';
import { MessageBox, MessageWrapper, Quote } from './message.styles';

const MessageCloud = ({ text }: { text: string }) => {
  return (
    <MessageWrapper>
      <MessageBox>{text}</MessageBox>
      <Quote>
        <QuotesIcon />
      </Quote>
    </MessageWrapper>
  );
};

export default MessageCloud;
