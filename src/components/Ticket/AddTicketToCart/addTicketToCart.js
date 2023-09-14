import React from "react";
import {useNavigate} from "react-router-dom";

const AddTicketToCart= (props) => {


    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    const navigate=useNavigate();

    const [formData,updateFormData]=React.useState({
        quantity:1

    })

    const handleChange = (e) =>
    {
        updateFormData({...formData,
            [e.target.name]:e.target.value.trim()
        })
    }

    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        const quantity=formData.quantity;
        props.onAddToCart(loggedInUser.userId,props.ticket.id,quantity);
        navigate("/tickets");
    }

    return(
        <div>
            <h3 className="text-center">Add selected product to your shopping cart!</h3>

            <div className="row mt-4">
                <div className="col-md-4 m-auto">
                    <form onSubmit={onFormSubmit}>
                        <input type="hidden" name="SelectedTicketId" value={props.ticket.id} />
                        <div className="form-group">
                            <label>Departure City</label>
                            <input
                                disabled
                                type="text"
                                name="SelectedTicket.DepartureCity"
                                value={props.ticket.departureCity}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Arrival City</label>
                            <input
                                disabled
                                type="text"
                                name="SelectedTicket.ArrivalCity"
                                value={props.ticket.arrivalCity}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AddTicketToCart;