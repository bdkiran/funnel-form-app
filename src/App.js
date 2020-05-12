import React from 'react';
import FormControl from './components/FormControl';
import TopBar from './components/navigationComponents/TopBar';
import BottomBar from './components/navigationComponents/BottomBar'
import './App.css';


function App() {
  return (
    <div className="app">
      <TopBar/>
      <div className="app-main">
        <div className="app-main2-l"/>
        <div className="app-main2-m">
          <FormControl/>
        </div>
        <div className="app-main2-r"/>
      </div>
      <BottomBar/>
    </div>
  );
}

export default App;
