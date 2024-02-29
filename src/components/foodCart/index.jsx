import React, { useEffect, useState } from 'react';
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { MdDelete } from 'react-icons/md';


const ShoppingCart = ({selections,removeItems}) => {
  const [items, setItems] = useState(selections);

  useEffect(() => {
    setItems(selections)
  }, [selections])


  const handleQuantityChange = (id, quantity) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    }));
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-2 ">
      <h1 className="text-2xl font-bold mb-4">Food Cart</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">${item.cost}</TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    InputProps={{ inputProps: { min: 1 } }}
                  />
                </TableCell>
                <TableCell align="right">${item.cost * item.quantity}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={() => removeItems(item)}>
                    <MdDelete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" className="mt-4">Checkout</Button>
    </div>
  );
};

export default ShoppingCart;
