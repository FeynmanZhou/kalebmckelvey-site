import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import { Follow } from 'react-twitter-widgets';
import UserLinks from '../UserLinks/UserLinks';
import './UserInfo.scss';

/**
 * Shows user info at the bottom of a page before the comments
 * @param {Object} config - site config with user info data
 * @param {Boolean} expanded - is the text expanded?
 */
const UserInfo = ({ config, expanded }) => {
  const { userAvatar, userName, userLocation, userDescription, userLinks, userTwitter } = config;
  const userLinksElement = <UserLinks config={config} labeled={expanded} />;
  if (!userAvatar && !userName && !userLocation && !userDescription) {
    if (userLinks) {
      return <Card className="md-grid md-cell md-cell--12 user-info">{userLinksElement}</Card>;
    }
    return null;
  }
  return (
    <Card className="md-grid md-cell md-cell--12 user-info">
      <CardTitle
        expander={!expanded}
        avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
        title={userName}
        subtitle={userTwitter ? <Follow username={userTwitter} options={{ count: 'none' }} /> : 'Author'}
      />
      <CardText expandable={!expanded}>
        {userLocation && (
          <IconSeparator label={userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
        )}
        <p>{userDescription}</p>
        {userLinksElement}
      </CardText>
    </Card>
  );
};

export default UserInfo;
