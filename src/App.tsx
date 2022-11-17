import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/state';


type AppType = {
    store: StoreType

}

function App(props: AppType) {
    let state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile posts={state.profilePage}
                           // addPost={props.store.addPost.bind(props.store)}
                           // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                              dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route exact path="/dialogs"
                       render={() => <Dialogs messages={state.dialogsPage.messageData}
                                              dialogs={state.dialogsPage.dialogsData}
                                              dispatch={props.store.dispatch.bind(props.store)}
                                              newMessage={state.dialogsPage.newMessage}


                       />}/>
            </div>
        </div>

    );
}

export default App;
