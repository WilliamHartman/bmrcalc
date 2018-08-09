import React, { Component } from 'react';
import './Navbar.css';
import Drawer from 'material-ui/Drawer';
import { MdMenu } from 'react-icons/md/index.js';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCurrentPage } from './../../redux/reducer';
import { withRouter } from 'react-router';


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        };
        //this.handleNavigate = this.handleNavigate.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});
     
    handleClose = () => this.setState({open: false});

    handleNavigate = (page) => {
        this.props.updateCurrentPage(page)
    }

    render(){

        return(
            <div className='navbar-main'>
                <div className='navbar-top'>
                    <div className='navbar-top-left'>
                        <Link to='/' className='link' onClick={() => this.handleNavigate('home')}><h1 className='navbar-title'>BMR Calc</h1></Link>
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
                                <Link to='/' className='link' onClick={() => this.handleNavigate('home')}><MenuItem onClick={this.handleClose} className='menu-item'>Home</MenuItem></Link>
                                <Link to='/about' className='link' onClick={() => this.handleNavigate('about')}><MenuItem onClick={this.handleClose} className='menu-item'>About</MenuItem></Link>
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
        currentPage: state.currentPage
    }
  }
  
export default withRouter(connect(mapStateToProps, { updateCurrentPage })(Navbar));