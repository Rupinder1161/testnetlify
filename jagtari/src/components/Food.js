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
        axios.get('/food/')
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
                               
                                       <div>
                                         
                                                       <List style={{display:"flex",flexFlow:"row wrap" ,justifyContent:"center",width:"100%"}}>
                                                       {fullData.map(e => e.Price <= this.state.Price?
                                                       <ListItem  style={{ maxWidth:"40ch",margin:"20px",boxShadow: "5px 10px 8px #888888"}} >
                                                                   <ListItemAvatar>
                                                                   <Avatar alt="Remy Sharp" src={e.VenueName} variant="rounded" style={{backgroundColor:"green",padding:"2px",color: '#fff',color: '#fff'}} >${e.Price}</Avatar>
                                                                    </ListItemAvatar>
                                                                    
                                                                     <ListItemText  key={e._id}  primary={e.FoodName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' } secondary={
                                                                    <div>
                                                                   <React.Fragment>
                                                                             <Typography component="span" variant="body2" color="textPrimary">{e.VenueName} <span className="price" > ${e.Price}</span>
                                                                             {" — I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands this"}
                                                                             </Typography>
                                                                             <Button variant="contained" style={{width:"100%"}} color="secondary">Order Now</Button>
                                                                   </React.Fragment>
                                                                   </div>}  />
                 
                                                       </ListItem>:"")} 
                                                    </List>
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
