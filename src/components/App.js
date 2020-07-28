import React , { useState } from 'react';
import { Router, navigate } from '@reach/router'
import Home from './Home';
import Dashboard from './Dashboard';
import { auth } from '../../firebase';


function App() {
    const [ user , setUser ] = useState(false)

auth.onAuthStateChanged(function(user) {
    if (user){
        console.log("signed in:"+user)
        setUser(user);
    }else{
        console.log("Not signed in")
    }
})

    if (user==false){
        navigate('/');
    }else{
        navigate('dashboard');
    }
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