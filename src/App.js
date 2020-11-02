import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import GlobalStyle from './globalStyles';
import { Home } from './pages';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
