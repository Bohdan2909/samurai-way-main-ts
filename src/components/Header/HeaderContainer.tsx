import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserDataTC} from '../../redux/authReducer';


type PropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends Component<PropsType> {
    componentDidMount() {

        this.props.getUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}
            />
        );
    }
}

type MapDispatchToPropsType = {
    getUserDataTC: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUserData: (userId: number, email: string, login: string) => {
//             dispatch(setUserDataAC(userId, email, login))
//         }
//     }
// }

export default connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserDataTC})(HeaderContainer);