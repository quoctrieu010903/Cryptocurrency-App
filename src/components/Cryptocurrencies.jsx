import React,  { useState , useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card , Row , Col, Input } from 'antd';

import { useGetCrytosQuery } from '../services/cryptoApi';
import { currentcy } from '@reduxjs/toolkit';



const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data : crytosList, isFetching } = useGetCrytosQuery(count);
  const [cryptos , setCryto] = useState(crytosList?.data?.coins);
  const [searchTerm , setSearchTerm] = useState('');
 
  // amout of data to show 
  useEffect(() => {
        
        setCryto(crytosList?.data?.coins);

        const fillterData = crytosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
        setCryto(fillterData);
  
   }, [crytosList, searchTerm]);

  console.log("cryptos : ", cryptos);
  
  if (isFetching) return 'Loading...';

  return (
    <>
  
      {!simplified  &&  (
          <div className='search-crypto'>
            <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />

          </div>
      )}

      
        <Row gutter={[32, 32]} className="crypto-card-container">
          { cryptos?.map((currentcy) => (
              <Col sx={24} xs={24} sm={12} lg={6} className="crypto-card" key={currentcy.uuid}>
                  <Link to ={`/crypto/${currentcy.uuid}`}>
                      <Card
                          title={`${currentcy.rank}. ${currentcy.name}`}
                          extra={<img className="crypto-image" src={currentcy.iconUrl} />}
                          hoverable
                      >
                          <p>Price: {millify(currentcy.price)}</p>
                          <p>Market Cap: {millify(currentcy.marketCap)}</p>
                          <p>Daily Change: {currentcy.change}</p>
                      </Card>
                  </Link>
                </Col>  
          ))}
          </Row>
    </>
  )
}

export default Cryptocurrencies