import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import robot from './assets/images/robot.svg'
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';


// interface Props { }

// interface State {
//   robotGallery: any[]
//   count: number
// }

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setrobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `clicked ${count}`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then(data => setrobotGallery(data))
        const data = await response.json()
        setrobotGallery(data)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)

        }
      }
      setLoading(false)
    }
    fetchData()
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
      {(!error || error !== "") && <div>webError:{error}</div>}
      {!loading ?
        <div className={styles.robotList}>
          {robotGallery.map((item, index) =>
            index % 2 === 0 ?
              (<RobotDiscount id={item.id} email={item.email} name={item.name} key={item.id} />)
          :
          (<Robot id={item.id} email={item.email} name={item.name} key={item.id} />)
          )}
        </div>
        : <h2>Loading data ...</h2>
      }
    </div>
  );
}

export default App;
