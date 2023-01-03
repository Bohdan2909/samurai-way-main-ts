import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfileAC, setUserProfileTC} from '../../redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type ProfileContainerTypeProps = MapStatePropsType & MapDispatchToProps
type ParamsPropsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsPropsType> & ProfileContainerTypeProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) userId = 2
        this.props.setUserProfileTC(userId)

    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

type MapStatePropsType = {
    profile: ProfileType
    // isAuth:boolean
}
type MapDispatchToProps = {

    setUserProfileTC:(userId:number)=> void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        // isAuth:state.auth.isAuth
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         setUserProfile: (profile: ProfileType) => {
//             dispatch(setUserProfileAC(profile))
//         }
//     }
// }
export default compose<React.ComponentType>(connect<MapStatePropsType,MapDispatchToProps,{},AppStateType>(mapStateToProps, {setUserProfileTC}),withRouter)(ProfileContainer)
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlProfileContainer = withRouter(AuthRedirectComponent)
// export default connect<MapStatePropsType,MapDispatchToProps,{},AppStateType>(mapStateToProps, {setUserProfileTC})(WithUrlProfileContainer);