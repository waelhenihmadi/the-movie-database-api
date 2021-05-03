import React from "react";
import './App.css';
import Nav from './Components/Nav'
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import MovieList from './Components/MovieList';
import ComponentAxios from './Components/ComponentAxios';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Container maxWidth="lg">

                </Container>
                <ComponentAxios />
            </div>
        </Router>
    );
}


export default App;
