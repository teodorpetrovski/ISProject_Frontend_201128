import {useNavigate} from "react-router-dom";
import React from "react";

const TicketAdd= (props) => {


    const navigate=useNavigate();

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
        const departureCity=formData.departureCity;
        const arrivalCity= formData.arrivalCity;
        const destinationImage= formData.destinationImage;
        const flightClass= formData.flightClass;
        const flightDescription= formData.flightDescription;
        const ticketPrice= formData.ticketPrice;
        const flightDuration= formData.flightDuration;
        const departureDateTime= formData.departureDateTime;

        props.onTicketAdd(departureCity,arrivalCity,destinationImage,flightClass,flightDescription,ticketPrice,flightDuration,departureDateTime);
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
                               required
                               placeholder="Enter departure city"
                               onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="arrivalCity">Arrival City</label>
                        <input type="text"
                               className="form-control"
                               id="arrivalCity"
                               name="arrivalCity"
                               placeholder="Enter arrival city"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="destinationImage">Destination Image:</label>
                        <input type="text"
                               className="form-control"
                               id="destinationImage"
                               name="destinationImage"
                               placeholder="Enter link of destination image"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightClass">Flight Class</label>
                        <input type="text"
                               className="form-control"
                               id="flightClass"
                               name="flightClass"
                               placeholder="Enter flight class"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightDescription">Flight Description</label>
                        <input type="text"
                               className="form-control"
                               id="flightDescription"
                               name="flightDescription"
                               placeholder="Enter flight description"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ticketPrice">Ticket Price</label>
                        <input type="text"
                               className="form-control"
                               id="ticketPrice"
                               name="ticketPrice"
                               placeholder="Enter ticket price"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="flightDuration">Flight Duration</label>
                        <input type="text"
                               className="form-control"
                               id="flightDuration"
                               name="flightDuration"
                               placeholder="Enter duration of flight"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="departureDateTime">Departure Date Time</label>
                        <input type="datetime-local"
                               className="form-control"
                               id="departureDateTime"
                               name="departureDateTime"
                               placeholder="Enter date and time of departure"
                               required
                               onChange={handleChange}
                        />
                    </div>



                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

export default TicketAdd;