import React from 'react';
import './Loading.css';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

class Loading extends React.Component {
    state = {
      user_name: "",
    }

    retrieveCookies() {
      const cookies = new Cookies();
      const cookie_name = cookies.get('name');
      console.log(cookie_name);
      if (cookie_name) {
        this.setState({user_name: cookie_name});
      }
      else {
        cookies.set('name', 'test');
        console.log('cookies set');
      }
    }

    render() {
      return (
        <div className="Loading-container">
          <h1 className="Loading-header">
            Welcome to Bullseye!
          </h1>
          <Link className="Loading-start-link" to="/start">Click to get started</Link>
        </div>
      );
    }
  } 

export default Loading;