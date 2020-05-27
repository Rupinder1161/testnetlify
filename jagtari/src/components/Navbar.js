import React, { Component } from 'react'
import './food.css'

const g = [
    {header:"JagTari", url:'/'},

]

export class Navbar extends Component {
    render() {
        return (
            <div className="header">
                 {g.map(h => {
                    // console.log(h.url)
                    return <h4>
                         {/* <Link to={h.url} */}
                          {/* className="Link"> */}
                          {h.header}
                          {/* </Link> */}
                          </h4>
                    })} 
            </div>
        )
    }
}

export default Navbar
