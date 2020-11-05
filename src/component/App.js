import React, {useEffect} from 'react';
import GameView from '../layout/GameView';
import {ThemeContextProvider} from '../context/themeContext';
import "../App.css";

function App() {
    useEffect(() => {
        document.title="Roll Dice"
    }, []);

    return (
        <ThemeContextProvider>
            <GameView style={{
                height: "100%"
            }}/>
        </ThemeContextProvider>
    );
}

export default App;
