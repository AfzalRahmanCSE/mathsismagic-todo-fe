import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import React from 'react';
import Todo from './Todo'
import NotFound from './NotFound'
import Signin from './Signin'
import Signup from './Signup'
const App = () => {
    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>    
                <Route path='/todo' element={<Todo/>}/>    
                <Route path='/contact' element={<Contact/>}/> 
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>


                <Route path='*' element={<NotFound/>}/>   

            </Routes>


            <hr />
            <Footer />
        </BrowserRouter>
    </div>
}

export default App;