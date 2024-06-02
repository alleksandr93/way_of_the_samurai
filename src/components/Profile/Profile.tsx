import React from 'react';
import s from './Profile.module.scss';
import {MyPosts} from './MyPosts/MyPosts';
export const Profile = () => {
    return <div>
        <div>
            <img className={s.img}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WAOOKFMTpyptDHLj3VGsxzg7tz4H1G4ijT3HodkbPNDIl4tL91j9lAX6Y6T2QnxOWG8&usqp=CAU"
                alt=""/>
        </div>
        <div>
            ava+decrp
        </div>
        <MyPosts/>
    </div>

        ;
};

