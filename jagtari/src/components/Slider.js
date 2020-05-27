import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';






const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',// 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));




export class Slidera extends Component {


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
       
      }
      componentWillUnmount(){
        this.getFood()
      }








    render() {
      

       
        var settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            autoplaySpeed:2000,
            accessibility:true,
            focusOnSelect:true,
            arrows:true,
            rtl:true,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };

          var settingse = {
            // dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: true,
            autoplaySpeed:2500,
            accessibility:true,
            focusOnSelect:true,
            arrows:true,
            vertical:true,
            adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };





     const fullData = this.state.fullData
        return (
                 <div className="Slidermain">
                                      <Slider {...settings}>
                               
                                                              {fullData.map(e => 
                                                               <div>
                                                                <Card style={{backgroundColor:"#F5F5DC"}} >
                                                                 <CardHeader avatar={  <Avatar aria-label="recipe" > R </Avatar>}  action={<IconButton aria-label="settings"> </IconButton> }
                                                                       title={e.VenueName}
                                                                      subheader="September 14, 2016" />
                                                                 <CardMedia  className={useStyles.media} image="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" title="Paella dish"><img className="ImgCenter" src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"/></CardMedia>
                                                                  <CardContent> <Typography variant="body2" color="textSecondary" component="p">This impressive paella is a perfect party dish and a fun meal to cook together with your
                                                                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                                                  </Typography>
                                                                </CardContent>
                                                                </Card></div>
                                                                )}
                               
                               
                               
                                    </Slider>

                                    <Slider {...settingse}>
                               
                                                              {fullData.map(e => 
                                                               <div>
                                                                <Card style={{backgroundColor:"#F5F5DC"}} >
                                                                 <CardHeader avatar={  <Avatar aria-label="recipe" > R </Avatar>}  action={<IconButton aria-label="settings"> </IconButton> }
                                                                       title={e.VenueName}
                                                                      subheader="September 14, 2016" />
                                                                 <CardMedia  className={useStyles.media} image="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" title="Paella dish"><img className="ImgCenter" src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"/></CardMedia>
                                                                  <CardContent> <Typography variant="body2" color="textSecondary" component="p">This impressive paella is a perfect party dish and a fun meal to cook together with your
                                                                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                                                  </Typography>
                                                                </CardContent>
                                                                </Card></div>
                                                                )}
                               
                               
                               
                                    </Slider>

                                    <Slider {...settings}>
                               
                                          {fullData.map(e => 
                                           <div>
                                            <Card style={{backgroundColor:"#F5F5DC"}} >
                                             <CardHeader avatar={  <Avatar aria-label="recipe" > R </Avatar>}  action={<IconButton aria-label="settings"> </IconButton> }
                                                   title={e.VenueName}
                                                  subheader="September 14, 2016" />
                                             <CardMedia  className={useStyles.media} image="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" title="Paella dish"><img className="ImgCenter" src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"/></CardMedia>
                                              <CardContent> <Typography variant="body2" color="textSecondary" component="p">This impressive paella is a perfect party dish and a fun meal to cook together with your
                                              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                              </Typography>
                                            </CardContent>
                                            </Card></div>
                                            )}



                                  </Slider>

                                  <Slider {...settings}>
                               
                                          {fullData.map(e => 
                                           <div>
                                            <Card style={{backgroundColor:"#F5F5DC"}} >
                                             <CardHeader avatar={  <Avatar aria-label="recipe" > R </Avatar>}  action={<IconButton aria-label="settings"> </IconButton> }
                                                   title={e.VenueName}
                                                  subheader="September 14, 2016" />
                                             <CardMedia  className={useStyles.media} image="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" title="Paella dish"><img className="ImgCenter" src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"/></CardMedia>
                                              <CardContent> <Typography variant="body2" color="textSecondary" component="p">This impressive paella is a perfect party dish and a fun meal to cook together with your
                                              guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                              </Typography>
                                            </CardContent>
                                            </Card></div>
                                            )}



                                  </Slider>
                         </div>
        )
    }
}


export default Slidera

