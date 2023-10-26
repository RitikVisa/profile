import React, { Component, useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Car from './components/Car';
import Profile from './Profile';
import Demo from './components/Demo';
import PostUser from './PostForm';
// import PostUser from './PostForm'



function App() {
// state to display data



    return (
      <div className="con">
        <div className="App">
            
        </div>
        <PostUser/>

        <Profile />
      </div>
                        

    );
}

export default App;