import React, { Component } from 'react'
import axios from 'axios'

import './food.css'
import Navbar from './Navbar'

import Slidera from './Slider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import Button from '@material-ui/core/Button';


import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const postiondata = Math.floor(Math.random() * (100 - 10)) + 10;

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}


export class Food extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullData:[],
             Price:0
        }
        this.getFood = this.getFood.bind(this)
    }

    getFood(){
        axios.get('http://localhost:5000/food/')
        .then(response => {
            
          this.setState({ fullData: response.data })
          console.log(response.data )
         
        })
        .catch((error) => {
          console.log(error);
        })
      }

      componentDidMount() {
       
        this.getFood()
        // setInterval(this.getFood,5000)
       
      }

      componentWillUnmount(){
        this.getFood()
      }

    
      getPrice = (e) =>{
        this.setState({
            Price:e.target.value
        })
        console.log(this.state.Price)
         }

    render() {
        const fullData = this.state.fullData
      

        return (     
          
                                 <div>
                                              <div className="center">   
                                                        <Navbar/>
                                                        
                             {/* firstpart */}
                                                     <div style ={{margin:"30px"}}>
                                                         <FormControl  size="small" variant="filled" variant="outlined">
                                                               <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                               <OutlinedInput
                                                                   id="outlined-adornment-amount"
                                                                   // defaultValue={0}
                                                                   value={this.state.Price}
                                                                   onChange={this.getPrice}
                                                                   startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                                   labelWidth={60}
                                                                   variant="filled"
                                                                   style={{background:"white",}}
                                                                    />
                                                          </FormControl>
                                                       </div>
                                                      
                                                 </div>
            
                                {/* firstpart */}
                                {/* secondpart */}
                               
                                       <div className="Center"  >
                                    
                                                   {fullData.map(e => e.Price <= this.state.Price?
                                                       <List style={{maxWidth: '40ch'}}>
                                                       <ListItem alignItems="flex-start" style={{marginTop:"20px"}} >
                                                                   <ListItemAvatar>
                                                                   <Avatar alt="Remy Sharp" src={e.VenueName} />
                                                                    </ListItemAvatar>
                                                                    
                                                                     <ListItemText  key={e._id}  primary={e.FoodName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' } secondary={
                                                                    <div>
                                                                   <React.Fragment>
                                                                             <Typography component="span" variant="body2" color="textPrimary">{e.VenueName} <span className="price" > ${e.Price}</span>
                                                                             {" — I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this"}
                                                                             </Typography>
                                                                             <Button variant="contained" color="secondary">Order Now</Button>
                                                                   </React.Fragment>
                                                                   </div>
                                                                  
                                                                  
                                                                  }  />
                 
                                                       </ListItem>
                                                    </List> :"")}
                                            </div>
                                   {/* secondpart */}

                                   {/* thirdpart */}
                                   
                                      <Slidera/>

                                   
                            
                                  {/* thirdpart */}

                                  
                         </div>
        )
    }
}



export default Food