import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
