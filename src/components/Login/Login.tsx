import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

const Login = () => {
    const onSubmit = (formData:FormDataType)=> {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} type="email" component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type="password" component={'input'}/>
            </div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
           <div>
               <button>Login</button>
           </div>
        </form>

    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form:'login'
})(LoginForm)