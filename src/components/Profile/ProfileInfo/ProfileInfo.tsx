import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader/Preloader';

type ProfileInfoTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoTypeProps) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="avatar"/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.github}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.contacts.vk}</div>
        </div>
    );
};


export default ProfileInfo


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: true,
        status: this.props.status

    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status)
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                this.activateEditMode()
            }
        }

        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.deactivateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                    : <div>
                        <input
                            autoFocus={true}
                            placeholder={'Write your status...'}
                            onKeyDown={onKeyDownHandler}
                            onBlur={this.activateEditMode}
                            value={this.state.status}
                            type="text"
                            onChange={this.changeStatus}
                        />

                    </div>}
            </div>
        )
    }
}
