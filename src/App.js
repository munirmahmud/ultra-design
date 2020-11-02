import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar />
            </Router>
        </>
    )
}

export default App;
