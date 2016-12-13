import React from 'react';
import axios from 'axios';

class User extends React.Component{
 constructor(){
   super();
   this.state={
     user:{}
   }
 }
componentWillMount(){
  axios.get(`http://localhost:4000/users/${this.props.params._id}`)
    .then(res => this.setState({user:res.data}))
}
  render(){

    return(
      <div>
        {this.state.user.username}<br />
        {this.state.user.age}<br />
        {this.state.user.email}

      </div>
    )
  }
}
export default User;
