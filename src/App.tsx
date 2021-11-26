import React from 'react';
import styles from './App.module.css'
import robot from './assets/images/robot.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


interface Props { }

interface State {
  robotGallery: any[]
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ robotGallery: data }))
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={robot} className={styles.appLogo} alt='logo' />
          <h1>Rock 'Em Sock 'Em Robots.</h1>
        </div>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>Click</button>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(item => <Robot id={item.id} email={item.email} name={item.name} key={item.id} />)}
        </div>
      </div>
    );
  }

}

export default App;
