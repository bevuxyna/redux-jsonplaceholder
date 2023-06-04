import React from 'react';
import './UsersList.scss';
import UserCard from '../UserCard/UserCard';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

function UsersList({ loading, error, users }) {
    if (loading) {
        return <Preloader />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <ul className='users-list__container'>
            {users &&
                users.users.map((user) => {
                return (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        phone={user.phone}
                        company={user.company}
                    />
                )
            })
            }
        </ul>
    );
}

export default UsersList;