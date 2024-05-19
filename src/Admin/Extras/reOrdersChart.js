import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

export default function ChartThree() {
  const data = [
    {
      name: 'Sep',
      'orders': 4000,
      're-orders': 2400
    },
    {
      name: 'Oct',
      'orders': 3000,
      're-orders': 1398
    },
    {
      name: 'Nov',
      'orders': 2000,
      're-orders': 9800
    },
    {
      name: 'Dec',
      'orders': 2780,
      're-orders': 3908
    },
    {
      name: 'Jan',
      'orders': 1590,
      're-orders': 4800
    },
    {
      name: 'Feb',
      'orders': 2390,
      're-orders': 3800
    },
    {
      name: 'Mar',
      'orders': 1120,
      're-orders': 4300
    },
    {
      name: 'Apr',
      'orders': 4532,
      're-orders': 8715
    },
    {
      name: 'May',
      'orders': 1784,
      're-orders': 3321
    }
  ]

  return (
    <div style={chartStyle}>
      <h3 style={titleStyle}>Orders vs Re-Order</h3>
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
          dataKey='orders'
          stroke='rgba(230, 3, 39, .5)'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
        <Area
          type='monotone'
          dataKey='re-orders'
          stroke='#82ca9d'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </div>
  )
}

const chartStyle = {
  marginTop: '20px',
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
