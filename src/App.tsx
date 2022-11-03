import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {StateType} from './redux/state';


type AppType = {
    state: StateType
    addPost: (textMessage: string) => void
}

function App(props: AppType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile posts={props.state.profilePage}
                                              addPost={props.addPost}
                       />}/>
                <Route exact path="/dialogs"
                       render={() => <Dialogs messages={props.state.dialogsPage.messageData}
                                              dialogs={props.state.dialogsPage.dialogsData}

                       />}/>
            </div>
        </div>

    );
}

export default App;
