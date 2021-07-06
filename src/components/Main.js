import React, { Component } from 'react'
import Drinks from './Drinks';
import axios from 'axios';

export class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            result : [],
            addDrink :[],
        }
    }
    componentDidMount = async () => {
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/getData`);
    }
    addToFav = async (data) =>{
        const addDrink = await axios.post(`${process.env.REACT_APP_SERVER}/addToFav` , data) ;
        this.setState ({
            addDrink :  addDrink.data

        })
    }











    render() {
        return (
            <div>
                  {this.state.result.map((item , index) =>{
                      return (
                          <Drinks 
                          drink ={item }
                          addToFav = {this.addToFav}         
                          key = {index}
                          idx = {index}
                             />)
              
                    
                })
                }
                
            </div>
        )
    }
}

export default Main
