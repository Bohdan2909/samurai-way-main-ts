import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {ComponentType} from 'react';
type MapStatePropsType = {
    isAuth:boolean
}
let mapStateToPropsForRedirect = (state: AppStateType):MapStatePropsType => {
   return  {
       isAuth:state.auth.isAuth
   }
}
export function withAuthRedirect<T>(Component: ComponentType<T>)  {

    let RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
