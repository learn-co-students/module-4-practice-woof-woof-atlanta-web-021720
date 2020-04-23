import React, { Component } from "react"


export default class DogInfo extends Component {




     isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    returnBtn = () => {


        

        console.log(this.props.currentDog)
    if(this.isEmpty(this.props.currentDog)) {
        
        return null
    } else {
        return <button  id = {this.props.currentDog.id} onClick = {this.props.toggleGood} > {this.props.currentDog.isGoodDog? "Good Dog" : "Bad Dog" }</button> 
    }
}


    render(){
        console.log(this.props.currentDog)
        return(
            <>
            <img src = {this.props.currentDog.image}/> 
            <h2>{this.props.currentDog.name}</h2>

            {this.returnBtn()}
            
            </>
        )
    }
}
