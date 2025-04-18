import React from 'react'
import {  Menu , Typography, Avatar  } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

import icon from '../Images/Cryto.png';
const Navbar = () => {
  return (
   <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">CryptoWorld</Link>
            </Typography.Title>
        </div>
      
        <Menu theme="dark" >
            <Menu.Item icon = {<HomeOutlined/>} >
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon = {<FundOutlined/>} >
                <Link to="/cryptocurrencies">Crytocurrentcies</Link>
            </Menu.Item>
        
            <Menu.Item icon = {<MoneyCollectOutlined/>} >
                <Link to="/exchanges">Exchange</Link>
            </Menu.Item>  
            <Menu.Item icon = {<BulbOutlined/>} >
                <Link to="/news">New</Link>
            </Menu.Item>
        </Menu>

    </div>
  )
}

export default Navbar