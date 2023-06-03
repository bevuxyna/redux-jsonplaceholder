import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Users.scss';
import UsersList from '../../Components/UserList/UsersList';
import { fetchUsers } from '../../redux/asyncActions/users';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    // useEffect(() => {
    //     dispatch(fetchUsers);
    // }, [dispatch]);

    return (
        <div>
            <h1>Users</h1>
            <button onClick={dispatch(fetchUsers)}>Get users</button>
            <UsersList users={users} />
        </div>
    );
}

export default Users;