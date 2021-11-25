import React from 'react';
import styles from './App.module.css'
import robot from './assets/images/robot.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={robot} className={styles.appLogo} alt='logo' />
        <h1>Rock 'Em Sock 'Em Robots.</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map(item => <Robot id={item.id} email={item.email} name={item.name} />)}
      </div>
    </div>
  );
}

export default App;
