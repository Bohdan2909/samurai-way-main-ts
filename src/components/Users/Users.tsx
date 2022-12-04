import React from 'react';
import {UsersType} from '../../redux/usersReducer';
import avatar from '../../assets/avatar.jpeg'
import style from './Users.module.css'
import axios from 'axios';

type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    users: UsersType[]
}

export class Users extends React.Component<UsersPropsType> {

        componentDidMount() {
                axios.get('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        console.log(response)
                        this.props.setUsers(response.data.items)
                    })
            }

    render() {
        return (
            <div>

                {this.props.users.map(u => {
                    const unFollowHandler = () => this.props.unFollow(u.id)
                    const followHandler = () => this.props.follow(u.id)
                    return (
                        <div className={style.wrapperUsers} key={u.id}>
                            <div className={style.wrapperAvatar}>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : avatar} alt="photo"
                                         className={style.avatar}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={unFollowHandler}>Unfollow</button>
                                        : <button onClick={followHandler}>Follow</button>}
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
        );

    }

}

// const Users = (props: UsersPropsType) => {
// const getUsers = () => {
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 console.log(response)
//                 props.setUsers(response.data.items)
//             })
//     }
// }
//
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {props.users.map(u => {
//                 const unFollowHandler = () => props.unFollow(u.id)
//                 const followHandler = () => props.follow(u.id)
//                 return (
//                     <div className={style.wrapperUsers} key={u.id}>
//                         <div className={style.wrapperAvatar}>
//                             <div>
//                                 <img src={u.photos.small!== null? u.photos.small:avatar} alt="photo" className={style.avatar}/>
//                             </div>
//                             <div>
//                                 {u.followed
//                                     ? <button onClick={unFollowHandler}>Unfollow</button>
//                                     : <button onClick={followHandler}>Follow</button>}
//                             </div>
//                         </div>
//                         <div className={style.tableSpan}>
//                             <span>{u.name}</span>
//                             <span>{"u.location.city"}</span>
//                             <span>{"u.location.country"}</span>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };
//
// export default Users;