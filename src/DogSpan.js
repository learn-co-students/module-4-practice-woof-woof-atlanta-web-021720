
import React, { Component } from 'react'


export default class DogSpan extends Component {


    render(){
      
        return(
        <span onClick = {this.props.renderDogInfo} id = {this.props.id}> {this.props.name} </span>
        )
    }


}