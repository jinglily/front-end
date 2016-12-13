import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
class Users extends React.Component{
  constructor(){
    super();
    this.state={
      user:[]
    }
  }

  componentWillMount(){
    axios.get(`http://localhost:4000/users/${this.props.params._id}`)
    .then(res => console.log(res))
  }
  render(){

    return(
      <div>


      </div>
    )
  }
}
export default Users;
