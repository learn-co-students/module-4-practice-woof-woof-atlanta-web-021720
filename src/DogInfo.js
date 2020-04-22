import React, { Component } from "react";

export default class DoInfo extends Component {

    //Toggle Good Dog/ Bad Dog Behavior
    handleDogToggle = () => {
        let pup = this.props.pup
        pup.isGoodDog = !pup.isGoodDog
        fetch(`http://localhost:3000/pups/${pup.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pup)
        })
            .then(resp => resp.json())
            .then(updatedPup => {
                console.log(updatedPup)
                document.querySelector("#behaviorBtn").innerHTML = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"
            })

    }

    render() {
        let pup = this.props.pup
        return (
            <React.Fragment>
                <img src={pup.image} alt={pup.name}></img>
                <h2>{pup.name}</h2>
                {pup.name != null && <button id="behaviorBtn" onClick={this.handleDogToggle}>{pup.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>}
            </React.Fragment>
        )
    }
}