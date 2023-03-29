import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Page404 from './components/Page404';
class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route exact path='/' element={<News key='general' category="general" pageSize={8}/>}/>
                        <Route exact path='/sports' element={<News key='sports' category='sports' pageSize={8}/>}/>
                        <Route exact path='/business' element={<News key='business' category='business' pageSize={8}/>}/>
                        <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment' pageSize={8}/>}/>
                        <Route exact path='/health' element={<News key='health' category='health'pageSize={8}/>}/>
                        <Route exact path='/science' element={<News key='science' category='science'pageSize={8}/>}/>
                        <Route exact path='/technology' element={<News key='technology' category='technology' pageSize={8}/>}/>
                        <Route exact path='/about' element={<About/>}/>
                        <Route exact path='*' element={<Page404/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </>
        )
    }
}

export default App;