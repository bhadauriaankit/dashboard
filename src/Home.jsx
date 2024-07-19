import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Intensity</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Likelihood</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Relevance</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Year</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Country</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Topic</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>City</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Region</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="relevance" fill="#8884d8" />
            <Bar dataKey="intensity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="relevance" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="intensity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
