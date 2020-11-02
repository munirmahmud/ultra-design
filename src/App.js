import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';
import { Home, Products, Services, Signup } from './pages';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/sign-up" component={Signup} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
