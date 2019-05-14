import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
 
 class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      celebrities: [],  
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(
      this.state.celebrities.name,
      this.state.celebrities.known_for
    )
  }
   render() {
     return (
      
       <div className="Celebrities">
         <h1>Movie celebrities </h1>
         {this.state.celebrities.map(celebrities => <ul key={celebrities.id}> <img src={"https://image.tmdb.org/t/p/w185"+celebrities.profile_path} alt="" className="picture" onClick={this.handleClick}/> {} {celebrities.name}</ul>)}
       </div>
     )
   }

   componentDidMount(){
    axios.get('https://api.themoviedb.org/3/person/popular?page=6&api_key=e17acce98195ad86d300350e69858f6f')
    .then(celebrities => {
      console.log(celebrities.data.results)
      this.setState({
        celebrities:celebrities.data.results
      })
    })
  }
 }
 
 
export default App;
