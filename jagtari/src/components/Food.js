import React, { Component } from 'react'
import axios from 'axios'




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








const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: "white",
    },
    inline: {
      display: 'inline',
    },
  }));




export class Food extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullData:[]
        }
        this.getFood = this.getFood.bind(this)
    }

    getFood(){
        axios.get('http://localhost:5000/food/')
        .then(response => {
            
          this.setState({ fullData: response.data })
          console.log(response.data )
         // console.log(this.state.exercises.style)
        })
        .catch((error) => {
          console.log(error);
        })
      }
    
    render() {
        const fullData = this.state.fullData
        return (
            <div>
                                <div  style={{width:"100%"}}>
                                  
                                             <FormControl style={style.inputbox} size="small" variant="filled" style={useStyles.margin} variant="outlined">
                                                   <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                   <OutlinedInput
                                                       id="outlined-adornment-amount"
                                                       // defaultValue={0}
                                                       value={this.state.Pric}
                                                       onChange={this.getFood}
                                                       startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                       labelWidth={60}
                                                       variant="filled"
                                                       style={{background:"white",}}
                                                        />
                                                       </FormControl>
                                         
                                  </div>

                                       <div style={style.root} >


                                        {fullData.map(e => e.Price > 0?
                                            <List  >
                                            <ListItem alignItems="flex-start" style={{marginTop:"20px"}}>
                                             <ListItemAvatar>
                                             <Avatar alt="Remy Sharp" src={e.VenueName} />
                                              </ListItemAvatar>
                                               <ListItemText key={e._id}  primary={e.FoodName} secondary={
                                                           <React.Fragment>
                                                    <Typography component="span" style={style.inline} variant="body2" color="textPrimary">{e.VenueName}</Typography>{" — I'll be in your neighborhood doing errands this…"}
                                                                                                       </React.Fragment>} />
                                         </ListItem>
                                         </List> :"")}
                                            </div>
            </div>
        )
    }
}


const style = {
    background:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"center",
        color:"white",
        width:"80%",
        backgroundImage:"white",
        marginTop:"10vh",
        marginBottom:"10vh",
        borderRadius:'20px',
    },
    inline: {
        display: 'inline',
      },
    inputbox:{
        margin:"20px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
}
export default Food
