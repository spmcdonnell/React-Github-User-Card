import React from 'react';

const ProfileCard = ({ userData }) => {
    let username = userData.name ? userData.name : userData.login;

    return (
        <div>
            <h3>{username}</h3>
        </div>
    );
};

export default ProfileCard;
