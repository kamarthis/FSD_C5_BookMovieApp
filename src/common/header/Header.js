import React, { Component } from 'react';
import '../../common/header/Header.css'
import logosvg from '../../assets/logo.svg'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const Header = function (props) {
let isLoginVisible = false;
  return (

<div className='header'>
    <img src={logosvg} alt="logo" />
</div>
  )
}

export default Header;