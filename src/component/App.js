import React from 'react';
import GameView from '../layout/GameView';
import {ThemeContextProvider} from '../context/themeContext';
import "../App.css";

function App() {
    return (
        <ThemeContextProvider>
            <GameView/>
        </ThemeContextProvider>
    );
}

export default App;
