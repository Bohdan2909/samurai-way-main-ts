import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import axios from 'axios';
import {ProfileType, setUserProfileAC} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type ProfileContainerTypeProps = MapStatePropsType & MapDispatchToProps
type ParamsPropsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsPropsType> & ProfileContainerTypeProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}
let WithUrlProfileContainer = withRouter(ProfileContainer)
export default connect<MapStatePropsType,MapDispatchToProps,{},AppStateType>(mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);