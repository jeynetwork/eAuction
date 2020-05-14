import React from 'react';
import { Table } from 'reactstrap';

function AuctionsList() {
    return (
        <div>
            <div className="filterDiv" >
                <h5>Filter by Date</h5>
                <form>
                    <select>
                    <option>Latest</option>
                    </select>
                    <i className="ion-funnel" ></i>
                </form>
            </div>
            <div className="auctionList" >
                <div className="singleAuction" >
                <Table cellspacing="0">
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Auction period</th>
                                <th>Item Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>Jerry</td>
                                <td>10 days</td>
                                <td>
                                    <img src="" alt="itemImage"/>
                                </td>
                                <td>
                                    <button>
                                    <i className="ion-android-cart" ></i>
                                    Bid
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>mwira</td>
                                <td>1 day</td>
                                <td>
                                    <img src="" alt="itemImage"/>
                                </td>
                                <td>
                                    <button>
                                    <i className="ion-android-cart" ></i>
                                    Bid
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AuctionsList
