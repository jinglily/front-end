import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
      user:[],
      title:[]
    }
  }
  componentWillMount(){
    axios.get(' http://localhost:4000/users')
      .then(res => this.setState({user:res.data.users}))
  }
  handleClick(id){
    axios.get(`http://localhost:4000/users/${id}`)
    .then(res => this.setState({title:res.data}))
  }
  render(){
    var text = this.state.user.map((item,i) => <div key={i} onClick={this.handleClick.bind(this,item._id)}>{item.username}</div>)
    return(
      <div>
        {text}<br />
        姓名：{this.state.title.username}<br />
        年龄：{this.state.title.age}<br />
        邮箱：{this.state.title.email}
      </div>
    )
  }
}
export default Home;
