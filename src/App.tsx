import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Technologies />
        </div>
    );
}
export default App;

const Technologies = () => {
    return <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>reack</li>

    </ul>
}

const Header = () => {
    return <div>
        <a href="#">Home</a>
        <a href="#">New Feed</a>
        <a href="#">Messages</a>
    </div>
}

