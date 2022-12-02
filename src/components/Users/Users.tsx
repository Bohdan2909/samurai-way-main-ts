import React from 'react';
import {UsersType} from '../../redux/usersReducer';
import avatar from '../../assets/avatar.jpeg'
import style from './Users.module.css'

type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    users: UsersType[]
}
const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: true, fullName: 'Mykola', location: {city: 'London', country: 'England'}},
            {id: 2, followed: false, fullName: 'Petro', location: {city: 'Paris', country: 'France'}},
            {id: 3, followed: false, fullName: 'Ivan', location: {city: 'Rome', country: 'Italy'}},
            {id: 4, followed: false, fullName: 'Bob', location: {city: 'Madrid', country: 'Spain'}}
        ])
    }

    return (
        <div>
            {props.users.map(u => {
                const unFollowHandler = () => props.unFollow(u.id)
                const followHandler = () => props.follow(u.id)
                return (
                    <div className={style.wrapperUsers} key={u.id}>
                    <div className={style.wrapperAvatar}>
                        <div >
                            <img src={avatar} alt="photo" className={style.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={unFollowHandler}>Unfollow</button>
                                : <button onClick={followHandler}>Follow</button>}
                        </div>
                    </div>
                        <div className={style.tableSpan}>
                            <span>{u.fullName}</span>
                            <span>{u.location.city}</span>
                            <span>{u.location.country}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;