import React from 'react';
import s from './Profile.module.scss';
export const Profile = () => {
    return <div className={s.content}>
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
        <div className={s.posts}>
            <div className={s.item}>post1</div>
            <div>post2</div>
        </div>
    </div>

        ;
};
