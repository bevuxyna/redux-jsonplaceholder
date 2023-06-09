import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.scss';
import InfoItem from '../InfoItem/InfoItem';
import Email from '../../images/mail_outline.svg';
import Phone from '../../images/call.svg';
import User from '../../images/account_circle.svg';

function UserCard({ id, name, username, email, phone, company }) {
    return (
        <li className='user-card'>
            <Link className='user-card__title' to={`/user/${id}`}>{name}</Link>
            <InfoItem
                image={User}
                altText='account-icon'
                text={username}
            />
            <InfoItem
                image={Email}
                altText='mail-icon'
                text={email}
            />
            <InfoItem
                image={Phone}
                altText='phone-icon'
                text={phone}
            />

            <div className='user-card__company'>
                <p className='user-card__company-title'>Company details</p>
                <p className='user-card__company-text'>{company.name}</p>
                <p className='user-card__company-text'>{company.catchPhrase}</p>
                <p className='user-card__company-text'>{company.bs}</p>
            </div>
        </li>
    );
}

export default UserCard;