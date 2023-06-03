import React from 'react';
import './UsersList.scss';
import UserCard from '../UserCard/UserCard';

function UsersList({ users }) {
    return (
        <ul className='users-list__container'>
            {users &&
                users.map((user) => {
                return (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        phone={user.phone}
                    />
                )
            })
            }
        </ul>
    );
}

export default UsersList;