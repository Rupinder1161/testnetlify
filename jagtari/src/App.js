import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       h:''
    }
  }
  render() {
    const data = () =>{
      axios.get('/api')
      .then(response =>
        {
          this.setState({
            h : response.data.map(e =>e.message) +"\t" 
          })
          console.log(response.data.map(e =>e.message))})
      .catch((error) => {
        console.log(error);
      })
    }
    return (
      <div className="App">
      <button onClick={data}>Btn</button>
          <h1>{this.state.h}</h1>
    </div>
    )
  }
}

export default App
