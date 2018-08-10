import React, { Component } from 'react';
import './Results.css';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';

class Results extends Component {
    constructor(){
      super();
  
    }

    hbCalc = () => {
      if(this.props.user.gender === 'male'){
        return ((13.7516*this.props.user.weight)+(5.0033*this.props.user.height)-(6.755*this.props.user.age)+66.473)
      } else {
        return ((9.564*this.props.user.weight)+(1.8496*this.props.user.height)-(4.6756*this.props.user.age)+655.0955)
      }
    }
  
    rhbCalc = () => {
      if(this.props.user.gender === 'male'){
        return ((13.397*this.props.user.weight)+(4.799*this.props.user.height)-(5.677*this.props.user.age)+88.362)
      } else {
        return ((9.247*this.props.user.weight)+(3.098*this.props.user.height)-(4.330*this.props.user.age)+447.593)
      }
    }

    msjCalc = () => {
      let gender = this.props.user.gender === 'male' ? 5 : -161;
      return ((10*this.props.user.weight)+(6.25*this.props.user.height)-(5*this.props.user.age)+gender)      
    }

    kmCalc = () => {
      return 370 + (21.6 * (this.props.user.weight*((100-this.props.user.bodyFat)/100)))
    }

    averageCalc = (hb, rhb, msj, km) => {
      let avg = (parseInt(hb, 10) + parseInt(rhb, 10) + parseInt(msj, 10)) / 3;
      if(this.props.user.bodyFat > 0 && this.props.user.bodyFat !== ''){
        avg = (parseInt(hb, 10) + parseInt(rhb, 10) + parseInt(msj, 10) + parseInt(km, 10)) / 4;
      }
      return avg;
    }
  
    render() {
      let hb = this.hbCalc().toFixed(2);
      let rhb = this.rhbCalc().toFixed(2);
      let msj = this.msjCalc().toFixed(2);
      let km = this.kmCalc().toFixed(2);
      let average = this.averageCalc(hb, rhb, msj, km).toFixed(2);
      return (
        <div className="results">
            <div className='results-field'>
                <div className='results-field-title'>Average</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: {average}</div>
                    <div className='results-field-bottom-sub'>TDEE: {(average*this.props.user.activityLevel).toFixed(2)}</div>
                </div>
            </div>
            <div className='results-field'>
                <div className='results-field-title'>Harris-Benedict</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: {hb}</div>
                    <div className='results-field-bottom-sub'>TDEE: {(hb*this.props.user.activityLevel).toFixed(2)}</div>
                </div>
            </div>
            <div className='results-field'>
                <div className='results-field-title'>Revised Harris-Benedict</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: {rhb}</div>
                    <div className='results-field-bottom-sub'>TDEE: {(rhb*this.props.user.activityLevel).toFixed(2)}</div>
                </div>
            </div>
            <div className='results-field'>
                <div className='results-field-title'>Mifflin St. Jeor</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: {msj}</div>
                    <div className='results-field-bottom-sub'>TDEE: {(msj*this.props.user.activityLevel).toFixed(2)}</div>
                </div>
            </div>
            <div className='results-field'>
                <div className='results-field-title'>Katch-McArdle</div>
                <div className='results-field-bottom'>
                    <div className='results-field-bottom-sub'>BMR: {km}</div>
                    <div className='results-field-bottom-sub'>TDEE: {(km*this.props.user.activityLevel).toFixed(2)}</div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    let newUser = state.user;
    if(state.user.units === 'imperial'){
      newUser.height *= 2.54;
      newUser.weight *= 0.453592;
    }
    return {
        user: newUser
    }
  }
  
export default withRouter(connect(mapStateToProps, { })(Results));