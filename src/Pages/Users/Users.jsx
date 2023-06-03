import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Users.scss';
import UsersList from '../../Components/UserList/UsersList';
import { fetchUsers } from '../../redux/asyncActions/users';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className='users__container'>
            <h1 className='users__title'>Users from JSONPlaceholder</h1>
            <UsersList users={users} />
        </div>
    );
}

export default Users;