import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';



export default class Loggin extends Component {
  constructor(props) {
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      password : '',
      email : ''     
    }
  }





    onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

    onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }
    


  onSubmit(e) {
    e.preventDefault();

    const newuser = {

      email: this.state.email,
      password: this.state.password

    }

    console.log(newuser);

    axios.post('http://localhost:5000/user/login', newuser)
      .then(res => {
        console.log(res.data)
        window.location = '/user/logged';
      }
        );

    // 
  }

  render() {
    return (
      <div className = "container">

      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/user/welcome" className="nav-link">Welcome</Link>
    
    <div className="collpase navbar-collapse">
      
      <ul className="navbar-nav mr-auto">
     
          <li className="navbar-item">
          <Link to="/user/register" className="nav-link">Register</Link>
          </li>
      
          <li className="navbar-item">
          <Link to="/" className="nav-link">Login</Link>
          </li>

         
      </ul>
     
      </div>
    
    </nav>
    <br/>
   <br/>
      <h3>Login</h3>
      <form onSubmit={this.onSubmit}>
 
       <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
       <div className="form-group"> 
          <label>password: </label>
          <input type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}