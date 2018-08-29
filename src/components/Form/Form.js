import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { updateUserData, updateCurrentPage } from './../../redux/reducer';
import { withRouter } from 'react-router';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { MdHelp } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


//https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4428382/

class Form extends Component {
    constructor(){
      super();
      
      this.state = {
        open: false,
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
        let newHeight = this.state.feet * 12;
        if(this.state.inches !== ''){
          newHeight = ((this.state.feet * 12) + parseInt(this.state.inches, 10))
        }
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
      this.props.updateUserData({
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

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    handleNavigate = (page) => {
      this.props.updateCurrentPage(page)
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
              <div className="form-field-title">Body Fat % (optional) 
                <div className="form-field-mdhelp" onClick={this.handleClickOpen}><MdHelp /></div>
              </div>
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
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Body Fat Percentage can be measured in many different ways. The most accurate being DXA scan followed by, 
                  hyrdrostatic testing, and air displacement (like BodPod). Less accurate are bioelectrical impedance 
                  (such as scales that can measure body fat) and skin caliper measurements. 
                </DialogContentText>
                <DialogContentText>
                  If you don't have access to any of the above, a new formula called Relative Fat Mass (RFM) can estimate 
                  your body fat percentage relatively accurately. To calculate your RFM, click below.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Link to='/RFM' className='link' onClick={() => this.handleNavigate('RFM')}>
                  <Button onClick={this.handleClose} color="primary">
                    Calculate RFM
                  </Button>
                </Link>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {
        user: state.user
    }
  }
  
export default withRouter(connect(mapStateToProps, { updateUserData, updateCurrentPage })(Form));