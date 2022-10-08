import propTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <FriendStatus online={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
