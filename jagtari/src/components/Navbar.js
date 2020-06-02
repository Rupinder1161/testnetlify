import React, { Component } from 'react'
import './nav.css'



export class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                     <input type="checkbox" id="nav-check"/>
                       <div class="nav-header">
                           <div class="nav-title">Jagtari</div>
                         </div>
                     <div class="nav-btn">
                                  <label for="nav-check">
                                <span></span>
                                   <span></span>
                              <span></span>
                                   </label>
                            </div>
  
                         <div class="nav-links">
                           <a href="//github.io/jo_geek" target="_blank">ADD YOUR MENU</a>
                           <a href="http://stackoverflow.com/users/4084003/" target="_blank">LOGIN</a>
                           
                         </div>
               </div>
        )
    }
}

export default Navbar
