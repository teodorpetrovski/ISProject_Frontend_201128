import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Link} from "react-router-dom";

function ShoppingCart(props) {


    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));


    return (
        <div className="container">


            <div className="row m-4">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Departure City - Arrival City</th>
                        <th scope="col">Number of tickets</th>
                        <th scope="col">Flight Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.cart.tickets?.length === 0 ? (
                        <tr>
                            <td colSpan="5">No active Tickets</td>
                        </tr>
                    ) : (
                        props.cart.tickets?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{`${item.ticket.departureCity} - ${item.ticket.arrivalCity}`}</td>
                                <td>{item.quantity}</td>
                                <td>${item.ticket.ticketPrice}</td>
                                <td>
                                    <a  title={"Delete"} className={"btn btn-danger"}
                                        onClick={() => props.onDelete(loggedInUser.userId,item.ticket.id)}>
                                        Remove from cart
                                    </a>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                    <tfoot className="thead-dark">
                    <tr>
                        <th scope="col">Total Price:</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">${props.cart.totalPrice}</th>
                    </tr>
                    </tfoot>
                </table>
            </div>

            <div className="row  mt-4">
                <div className="col-2 ms-auto">
                    <Link className={"btn btn-primary ms-2"}  to={`/payment`}>Order Now</Link>
                </div>
            </div>

        </div>
    );
}

export default ShoppingCart;