import React, { Component } from "react"

//Dog class
export default class Dog extends Component {
    constructor() {
        super()
        this.state = {
            allPups: []
        }
    }

    //Load allPups array with fetch request as component is finished loading 
    componentDidMount() {
        fetch("http://localhost:3000/pups")
            .then(resp => resp.json())
            .then(pups => {
                this.setState({ allPups: pups })
            })
    }

    //Use map with allPups to create a span for each object and send it back to parent
    render() {

        return (
            //React Fragment allows a user to return multiple elements in a return without 
            //creating a new surrounding or containing element...Also displays dogs based on behavior
            <React.Fragment>
                {this.props.dogBehaviorFilter === false ?
                    this.state.allPups.map((pup) => (
                        <span onClick={() => this.props.handleDogInfo(pup)} key={pup.id}>{pup.name}</span>
                    ))
                    :
                    this.state.allPups.map((pup) => (
                        pup.isGoodDog === true && <span onClick={() => this.props.handleDogInfo(pup)} key={pup.id}>{pup.name}</span>
                    ))
                }

            </React.Fragment>
        )
    }
}