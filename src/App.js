import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import NewsComp from './Component/NewsComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize=15;
  render() {
    return (
        <Router>
          <div>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<NewsComp key='' pageSize={this.pageSize} country="in" category=""/>}/>
            <Route exact path='/general' element={<NewsComp key='general' pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path='/business' element={<NewsComp key='business' pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path='/entertainment' element={<NewsComp key='entertainment' pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path='/sports' element={<NewsComp key='sports' pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path='/health' element={<NewsComp key='health' pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path='/science' element={<NewsComp key='science' pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path='/technology' element={<NewsComp key='technology' pageSize={this.pageSize} country="in" category="technology"/>}/>
          </Routes>
        </div>
        </Router>
    )
  }
}

