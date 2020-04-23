import React, { Component } from 'react';
import DogSpan from "./DogSpan"
import DogInfo from "./DogInfo"
import './App.css';

export default class App extends Component{

  state = {
    dogs: [],
    currentDog: {} 
  }

  toggleGood = (event) => {
   let dogeId = event.target.id
  //  let dogResult = (currentDog.isGoodDog? false : true  )
  console.log(this.state)
  // debugger
  //  this.setState({currentDog: this.state.currentDog.isGoodDog? false : true})

   let foundDog = this.state.dogs.find(dog => dog.id.toString() === dogeId)
    // this.setState({dogs: [...dogs,   ] })
    foundDog.isGoodDog = !foundDog.isGoodDog
    this.setState({currentDog: foundDog})
    // let dogsIndex = foundDog.id - 1
    // this.setState({dogs: [] })
  }

  fetchDogs = () => {

    fetch("http://localhost:3000/pups")
    .then(resp => resp.json())
    .then(dogs => {
      console.log(dogs)
      this.setState({ dogs: dogs})
      })
  }

  listDogs = () => {
   return this.state.dogs.map((dog)=> {
      console.log(dog.name)
    return  <DogSpan renderDogInfo= { this.renderDogInfo } name={dog.name} id = {dog.id}/>
    })
  }

  renderDogInfo = (event) => {
    let dogId = event.target.id
   let currentDog =  this.state.dogs.find(dog=> dog.id.toString() === dogId)

   this.setState({currentDog: currentDog})
   
    
  }
  

render() {
  console.log(this.state)
  return (
    <div className="App">
      <button onClick = {this.fetchDogs} id="good-dog-filter" >Load Page</button>
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
       {this.listDogs()}
       
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {<DogInfo toggleGood = {this.toggleGood} currentDog={this.state.currentDog} />}
        </div>
      </div>
    </div>
  );
}
}


