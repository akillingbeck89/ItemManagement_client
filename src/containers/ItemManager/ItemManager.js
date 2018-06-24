import React from 'react'
import Websocket from 'react-websocket';
import axios from 'axios';
import Category from '../../components/Category/Category'
import './ItemManager.css';
class ItemManager extends React.Component{

    state = {
        categories : [{
            items : []
        }],
        HaveCategories : false
    };

    componentDidMount = ()=>{

        axios.get('/categories').then(response=>{
            console.log(response);
            this.setState({
                categories : response.data,
                HaveCategories : true
            })
        }).then(err=>{
            console.log(err);
        });
      
    };
    onWebSocketConnectedHandler = (event)=>{
        console.log("Connected to web socket");
    };

    onWebSocketMessageReceivedHandler = (data)=>{
        let message = JSON.parse(data);
        var opCode = message.opCode;
        var data = message.result;
        console.log("op " + opCode);
        console.log("data " + data);
    };
    onWebSocketDisconnectedHandler = ()=>{
        console.log("Disconnected from web socket");
    };

    render(){

        const categories = this.state.categories.map(category =>{
            return <Category key={category.name} name={category.name} items={category.items}/>
        });
        return (
            <div className='ItemManager'>
                <Websocket url='ws://localhost:3000/' 
                onOpen={this.onWebSocketConnectedHandler} 
                onMessage={this.onWebSocketMessageReceivedHandler} 
                onClose={this.onWebSocketDisconnectedHandler}/>
                {this.state.HaveCategories ?categories : null}
                
            </div>
        );
    }
};

export default ItemManager;