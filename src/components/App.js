import React from 'react';
import { Router } from '@reach/router'
import Home from './Home';
import Dashboard from './Dashboard';


function App() {
    return (
        <div className="app_container">
            <Router >
                <Home default path="/"/>
                <Dashboard path = "dashboard" />
            </Router>
        </div>
    )
}
export default App;