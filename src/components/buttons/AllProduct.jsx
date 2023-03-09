import React from 'react';
import Table from 'react-bootstrap/Table';

export default function AllProduct() {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>URL</td>
            <td>Iphone 13 pro</td>
            <th>3.500.000</th>
            <th>Apple</th>
            <th>Phone</th>
            <th>10%</th>
            <th>Edit/Delete</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
