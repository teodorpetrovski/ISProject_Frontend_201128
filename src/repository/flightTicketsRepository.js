import axios from '../custom-axios/axios';

const FlightTicketsRepository = {

    //TICKET CONTROLLER ACCESS

    fetchTickets: (date,departure,arrival) => {
        return axios.post("/ticket/index", {
            "date": date,
            "departure": departure,
            "arrival": arrival
        })
    },

    getTicket:(id) => {
        return axios.get(`/ticket/details/${id}`)
    },

    addTicket: (departureCity,arrivalCity,destinationImage,flightClass,flightDescription,ticketPrice,flightDuration,departureDateTime) => {
        return axios.post("/ticket/create", {
            "departureCity": departureCity,
            "arrivalCity": arrivalCity,
            "destinationImage": destinationImage,
            "flightClass": flightClass,
            "flightDescription": flightDescription,
            "ticketPrice": ticketPrice,
            "flightDuration": flightDuration,
            "departureDateTime": departureDateTime,
        })
    },

    editTicket: (id,departureCity,arrivalCity,destinationImage,flightClass,flightDescription,ticketPrice,flightDuration,departureDateTime) => {
        return axios.put(`/ticket/edit/${id}`, {
            "id":id,
            "departureCity": departureCity,
            "arrivalCity": arrivalCity,
            "destinationImage": destinationImage,
            "flightClass": flightClass,
            "flightDescription": flightDescription,
            "ticketPrice": ticketPrice,
            "flightDuration": flightDuration,
            "departureDateTime": departureDateTime,
        })
    },

    deleteTicket:(id) =>{
        return axios.delete(`/ticket/delete/${id}`)
    },


    ticketToCart:(id) => {
        return axios.get(`/ticket/cart/${id}`)
    },

    addTicketToCart:(userId,id,quantity) => {
        return axios.post("/ticket/addtocart", {
            "userId":userId,
            "selectedTicketId": id,
            "quantity": quantity
        })
    },

    //SHOPPING CART CONTROLLER ACCESS

    getShoppingCart:(userId) => {
        return axios.post("/shoppingcart/index",
            {
                "userId":userId
            }
        )
    },

    deleteFromShoppingCart:(userid,id) =>{
        return axios.post(`/shoppingcart/delete/${id}`,
            {
                "userId":userid,
                "id":id
            })
    },

    orderFromShoppingCart:() => {
        return axios.get("/shoppingcart/order")
    },

    payOrder:(stripeEmail,stripeToken) => {
        return axios.post("/shoppingcart/payorder",{
            "stripeEmail":stripeEmail,
            "stripeToken":stripeToken
        })
    },

    //ORDER CONTROLLER ACCESS

    fetchOrders:(userId) => {
        return axios.post("/order/index",{
            "userId":userId
        })
    },


    //TO DO
    exportOrder: (id) => {
        return axios.post(`order/exportorder`, { "id": id }, {
            responseType: 'blob',
        }).then(response => {

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);


            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Invoice.pdf');
            document.body.appendChild(link);
            link.click();


            window.URL.revokeObjectURL(url);
        });
    },


    //ACCOUNT CONTROLLER ACCESS


    registerUser:(name,lastName,email,password,confirmPassword,phoneNumber)=>{
        return axios.post("/account/register",{
            "name":name ,
            "lastName": lastName,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword ,
            "phoneNumber": phoneNumber
        })
    },


    loginUser: (email,password) => {
        return axios.post("/account/login",{
            "email":email,
            "password":password
        })
    },

    logoutUser: () => {
        return axios.get("/account/logout")
    }

}

export default FlightTicketsRepository;