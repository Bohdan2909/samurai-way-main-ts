import React, {createContext} from 'react';
import store from './state';
import {StoreType} from './state';


export const  StoreContext = createContext({}as StoreType)
export type ProviderType = {
    store:StoreType
    children: React.ReactNode
}
 export const Provider =(props:ProviderType)=>{
return (
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
)
}