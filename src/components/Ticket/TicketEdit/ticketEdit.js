import {useNavigate} from "react-router-dom";
import React from "react";

const TicketEdit= (props) => {


    const navigate=useNavigate();
    // eslint-disable-next-line no-undef
    const [formData,updateFormData]=React.useState({
        departureCity: "",
        arrivalCity: "",
        destinationImage: "",
        flightClass: "",
        flightDescription: "",
        ticketPrice: "",
        flightDuration: "",
        departureDateTime: ""

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
        const departureCity=formData.departureCity !== "" ? formData.departureCity : props.ticket.departureCity;
        const arrivalCity= formData.arrivalCity !== "" ? formData.arrivalCity : props.ticket.arrivalCity;
        const destinationImage= formData.destinationImage !== "" ? formData.destinationImage : props.ticket.destinationImage;
        const flightClass= formData.flightClass !== "" ? formData.flightClass : props.ticket.flightClass;
        const flightDescription= formData.flightDescription !== "" ? formData.flightDescription : props.ticket.flightDescription;
        const ticketPrice= formData.ticketPrice !== "" ? formData.ticketPrice : props.ticket.ticketPrice;
        const flightDuration= formData.flightDuration !== "" ? formData.flightDuration : props.ticket.flightDuration;
        const departureDateTime= formData.departureDateTime !== "" ? formData.departureDateTime : props.ticket.departureDateTime;

        props.onTicketEdit(props.ticket.id,departureCity,arrivalCity,destinationImage,flightClass,flightDescription,ticketPrice,flightDuration,departureDateTime);
        navigate("/tickets");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="departureCity">Departure City</label>
                        <input type="text"
                               className="form-control"
                               id="departureCity"
                               name="departureCity"

                               placeholder={props.ticket.departureCity}
                               onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="arrivalCity">Arrival City</label>
                        <input type="text"
                               className="form-control"
                               id="arrivalCity"
                               name="arrivalCity"
                               placeholder={props.ticket.arrivalCity}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="destinationImage">Destination Image:</label>
                        <input type="text"
                               className="form-control"
                               id="destinationImage"
                               name="destinationImage"
                               placeholder={props.ticket.destinationImage}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightClass">Flight Class</label>
                        <input type="text"
                               className="form-control"
                               id="flightClass"
                               name="flightClass"
                               placeholder={props.ticket.flightClass}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightDescription">Flight Description</label>
                        <input type="text"
                               className="form-control"
                               id="flightDescription"
                               name="flightDescription"
                               placeholder={props.ticket.flightDescription}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ticketPrice">Ticket Price</label>
                        <input type="text"
                               className="form-control"
                               id="ticketPrice"
                               name="ticketPrice"
                               placeholder={props.ticket.ticketPrice}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightDuration">Flight Duration</label>
                        <input type="text"
                               className="form-control"
                               id="flightDuration"
                               name="flightDuration"
                               placeholder={props.ticket.flightDuration}

                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="departureDateTime">Departure Date Time</label>
                        <input type="datetime-local"
                               className="form-control"
                               id="departureDateTime"
                               name="departureDateTime"
                               placeholder={props.ticket.departureDateTime}

                               onChange={handleChange}
                        />
                    </div>



                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

export default TicketEdit;