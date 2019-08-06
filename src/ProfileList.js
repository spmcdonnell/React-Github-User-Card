import React from 'react';

import ProfileCard from './ProfileCard';

const ProfileList = ({ userFollowers }) => {
    return (
        <div>
            {userFollowers.map(follower => (
                <ProfileCard key={follower.url} userData={follower} />
            ))}
        </div>
    );
};

export default ProfileList;
