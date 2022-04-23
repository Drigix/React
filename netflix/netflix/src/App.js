import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Home from './Pages/Home/Home';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
import MyList from './Pages/MyList/MyList';
import NewAndPopular from './Pages/NewAndPopular/NewAndPopular';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Watch from './Pages/Watch/Watch';


import  './styles.scss'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={< Register />}></Route>
                <Route exact path='/login' element={< Login />}></Route>

                <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/series' element={< Series />}></Route>
                <Route exact path='/movies' element={< Movies />}></Route>
                <Route exact path='/mylist' element={< MyList />}></Route>
                <Route exact path='/newandpopular' element={< NewAndPopular />}></Route>

                <Route exact path='/watch' element={< Watch />}></Route>
            </Routes>
        </Router>
    );
}

export default App