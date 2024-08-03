// src/App.jsx
import React from 'react';
import Flower from './Flower';
import './App.css';

function App() {
    return (
        <div className="App">
            <h6><i style={{ color: 'blue', fontSize: '24px' }}>!!.........Let's Hypnotize Yourself.........!!</i></h6>
            <hr />
            <marquee bgcolor="yellow" scrollamount="17" direction="right" hspace="21px" behavior="alternate">
                <font color="red" size="7" face="monotype corsiva">***Floral Spin***</font>
            </marquee>
            <hr />
            <Flower />
        </div>
    );
}

export default App;