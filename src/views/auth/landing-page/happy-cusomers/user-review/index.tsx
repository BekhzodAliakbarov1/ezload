import MessageCloud from './message';
import UserLayout, { UserLayoutProps } from './user-layout';
import { UserReviewWrapper } from './user-review.styles';

interface UserReviewProps extends UserLayoutProps {
  text: string;
  size?: 'small' | 'large';
}

const UserReview = ({
  text,
  location,
  name,
  photo,
  style,
  size,
}: UserReviewProps) => {
  return (
    <UserReviewWrapper size={size}>
      <MessageCloud text={text} />
      <UserLayout location={location} name={name} photo={photo} style={style} />
    </UserReviewWrapper>
  );
};

UserReview.defaultProps = {
  size: 'small',
};

export default UserReview;
