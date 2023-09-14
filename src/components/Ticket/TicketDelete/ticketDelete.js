import React from 'react';
import {useNavigate} from "react-router-dom";


const TicketDelete= (props) => {


    const navigate=useNavigate();

    const onFormSubmit = (e) =>
    {

        props.onTicketDelete(props.ticket.id);
        navigate("/tickets");
    }

    return(
        <div>
            <h1>Delete</h1>

            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Product</h4>
                <hr />
                <dl className="row">
                    <dt className="col-sm-2">Departure City</dt>
                    <dd className="col-sm-10">{props.ticket.departureCity}</dd>
                    <dt className="col-sm-2">Arrival City</dt>
                    <dd className="col-sm-10">{props.ticket.arrivalCity}</dd>
                    <dt className="col-sm-2">Flight Description</dt>
                    <dd className="col-sm-10">{props.ticket.flightDescription}</dd>
                    <dt className="col-sm-2">Ticket Price</dt>
                    <dd className="col-sm-10">{props.ticket.ticketPrice}</dd>
                    <dt className="col-sm-2">Flight Duration</dt>
                    <dd className="col-sm-10">{props.ticket.flightDuration}</dd>
                    <dt className="col-sm-2">Departure Date and Time</dt>
                    <dd className="col-sm-10">{props.ticket.departureDateTime}</dd>
                </dl>

                <form onSubmit={onFormSubmit}>
                    <input type="submit" value="Delete" className="btn btn-danger" />{' '}
                    |
                    <a
                        href={`/tickets`}
                        className="btn btn-info"
                    >
                        Back To List
                    </a>
                </form>
            </div>
        </div>


    )
}

export default TicketDelete;



