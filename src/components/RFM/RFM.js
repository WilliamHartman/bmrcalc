import React, { Component } from 'react';
import './RFM.css';
import { connect } from 'react-redux';
import { updateUserData, updateCurrentPage } from './../../redux/reducer';
import { withRouter } from 'react-router';

class RFM extends Component{
    constructor(){
        super();
        
        this.state = {

        }
      }
    
    render() {
        return (
            <div className="RFM">
                RFM
            </div>
        );
    }
    
}

function mapStateToProps(state){
    return {
        user: state.user
    }
  }
  
export default withRouter(connect(mapStateToProps, { updateUserData, updateCurrentPage })(RFM));