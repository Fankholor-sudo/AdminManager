import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from 'react-bootstrap';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const changeView = React.useCallback((value, data) => {
    props.setEdit(value)
  }, [props.setEdit])

  var renderEdit = (row) => {
    return (
      <>
        <Button
          onClick={() => changeView(true, row)}
          style={btnStyle}
        >
          Edit
        </Button>
      </>
    )
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} >
        <TableCell style={{ padding: '25px 5px' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={txtStyle} component="th" scope="row">{row.productID}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.date}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.name}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.subProd}</TableCell>
        <TableCell align="left" style={txtStyle}>{renderEdit(row)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: '20px 300px 50px 65px' }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={titleStyle2}>Description</TableCell>
                    <TableCell style={titleStyle2}>Price</TableCell>
                    <TableCell align="center" style={titleStyle2}>Volume</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.subProducts.map((prod) => (
                    <TableRow key={prod.description} >
                      <TableCell style={modRowStyle} component="th" scope="row">{prod.description}</TableCell>
                      <TableCell style={itemStyle} align="left">{(prod.price).toFixed(2)}</TableCell>
                      <TableCell style={itemStyle} align="center">{prod.volume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

var rows =
  [
    {
      productID: '#5548546', date: '11/11/2023', name: 'Soda', subProd: 40,
      subProducts: [{
        description: 'Fanta',
        price: 18,
        volume: '1.5L',
      },
      {
        description: 'Aqualle',
        price: 12,
        volume: '750ml',
      },
      {
        description: 'Red Bull',
        price: 29,
        volume: '750ml',
      },
      {
        description: 'CocaCola',
        price: 25,
        volume: '2L',
      },
      ]
    },

    {
      productID: '#1062147', date: '14/3/2024', name: 'Snack', subProd: 35,
      subProducts: [{
        description: 'Simba Chips',
        price: 27,
        volume: '50g',
      },
      {
        description: 'Peanuts & Raisins',
        price: 130,
        volume: '450g',
      },
      {
        description: 'Snickers Chocolate',
        price: 18,
        volume: '30g',
      },
      ]
    },

    {
      productID: '#874512', date: '16/05/2024', name: 'Coffee & Tea', subProd: 43,
      subProducts: [{
        description: 'Chai',
        price: 38,
        volume: '250ml',
      },
      {
        description: 'Rooibos Tea',
        price: 25,
        volume: '500ml',
      },
      {
        description: 'Chamomile',
        price: 56,
        volume: '250ml',
      },
      {
        description: 'Honey Raf',
        price: 51,
        volume: '500ml',
      },
      ]
    },

    {
      productID: '#9798454', date: '28/02/2024', name: 'Biscuits', subProd: 27,
      subProducts: [{
        description: 'Topper',
        price: 13,
        volume: '150g',
      },
      {
        description: 'Romany Creams',
        price: 37,
        volume: '200g',
      },
      ]
    },

    {
      productID: '#874512', date: '01/08/2023', name: 'Sweet Sugar', subProd: 32,
      subProducts: [{
        description: 'Maynards',
        price: 37,
        volume: '75g',
      },
      {
        description: 'Beacon Allsorts',
        price: 147,
        volume: '400g',
      },
      {
        description: 'Fizz Pop',
        price: 99,
        volume: "10's",
      },
      ]
    },
  ]

export default function ProductTable({ setEdit }) {

  return (
    <TableContainer component={Paper} style={wrapStyle}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={titleStyle}>Product&nbsp;ID</TableCell>
            <TableCell style={titleStyle} align="left">Date&nbsp;created</TableCell>
            <TableCell style={titleStyle} align="left">Name</TableCell>
            <TableCell style={titleStyle} align="left">Sub-Products&nbsp;No.</TableCell>
            <TableCell style={titleStyle} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.productID} row={row} setEdit={setEdit} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const titleStyle = {
  fontWeight: 500,
  color: '#444',
}

const titleStyle2 = {
  fontWeight: 500,
  color: '#999',
}

const wrapStyle = {
  padding: '10px 10px 50px 5px',
  fontFamily: 'Poppins',
}

const itemStyle = {
  color: '#999',
}

const modRowStyle = {
  padding: '15px 0 15px 15px',
  color: '#999',
}

const txtStyle = {
  color: '#555',
  fontWeight: 400,
}

const btnStyle = {
  background: 'orangered',
  border: `1px solid orangered`,
  borderRadius: 5,
  padding: '0px 10px',
  width: 100,
  height: 30,
  color: "#fff",
}