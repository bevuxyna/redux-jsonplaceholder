import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Users.scss';
import { fetchUsers } from '../../redux/asyncActions/users';
import UsersList from '../../Components/UserList/UsersList';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className='users__container'>
            <h1 className='users__title'>Users from JSONPlaceholder</h1>
            <UsersList loading={loading} users={users} />
        </div>
    );
}

export default Users;