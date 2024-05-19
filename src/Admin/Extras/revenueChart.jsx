import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

export default function ChartOne(params) {
  const data = [
    {
      name: 'Sep',
      'cash sale': 4000,
      'credit sale': 2400
    },
    {
      name: 'Oct',
      'cash sale': 3000,
      'credit sale': 1398
    },
    {
      name: 'Nov',
      'cash sale': 2000,
      'credit sale': 9800
    },
    {
      name: 'Dec',
      'cash sale': 2780,
      'credit sale': 3908
    },
    {
      name: 'Jan',
      'cash sale': 15290,
      'credit sale': 4800
    },
    {
      name: 'Feb',
      'cash sale': 2390,
      'credit sale': 3800
    },
    {
      name: 'Mar',
      'cash sale': 11290,
      'credit sale': 4300
    },
    {
      name: 'Apr',
      'cash sale': 4532,
      'credit sale': 8715
    },
    {
      name: 'May',
      'cash sale': 17854,
      'credit sale': 3321
    }
  ]

  return (
    <div style={chartStyle}>
      <h3 style={titleStyle}>Sale Analytics</h3>
        <AreaChart
          data={data}
          width={700} height={250}
          margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='cash sale'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='credit sale'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
    </div>
  )
}

const chartStyle = {
  margin: '20px 0 0 20px',
  padding: '20px',
  color: '#000',
  background: '#f8f8f8',
  fontFamily: 'serif',
  borderRadius: '10px',
  boxShadow: '1px 2px 4px 2px rgba(230, 3, 39, 1)'
}

const titleStyle = {
  fontWeight: 'bold',
  fontFamily: 'Poppins',
  paddingBottom: '40px',
  textAlign: 'center'
}
