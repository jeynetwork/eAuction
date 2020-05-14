import React from 'react';
import { Table } from 'reactstrap';
import "../public/css/auctions.css";

function AuctionsTable(props) {
  return (
    <div className="rightSideDiv">
        <div className="filterDiv" >
          <h5>Filter by category</h5>
          <form>
            <select>
              <option>categoryOne</option>
            </select>
            <i className="ion-funnel" ></i>
          </form>
        </div>
        <Table cellspacing="0">
            <thead>
                <tr>
                <th></th>
                <th>Date</th>
                <th>Seller</th>
                <th>Auction period</th>
                <th>Auction Item</th>
                <th>Auction Image</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>01/01/2020</td>
                  <td>Jerry mwira</td>
                  <td>10 days</td>
                  <td>Bycicle</td>
                  <td>
                    <img src="" alt="itemImage"/>
                  </td>
                  <td>
                    <button>
                      <i className="ion-eye" ></i>
                      View auction
                    </button>
                  </td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default AuctionsTable;