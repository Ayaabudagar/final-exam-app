import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';
import UpdateForm from './UpdateForm';

export class FavoriteDrinks extends Component {
    constructor (props){
        super (props);
        this.state={
            result : [],
            id :'',
            show :false,
            index:-1,
            strDrink :'',
            strDrinkThumb :'',
            idDrink :''
        }
    }
    componentDidMount = async () => {
        let result = await axios.get (`${process.env.REACT_APP_SERVER}/getFavData`);
        this.setState({
            result : result.data
        })
    }

    delete = async (id)=>{ 
        const newArr = await axios.delete(`${process.env.REACT_APP_SERVER}/deletFav?id=${id}`);
        console.log(newArr.data);
        this.setState({
            result: newArr.data
        })
    }
     showUpdateForm = (idx)=>{
         
        this.setState({
            show:true,
            index:idx,
            strDrink:this.state.result[idx].strDrink,
            strDrinkThumb:this.state.result[idx].strDrinkThumb,
            idDrink:this.state.result[idx].idDrink
           
        })
    }
    
    handleClose = ()=>{
        this.setState({
            show:false
        })
    }
    updateData = async(e)=>{
        e.preventDefault();
        const obj = {
            strDrink:e.target.strDrink.value,
            
            strDrinkThumb:e.target.strDrinkThumb.value,
            idDrink:e.target. idDrink.value,
            id:this.state.result[this.state.index]['_id']
        }
        
        const newData = await axios.put(`${process.env.REACT_APP_SERVER}/updateFav`,obj);
        
        // console.log(newData.data)
        this.setState({
            result:newData.data,
            show:false
        })
       
           
        }






    render() {
        return (
            <div>
                 {this.state.result.map((item,idx) => {
                    return (
                        <Card style={{ width: '18rem', display:'inline-block' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.  strDrink}</Card.Title>
                                <Card.Text>
                                    {item.idDrink}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.showUpdateForm(idx)}>Update</Button>

                                <Button variant="primary" onClick={()=>this.delete(item._id)}>Delete</Button>
                            </Card.Body>
                        </Card>)
                          
                })}
                
                <UpdateForm
                show={this.state.show}
                handleClose={this.handleClose}
                strDrink={this.state.  strDrink}
                strDrinkThumb={this.state.strDrinkThumb}
                idDrink={this.state.  idDrink}
                updateData={this.updateData}
                 />
                
            </div>
        )
    }
}

export default FavoriteDrinks
