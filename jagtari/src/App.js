import React,{Component} from 'react';
import './App.css';
import Food from './components/Food';


export class App extends Component {


  render() {


    return (
      <div className="App">
        <Food/>
    </div>
    )
  }
}

export default App
