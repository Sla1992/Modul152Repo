import React from 'react';
import UsersList from "../components/UsersList";


const Users = () => {
    const USERS = [

        // If commented out, site "no users found" shows up
        {
             id: 'u1',
             name: 'Max Schwartz',
             image: 'https://www.fujifilmusa.com/products/digital_cameras/x/fujifilm_x20/sample_images/img/index/ff_x20_008.JPG',
             places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;