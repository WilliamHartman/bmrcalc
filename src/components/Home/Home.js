import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';
import Form from '../Form/Form.js'

class Home extends Component {
    constructor(){
      super();
  
    }
  
    render() {
      return (
        <div className="home">
          HOME
          <Form />
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
        
    }
  }
  
export default withRouter(connect(mapStateToProps, { })(Home));