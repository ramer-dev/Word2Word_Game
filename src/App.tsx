import React from 'react';
import './App.css';

import Header from './header/Header'
import MainContext from "./context/Context";
const App : React.FC = () => {
    return (
        <div className="App">
            <Header/>

            <div className={'left'}>
                test
            </div>
            <div className={'context'}>
                <MainContext/>
            </div>
            <div className={'right'}>
                right
            </div>

            <footer>
                test
            </footer>
        </div>
    );
}

export default App;
