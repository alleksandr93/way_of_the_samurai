import React from 'react';
import './App.css';


const App = () => {
    const logo = 'https://png.pngtree.com/png-clipart/20190604/original/pngtree-business-logo-design-png-image_915991.jpg'
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src={logo} alt="Картиночка"/>
            </header>
            <nav className={'nav'}>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WAOOKFMTpyptDHLj3VGsxzg7tz4H1G4ijT3HodkbPNDIl4tL91j9lAX6Y6T2QnxOWG8&usqp=CAU"
                        alt=""/>
                </div>
                <div>
                    ava+decrp
                </div>
                <div>
                    My post
                </div>
                <div>
                    New post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>

    );
}
export default App;




