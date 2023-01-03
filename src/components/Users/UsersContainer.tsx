import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../redux/redux-store';
import {
    followTC, getUsersTC,
     setToggleFollowingAC,
    unFollowTC,
    UsersType
} from '../../redux/usersReducer';
import React from 'react';


type PropsType = MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <Users
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                followingProgress={this.props.followingProgress}
            />
        );

    }

}

type MapStatePropsType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: UsersType[]) => void
    // setCurrentPage: (currentPage: number) => void
    // setUsersTotalCount: (count: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    setToggleFollowing: (isFollow: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }

}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         // setUsers: (users) => {
//         //     dispatch(setUsersAC(users))
//         // },
//         // setCurrentPage: (currentPage) => {
//         //     dispatch(setCurrentPageAC(currentPage))
//         // },
//         // setUsersTotalCount: (count) => {
//         //     dispatch(setUsersTotalCountAC(count))
//         // },
//         // toggleIsFetching: (isFetching) => {
//         //     dispatch(setToggleFetchingAC(isFetching))
//         // },
//         setToggleFollowing: (isFollow, userId) => {
//             dispatch(setToggleFollowingAC(isFollow, userId))
//         },
//         getUsers: (currentPage, pageSize) => dispatch(getUsersTC(currentPage, pageSize))
//     }
// }

export default connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow: followTC,
    unFollow: unFollowTC,
    // setUsers: setUsersAC,
    // setCurrentPage: setCurrentPageAC,
    // setUsersTotalCount: setUsersTotalCountAC,
    // toggleIsFetching: setToggleFetchingAC,
    setToggleFollowing: setToggleFollowingAC,
    getUsers: getUsersTC
},)(UsersContainer)
// export default connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)