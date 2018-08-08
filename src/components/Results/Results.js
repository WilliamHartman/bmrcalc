import React, { Component } from 'react';
import './Results.css';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';

class Results extends Component {
    constructor(){
      super();
  
    }
  
    render() {
      return (
        <div className="results">
            <div className='results-field'>
                <div className='results-field-title'>Title</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: </div>
                    <div className='results-field-bottom-sub'>TDEE: </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
        
    }
  }
  
export default withRouter(connect(mapStateToProps, { })(Results));