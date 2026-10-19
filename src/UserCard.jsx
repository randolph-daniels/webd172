import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
};

export default UserCard;