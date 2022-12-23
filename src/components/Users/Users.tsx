import React from 'react';
import {UsersType} from '../../redux/usersReducer';
import avatar from '../../assets/avatar.jpeg'
import style from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import {API} from '../../api/api';

type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    isFetching: boolean
    setToggleFollowing:(isFollow:boolean,userId:number)=>void
    followingProgress:number[]
}


const Users = (props: UsersPropsType) => {
    let page = Math.ceil(props.totalCount / props.pageSize)
    let pageArr = []
    for (let i = 1; i <= 30; i++) {
        pageArr.push(i)

    }
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {pageArr.map(p => <span key={p} onClick={() => props.onPageChange(p)}
                                        className={props.currentPage === p ? style.selectedPageActive : style.selectedPage}>{p}</span>)}
            </div>
            {props.users.map(u => {
                const unFollowHandler = () => {
                    props.setToggleFollowing(true,u.id)
                    API.unFollow(u.id)
                        .then(res => {
                            if (res.data.resultCode === 0) {
                                props.unFollow(u.id)
                            }
                            props.setToggleFollowing(false,u.id)

                        })
                }
                const followHandler = () => {
                    props.setToggleFollowing(true,u.id)
                    API.follow(u.id)
                        .then(res => {
                            if (res.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                            props.setToggleFollowing(false,u.id)
                        })
                }
                return (
                    <div className={style.wrapperUsers} key={u.id}>
                        <div className={style.wrapperAvatar}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small : avatar} alt="photo"
                                         className={style.avatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={unFollowHandler}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={followHandler}>Follow</button>}
                            </div>
                        </div>
                        <div className={style.tableSpan}>
                            <span>{u.name}</span>
                            <span>{'u.location.city'}</span>
                            <span>{'u.location.country'}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users

