import {BrowserRouter,Route} from 'react-router-dom';
import { Routes } from 'react-router';


import Menu from './Menu';
import MovieList from './MovieList';
import Signin from './Signin';
import Signup from './Signup';
import About from './About';

function MainRouter(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                
                <Route path="/" element={<MovieList/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;