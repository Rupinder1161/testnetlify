import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


const Exercise = props => (

  <tr>
    <td >{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
    {/* <div > 
          <select 
           style={{backgroundColor: (props.color)  }}
          //  value={props.status} 
          onChange={props.status}
          >
            <option value="Complaint Taken">Complaint Taken</option>
            <option value="Video Sent">Video Sent</option>
            <option value="Fully approoved">Got Approoval</option>
          </select>
        </div> */}
    </td>
    
    {/* <td>
      <Link to={"/edit/"+props.exercise._id} className="btn btn-dark">edit</Link> | <a href="#" className="btn btn-warning"  onClick={() => { props.deleteExercise(props.exercise._id) }}>Approve</a>
    </td> */}
  </tr>
)



export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       h:'',
       exercises:[]
    }
    this.getExcercise = this.getExcercise.bind(this);
    this.exerciseList = this.exerciseList.bind(this);
  }

   getExcercise(){
    axios.get('http://localhost:5000/excercises/')
    .then(response => {
      this.setState({ exercises: response.data })
      // console.log(this.state.exercises)
     // console.log(this.state.exercises.style)
    })
    .catch((error) => {
      console.log(error);
    })
  }

 


  componentDidMount() {

   this.getExcercise()
    setInterval(this.data,5000)
  }


    exerciseList(){
    return this.state.exercises.map(currentexercise => {
    // console.log(currentexercise.style)
    return <Exercise exercise={currentexercise}/>;
      
    })
  }

  render() {

   
  const  data = () =>{
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
          <table className="table table-striped table-dark table-hover">
          <thead className="thead-light">
            <tr>
              <th>Device Name</th>
              <th>Description</th>
              <th>Serail No.</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
            {/* <List tasks={["hello","Love"]}/> */}
          </tbody>
        </table>
    </div>
    )
  }
}

export default App
