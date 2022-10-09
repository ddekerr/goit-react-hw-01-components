import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  StatItem,
  StatItemLabel,
  StatItemValue,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <StatItem>
          <StatItemLabel>Followers</StatItemLabel>
          <StatItemValue>{stats.followers}</StatItemValue>
        </StatItem>
        <StatItem>
          <StatItemLabel>Views</StatItemLabel>
          <StatItemValue>{stats.views}</StatItemValue>
        </StatItem>
        <StatItem>
          <StatItemLabel>Likes</StatItemLabel>
          <StatItemValue>{stats.likes}</StatItemValue>
        </StatItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
