import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import GlobalStyle from './globalStyles';
import { Home, Services } from './pages';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
