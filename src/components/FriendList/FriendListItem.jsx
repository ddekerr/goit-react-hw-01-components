import PropTypes from 'prop-types';
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
