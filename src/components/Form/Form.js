import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

class Form extends Component {
    constructor(){
      super();
      
      this.state = {
        units: 'imperial',
        gender: 'female',
        weight: null,
        height: null,
        feet: null,
        inches: null,
        age: null
      }
    }

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };
    
    handleUnitChange = event => {
      this.setState({ units: event.target.value });
    };

    handleGenderChange = event => {
      this.setState({ gender: event.target.value });
    };

    heightInput() {
      if(this.state.units === 'imperial'){
        console.log('in imperial')
        return (
          <div className="form-field-bottom">
            <div className="form-height-input">
              <Input
                fullWidth={true}
                id="adornment-height-feet"
                value={this.state.feet}
                onChange={this.handleChange('feet')}
                endAdornment={<InputAdornment position="end">Feet</InputAdornment>}
                inputProps={{
                  'aria-label': 'Feet',
                }}
              />
            </div>
            <div className="form-height-input">
              <Input
                fullWidth={true}
                id="adornment-height-inches"
                value={this.state.inches}
                onChange={this.handleChange('inches')}
                endAdornment={<InputAdornment position="end">Inches</InputAdornment>}
                inputProps={{
                  'aria-label': 'Inches',
                }}
              />
            </div>
          </div>
        )
      }
    }
  
    render() {
      let jsxHight = this.heightInput();

      return (
        <div className="Form">
            <div className="form-units form-field">
              <div className="form-field-title">Units</div>
              <div className="form-field-bottom">
                <FormControl component="fieldset" className="form-formcontrol">
                  <RadioGroup 
                    aria-label="Units"
                    name="units"
                    className="form-units-radio-group"
                    value={this.state.units}
                    onChange={this.handleUnitChange}
                    row={true}
                  >
                    <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
                    <FormControlLabel disabled value="metric" control={<Radio />} label="Metric" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="form-gender form-field">
              <div className="form-field-title">Gender</div>
              <div className="form-field-bottom">
                <FormControl component="fieldset" className="form-formcontrol">
                  <RadioGroup 
                    aria-label="Gender"
                    name="gender"
                    className="form-gender-radio-group"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                    row={true}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="form-height form-field">
              <div className="form-field-title">Height</div>
                {jsxHight}
            </div>
            <div className="form-weight form-field">
              <div className="form-field-title">Weight</div>
              <div className="form-field-bottom">
                <Input
                  id="adornment-weight"
                  value={this.state.weight}
                  onChange={this.handleChange('weight')}
                  endAdornment={<InputAdornment position="end">Weight</InputAdornment>}
                  inputProps={{
                    'aria-label': 'Weight',
                  }}
                />
              </div>
            </div>
            <div className="form-age form-field">
              <div className="form-field-title">Age</div>
                <div className="form-field-bottom">
                  <Input
                    id="adornment-age"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    endAdornment={<InputAdornment position="end">Age</InputAdornment>}
                    inputProps={{
                      'aria-label': 'Age',
                    }}
                  />
                </div>
              </div>
            <div className="form-activity form-field">
              <div className="form-field-title">Activity Level</div>
              <div className="form-field-bottom">
              
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
  
export default withRouter(connect(mapStateToProps, { })(Form));