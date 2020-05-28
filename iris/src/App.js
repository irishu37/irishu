import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import AboutMe from './components/pages/aboutMeComponents/aboutMe';
import Experience from './components/pages/experience';
import Projects from './components/pages/projects';

// includes
import './Assets/css/default.min.css';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="main">
                        <Route exact path='/' component={AboutMe} />
                        <Route exact path='/experience' component={Experience} />
                        <Route exact path='/projects' component={Projects} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
