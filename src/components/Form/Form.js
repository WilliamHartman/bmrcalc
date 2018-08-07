import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';

class Form extends Component {
    constructor(){
      super();
  
    }
  
    render() {
      return (
        <div className="Form">
            <div className="form-gender form-field">
                <div></div>
            </div>
            <div className="form-height form-field">
            
            </div>
            <div className="form-weight form-field">
            
            </div>
            <div className="form-age form-field">
            
            </div>
            <div className="form-activity form-field">
            
            </div>
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
        
    }
  }
  
export default withRouter(connect(mapStateToProps, { })(Form));