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
import { Button, Form } from 'react-bootstrap';


function formatMoney(n) {
  return "R" + (Math.round(n * 100) / 100).toLocaleString();
}


function Row(props) {
  const { row } = props;
  const [status, setStatus] = React.useState({
    value: '1',
    saved: true,
  })
  const [open, setOpen] = React.useState(false);

  const saveStatus = (e) => {
    e.preventDefault()
    setStatus({ saved: true })
  }

  var renderSave = (params) => {
    return (
      <>
        <Button
          onClick={(e) => saveStatus(e)}
          style={btnStyle(status.saved)}
        >
          {status.saved ? 'Saved' : 'Not Saved'}
        </Button>
      </>
    )
  }

  var renderStatus = (params) => {
    return (
      <>
        <Form.Select
          aria-label='Select province'
          style={selectStyle(status.value)}
          onChange={e => setStatus({ value: e.target.value, saved: false })}
        >
          <option value={'1'}>Confirmed Order</option>
          <option value={'2'}>Processing Order</option>
          <option value={'3'}>Quality Check</option>
          <option value={'4'}>Product Dispatched</option>
          <option value={'5'}>Product Delivered</option>
        </Form.Select>
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
        <TableCell style={txtStyle} component="th" scope="row">{row.OrderID}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.ProductID}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.OrderDate}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.Total_items}</TableCell>
        <TableCell align="left" style={txtStyle}>{row.Vat_total}</TableCell>
        <TableCell align="left" style={txtStyle}>{renderStatus(row)}</TableCell>
        <TableCell align="left" style={txtStyle}>{renderSave(row)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: '20px 300px 50px 65px' }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={titleStyle2}>Item&nbsp;description</TableCell>
                    <TableCell style={titleStyle2}>Supplier</TableCell>
                    <TableCell style={titleStyle2}>Unit&nbsp;price</TableCell>
                    <TableCell align="center" style={titleStyle2}>Quantity</TableCell>
                    <TableCell align="right" style={titleStyle2}>Total&nbsp;price&nbsp;(R)</TableCell>
                    <TableCell style={titleStyle2} align='right'>Payment&nbsp;method</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.items.map((prod) => (
                    <TableRow key={prod.description} >
                      <TableCell style={modRowStyle} component="th" scope="row">{prod.description}</TableCell>
                      <TableCell style={itemStyle} align="left">{prod.supplier}</TableCell>
                      <TableCell style={itemStyle} align="left">{prod.price}</TableCell>
                      <TableCell style={itemStyle} align="center">{prod.quantity}</TableCell>
                      <TableCell style={itemStyle} align="right">{prod.itemTotal}</TableCell>
                      <TableCell style={itemStyle} align="right">{prod.Payment_method}</TableCell>
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
      OrderID: '#18512121', ProductID: '#56789876', OrderDate: '12/4/2024', Total_items: 159,
      Saving: 6.0, Input_vat: formatMoney(24), Vat_total: formatMoney(5444),
      items: [{
        supplier: 'Tokris',
        description: 'Simba chips',
        price: formatMoney(32),
        quantity: 8,
        itemTotal: formatMoney(256),
        Payment_method: 'eft'
      },]
    },
    {
      OrderID: '#1062147', ProductID: '#78956505', OrderDate: '14/1/2024', Total_items: 19,
      Saving: 64.67, Input_vat: formatMoney(224.32), Vat_total: formatMoney(444),
      items: [{
        supplier: 'Abram Nut',
        description: 'Brown Bread',
        price: formatMoney(30),
        quantity: 4,
        itemTotal: formatMoney(120),
        Payment_method: 'credit'
      },]
    },
    {
      OrderID: '#88485413', ProductID: '#88756578', OrderDate: '14/3/2024', Total_items: 19,
      Saving: 67.47, Input_vat: formatMoney(224.32), Vat_total: formatMoney(444),
      items: [{
        supplier: 'Fankholor Legit',
        description: 'Soda',
        price: 28,
        quantity: 10,
        itemTotal: formatMoney(280),
        Payment_method: 'eft'
      },]
    },
    {
      OrderID: '#00485413', ProductID: '#68849912', OrderDate: '14/12/2023', Total_items: 19,
      Saving: 64.67, Input_vat: formatMoney(224.32), Vat_total: formatMoney(444),
      items: [{
        supplier: 'Fankholor Nut',
        description: 'Fries',
        price: 60,
        quantity: 3,
        itemTotal: formatMoney(180),
        Payment_method: 'cart'
      },]
    },

    {
      OrderID: '#12548873', ProductID: '#165849912', OrderDate: '14/12/2023', Total_items: 19,
      Saving: 64.67, Input_vat: formatMoney(224.32), Vat_total: formatMoney(444),
      items: [{
        supplier: 'Bravos',
        description: 'Russian',
        price: 18,
        quantity: 15,
        itemTotal: formatMoney(270),
        Payment_method: 'Credit'
      },]
    },
  ]

export default function OrdersTable() {
  return (
    <TableContainer component={Paper} style={wrapStyle}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={titleStyle}>Order&nbsp;No.</TableCell>
            <TableCell style={titleStyle} align="left">ProductID</TableCell>
            <TableCell style={titleStyle} align="left">Date</TableCell>
            <TableCell style={titleStyle} align="left">Items</TableCell>
            <TableCell style={titleStyle} align="left">Total&nbsp;(R)</TableCell>
            <TableCell style={titleStyle} align="left">Update&nbsp;status</TableCell>
            <TableCell style={titleStyle} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.OrderID} row={row} />
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

const selectStyle = (status) => {
  var bg = "#555"
  if (status === '1') {
    bg = "rgba(0,0,0,1)"
  }
  else if (status === '2') {
    bg = "rgba(150,94,0,1)"
  }
  else if (status === '3') {
    bg = "rgba(235,235,0,.8)"
  }
  else if (status === '4') {
    bg = "rgba(97,0,161,.8)"
  }
  else if (status === '5') {
    bg = "green"
  }

  return ({
    border: `1px solid ${bg}`,
    color: bg,
    borderRadius: 5,
    outline: 'none',
    padding: '0 0 0 5px',
    height: 30,
    width: 170,
    fontSize: 14,
  })
}

const btnStyle = (saved) => {
  var bg = "#555"
  if (saved) bg = "rgb(30, 200, 0, .9)"
  else bg = "rgba(230, 3, 9, .8)"

  return ({
    background: bg,
    border: `1px solid ${bg}`,
    padding: '0px 10px',
    width: 100,
    height: 30,
    color: "#fff",
  })
}