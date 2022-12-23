import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserDataAC} from '../../redux/authReducer';
import {API} from '../../api/api';


type PropsType = MapStatePropsType & MapDispatchToPropsType

class HeaderContainer extends Component<PropsType> {
    componentDidMount() {
        API.authMe()
            .then(res => {
                console.log(res)
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setUserData(id, email, login)
                }

            })
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
    setUserData: (userId: number, email: string, login: string) => void

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
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserData: (userId: number, email: string, login: string) => {
            dispatch(setUserDataAC(userId, email, login))
        }
    }
}

export default connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(HeaderContainer);