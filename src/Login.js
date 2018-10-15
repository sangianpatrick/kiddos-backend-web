import React, { Component } from "react";
import axios from "axios"

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateUser(){
    axios.post('localhost:3000/auth',{
      username: this.state.username,
      password: this.state.password
    },{
      headers: {
        "Accept": "application/json"
      }
    }).then(result => {
      alert(result)
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"> Sign In </h3>{" "}
              </div>{" "}
              <div className="panel-body">
                <form role="form">
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="E-mail"
                        id="username"
                        name="username"
                        type="email"
                        value={this.state.username}
                        onChange={this.handleChange}
                        
                      />
                    </div>{" "}
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}                        
                        onChange={this.handleChange}

                      />
                    </div>{" "}
                    <div className="checkbox">
                      <label>
                        <input
                          name="remember"
                          type="checkbox"
                          value="Remember Me"
                        />
                        Remember Me{" "}
                      </label>{" "}
                    </div>{" "}
                    <button
                      className="btn btn-lg btn-success btn-block"
                      onClick={()=>this.validateUser()}
                    >
                      Login{" "}
                    </button>{" "}
                  </fieldset>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Login;
