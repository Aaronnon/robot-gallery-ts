import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import robot from './assets/images/robot.svg'
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


interface Props { }

interface State {
  robotGallery: any[]
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setrobotGallery] = useState<any>([])

  useEffect(() => {
    document.title = `clicked ${count}`
  }, [count])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setrobotGallery(data))
  }, [])
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => this.setState({ robotGallery: data }))
  // }

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={robot} className={styles.appLogo} alt='logo' />
        <h1>Rock 'Em Sock 'Em Robots.</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map(item => <Robot id={item.id} email={item.email} name={item.name} key={item.id} />)}
      </div>
    </div>
  );
}

export default App;
