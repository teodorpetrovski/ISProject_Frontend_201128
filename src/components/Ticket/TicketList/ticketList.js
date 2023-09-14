import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function ticketList(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filter, setFilter] = useState({
        date: '',
        departure: '',
        arrival: '',
    });


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate();
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };



    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        const date=filter.date;
        const departure=filter.departure;
        const arrival=filter.arrival;

        props.onSearch(date,departure,arrival);
        navigate("/tickets");
    }




    return (
        <div>



        <div className="container">



            <div className="row pt-2">
                <div className="col-9 border-end ">
                    <form onSubmit={onFormSubmit}>
                        <h5>Filter flights:</h5>
                        <div className="form-group">
                            <label htmlFor="date" className="control-label"></label>
                            <input
                                type="datetime-local"
                                name="date"
                                id="date"
                                className="form-control"
                                placeholder="Enter Date of departure"
                                value={filter.date}
                                onChange={handleFilterChange}
                            />
                            <span id="date" className="text-danger"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="departure" className="control-label"></label>
                            <input
                                type="text"
                                name="departure"
                                id="departure"
                                className="form-control"
                                placeholder="Enter Departure City"
                                value={filter.departure}
                                onChange={handleFilterChange}
                            />
                            <span id="departure" className="text-danger"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="arrival" className="control-label"></label>
                            <input
                                type="text"
                                name="arrival"
                                id="arrival"
                                className="form-control"
                                placeholder="Enter Arrival City"
                                value={filter.arrival}
                                onChange={handleFilterChange}
                            />
                            <span id="arrival" className="text-danger"></span>
                        </div>
                        <div className="form-group pt-2 ">
                            <input type="submit" value="Filter" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <div className="col-3 pt-5 pe-2">


                    <Link className={"btn btn-block btn-dark "} to={"/tickets/add"}>Add New Flight</Link>
                </div>
            </div>



            <div className="row">
                {props.tickets.map((item, i) => (
                    <div key={item.id} className="col-md-3 m-1 mt-5">
                        <div className="card rounded-0" style={{ width: '18rem', height: '31rem' }}>
                            <img
                                className="card-img-top rounded-0"
                                src={item.destinationImage}
                                style={{ height: '180px' }}
                                alt="Image for product!"
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {item.departureCity} - {item.arrivalCity}
                                </h3>
                                <p className="card-text">{item.flightDescription}</p>
                                <h6>Price: ${item.ticketPrice}</h6>
                                <h6>Date and Time: {Date(item.departureDateTime).toString()}</h6>
                            </div>

                            <div className="card-footer">
                                <Link className={"btn btn-success ms-1"} onClick={() => props.onAddToCart(item.id)} to={`/tickets/addtocart/${item.id}`}>Add to Cart</Link>


                                <Link className={"btn btn-info ms-1"} onClick={() => props.onEdit(item.id)} to={`/tickets/edit/${item.id}`}>Edit</Link>


                                <Link className={"btn btn-danger ms-1"} onClick={() => props.onDelete(item.id)} to={`/tickets/delete/${item.id}`}>Delete</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    );
}
export default ticketList;