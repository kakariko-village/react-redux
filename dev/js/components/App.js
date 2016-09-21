/**
 * Created by Remedy on 9/20/2016.
 */
import React from 'react';
import UserList from '../containers/user-list'
require('../../scss/style.scss');

const App = () => ( //ES6
    <div>
        <h2>
            Username List:
        </h2>
        <UserList/>
        <hr />
        <h2>
            Username Detail:
        </h2>
    </div>
);

export default App;