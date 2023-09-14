import React from 'react';
import {Link} from "react-router-dom";

function OrderList(props) {



    return (
        <div className="container">
            <div className="row m-4">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.orders?.length === 0 ? (
                        <tr>
                            <td colSpan="5">No Orders Yet</td>
                        </tr>
                    ) : (
                        props.orders?.map((order, index) => (
                            <tr key={order.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {order.ticketInOrders.map((ticketInOrder, j) => (
                                        <p key={j}>
                                            {ticketInOrder.ticket.departureCity} -{' '}
                                            {ticketInOrder.ticket.arrivalCity} x{' '}
                                            {ticketInOrder.quantity}
                                        </p>
                                    ))}
                                </td>
                                <td>
                                    <Link className={"btn btn-primary ms-2"} onClick={() => props.exportOrder(order.id)} to={`/orders`}>Export Order</Link>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderList;