import React from 'react';
import {  Route, Routes, Link} from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import {
  Navbar,
  Exchanges,
  Cryptocurrencies, 
  CryptoDetails,
  News,
  Homepage
 
} from './components'; // Make sure your `index.js` also uses correct spelling

import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
              <Layout>
                    <div className="routes">
                      {/* Use the Routes component to define your routes */}
                      <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/exchanges" element={<Exchanges />} />
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route path="/news" element={<News />} />
                      </Routes>
                    </div>
              </Layout>
     

            <div className="footer">
              <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                CryptoWorld <br />
                All rights reserved
              </Typography.Title> 
              <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    <Link to="/news">News</Link>

              </Space>
              </div>
      </div>
      
    </div>
  );
};


export default App