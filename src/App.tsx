import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;