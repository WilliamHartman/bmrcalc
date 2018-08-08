import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { updateUserData } from './../../redux/reducer';
import { withRouter } from 'react-router';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4428382/

class Form extends Component {
    constructor(){
      super();
      
      this.state = {
        units: 'imperial',
        gender: 'female',
        weight: '',
        height: '',
        feet: '',
        inches: '',
        age: '',
        bodyFat: '',
        activityLevel: 0
      }
    }

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value }, () => {
        let newHeight = ((this.state.feet * 12) + parseInt(this.state.inches))
        this.setState({ height: newHeight}, () => this.updateUserDataCaller());
      })
    };
    
    handleUnitChange = event => {
      this.setState({ units: event.target.value }, () => this.updateUserDataCaller());
    };

    handleGenderChange = event => {
      this.setState({ gender: event.target.value }, () => this.updateUserDataCaller());
    };

    handleActivityChange = event => {
      this.setState({ activityLevel: event.target.value }, () => this.updateUserDataCaller());
    };

    updateUserDataCaller = () => {
      updateUserData({
        units: this.state.units,
        gender: this.state.gender,
        weight: this.state.weight,
        height: this.state.height,
        feet: this.state.feet,
        inches: this.state.inches,
        age: this.state.age,
        bodyFat: this.state.bodyFat,
        activityLevel: this.state.activityLevel
      })
    }

    heightInput() {
      if(this.state.units === 'imperial'){
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
                  endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
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
                    endAdornment={<InputAdornment position="end">Years Old</InputAdornment>}
                    inputProps={{
                      'aria-label': 'Age',
                    }}
                  />
                </div>
              </div>
            <div className="form-bodyfat form-field">
              <div className="form-field-title">Body Fat % (optional)</div>
              <div className="form-field-bottom">
                <Input
                  id="adornment-bodyfat"
                  value={this.state.bodyfat}
                  onChange={this.handleChange('bodyFat')}
                  endAdornment={<InputAdornment position="end">Body Fat %</InputAdornment>}
                  inputProps={{
                    'aria-label': 'Body Fat',
                  }}
                />
              </div>
            </div>
            <div className="form-activity form-field">
              <div className="form-field-title">Activity Level</div>
              <div className="form-field-bottom">
                <FormControl className='form-select'>
                  <Select
                    value={this.state.activityLevel}
                    onChange={this.handleActivityChange}
                    name='age'
                    displayEmpty
                  >
                    <MenuItem value={0} disabled >Activity Level</MenuItem>
                    <MenuItem value={1.2}>Sedentary</MenuItem>
                    <MenuItem value={1.2875}>Low Active</MenuItem>
                    <MenuItem value={1.375}>Somewhat Active</MenuItem>
                    <MenuItem value={1.55}>Active</MenuItem>
                    <MenuItem value={1.7}>Highly Active</MenuItem>
                    <MenuItem value={1.9}>Extremely Active</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    console.log(state.user)
    return {
        user: state.user
    }
  }
  
export default withRouter(connect(mapStateToProps, { updateUserData })(Form));