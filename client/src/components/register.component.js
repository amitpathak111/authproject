/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';



export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangephoneNo = this.onChangephoneNo.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      password : '',
      email: '',    
    }
  }



  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

    onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

    onChangephoneNo(e) {
    this.setState({
      phoneNo: e.target.value
    })
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

      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      password: this.state.password

    }
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) && (/^\d{10}$/.test(this.state.phoneNo) || this.state.phoneNo === ''))
    {
    axios.post('http://localhost:5000/user/register', newuser)
      .then(res => console.log(res.data));
    window.location = '/';
  }

  else{
    axios.post('http://localhost:5000/user/error', newuser)
      .then(res => {
        if(res.data === 'Error in email id' )
      {
        alert('Please check your emailid and phone no.')
      }

      });
      
    // window.location = '/user/login';
    }
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
 <div className = "container">
   <br/>
   <br/>
      <h3>Register</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>firstName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangefirstName}
              />
        </div>
       <div className="form-group"> 
          <label>lastName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
              />
        </div>
       <div className="form-group"> 
          <label>phoneNo: </label>
          <input  type="text"
              className="form-control"
              value={this.state.phoneNo}
              onChange={this.onChangephoneNo}
              />
        </div>
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
          <input  type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="USER REGISTER" className="btn btn-primary" />
        </div>
      </form>
      </div>
    </div>
    )
  }
}