import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ManagerStore from "./store/ManagerStore";
import DatabaseStore from "./store/DatabaseStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new ManagerStore(),
        database: new DatabaseStore(),
    }}>
        <App />
    </Context.Provider>
);

