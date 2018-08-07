import React, { Component } from 'react';
import './Navbar.css';
import Drawer from 'material-ui/Drawer';
import { MdMenu } from 'react-icons/md/index.js';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from './../../redux/reducer';
import { withRouter } from 'react-router';


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            searchTerm: 'Search jobs'
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});
     
    handleClose = () => this.setState({open: false});

    handleSearchClick = () => {
        this.props.removeSalaries();
        this.props.updateSalaries(this.state.searchTerm);
    }

    updateSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})      
    }

    checkEnter = (e) => {
        if(e.keyCode === 13){
            this.handleSearchClick();
            this.props.history.push('/results');
        }
    }

    searchBoxClick = () => {
        this.setState({searchTerm: ''});
    }

    render(){

        return(
            <div className='navbar-main'>
                <div className='navbar-top'>
                    <div className='navbar-top-left'>
                        <Link to='/' className='link'><h1 className='navbar-title'>BMR Calc</h1></Link>
                    </div>
                    <div className='navbar-top-right'>
                        <div className='mobile-menu'>
                            <MdMenu
                                size={45}
                                color='#ffffffe7'                         
                                onClick={this.handleToggle}
                            />
                            <Drawer
                                docked={false}
                                width={200}
                                open={this.state.open}
                                openSecondary={true}
                                onRequestChange={(open) => this.setState({open})}
                                containerClassName='drawer'
                                >
                                <Link to='/' className='link'><MenuItem onClick={this.handleClose} className='menu-item'>Home</MenuItem></Link>
                                <Link to='/about' className='link'><MenuItem onClick={this.handleClose} className='menu-item'>About</MenuItem></Link>
                            </Drawer>
                        </div>
                        <div className="desktop-menu">
                            <Link to='/' className='link'><div className='navbar-menu-home'>Home</div></Link>
                            <Link to='/about' className='link'><div className='navbar-menu-about'>About</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        
    }
  }
  
export default withRouter(connect(mapStateToProps, {  })(Navbar));