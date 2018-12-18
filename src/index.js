import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Search from './searchbar'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Display from './display'
ReactDOM.render(<BrowserRouter>
<div>
    <Route path = "/" component = {Header}/> 
     <Route path = "/" component = {Search}/> 
    <Route path = "/display" component = {Display}/>
</div>
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();