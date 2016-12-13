import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
class App extends React.Component{
  constructor(){
    super();
    this.state={

      user:[]


    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/users')
      .then(res => this.setState({user:res.data.users}))
    console.log('aaa')
  }



  render(){
    var user = this.state.user.map((item,i) =>
    <div key={i}>
      <Link to={`/users/${item._id}`}>{item.username}</Link>
    </div>)
    console.log(this.state.title);
    return(
      <div>
        {user}

      </div>
    )
  }
}
export default App;
