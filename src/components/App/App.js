import logo from '../../logo.svg';
import {Component} from "react";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import './App.css';
import flightTicketsRepository from "../../repository/flightTicketsRepository";
import TicketList from "../Ticket/TicketList/ticketList";
import TicketAdd from "../Ticket/TicketAdd/ticketAdd";
import TicketEdit from "../Ticket/TicketEdit/ticketEdit";
import TicketDelete from "../Ticket/TicketDelete/ticketDelete";
import Registration from "../Account/Register/registration";
import Login from "../Account/Login/login";
import ShoppingCart from "../ShoppingCart/ShoppingCartList/shoppingCartList";
import AddTicketToCart from "../Ticket/AddTicketToCart/addTicketToCart";
import {wait} from "@testing-library/user-event/dist/utils";
import OrderList from "../Order/OrderList/orderList";
import Payment from "../ShoppingCart/Pay/payment";
import Header from "../Header/header";




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            orders: [],
            selectedTicket: {},
            shoppingCart: {},
            ticketToCart: {},
            loggedInUser:{}

        }
    }

    render() {
        return (
            <Router>
                <Header/>

                <main>
                    <div className={"container"}>

                        <Routes>


                            <Route path={"/payment"} exact element={<Payment/>}/>

                            <Route path={"/account/register"} exact element={<Registration onRegister={this.registerUser} />}/>
                            <Route path={"/account/login"} exact element={<Login onLogin={this.loginUser} />}/>


                            <Route path={"/shoppingcart"} exact
                                   element={<ShoppingCart cart={this.state.shoppingCart} user={this.state.loggedInUser} onDelete={this.deleteFromShoppingCart} />}/>

                            <Route path={"/orders"} exact
                                   element={<OrderList orders={this.state.orders} user={this.state.loggedInUser} exportOrder={this.exportOrder} />}/>

                            <Route path={"/tickets/delete/:id"} exact
                                   element={<TicketDelete  ticket={this.state.selectedTicket} onTicketDelete={this.deleteTicket}/>}/>
                            <Route path={"/tickets/addtocart/:id"} exact
                                   element={<AddTicketToCart  ticket={this.state.selectedTicket} user={this.state.loggedInUser} onAddToCart={this.addTicketToCart}/>}/>

                            <Route path={"/tickets/edit/:id"} exact
                                   element={<TicketEdit  ticket={this.state.selectedTicket} onTicketEdit={this.editTicket}/>}/>
                            <Route path={"/tickets/add"} exact element={<TicketAdd onTicketAdd={this.addTicket} />}/>
                            <Route path={"/tickets"} exact
                                   element={<TicketList cart={this.state.shoppingCart} tickets={this.state.tickets} onSearch={this.loadTickets}  onEdit={this.getTicket} onDelete={this.getTicket} onAddToCart={this.getTicket}/>}/>

                        </Routes>

                    </div>
                </main>
            </Router>

        );
    }


    loadTickets = (date,departure,arrival) => {
        flightTicketsRepository.fetchTickets(date,departure,arrival)
            .then((data) => {
                    this.setState({
                        tickets: data.data
                    })
                }
            )
    }


    loadOrders = (userId) => {
        flightTicketsRepository.fetchOrders(userId)
            .then((data) => {
                    this.setState({
                        orders: data.data
                    })
                }
            )
    }

    loadShoppingCart = (userId) => {
        flightTicketsRepository.getShoppingCart(userId)
            .then((data) => {
                    this.setState({
                        shoppingCart: data.data
                    })
                }
            )
    }


    addTicket = (departureCity, arrivalCity, destinationImage, flightClass, flightDescription, ticketPrice, flightDuration, departureDateTime) => {
        flightTicketsRepository.addTicket(departureCity, arrivalCity, destinationImage, flightClass, flightDescription, ticketPrice, flightDuration, departureDateTime)
            .then(() => {
                this.loadTickets();
            })
    }

    editTicket = (id, departureCity, arrivalCity, destinationImage, flightClass, flightDescription, ticketPrice, flightDuration, departureDateTime) => {
        flightTicketsRepository.editTicket(id, departureCity, arrivalCity, destinationImage, flightClass, flightDescription, ticketPrice, flightDuration, departureDateTime)
            .then(() => {
                this.loadTickets();
            })
    }


    deleteTicket = (id) => {
        flightTicketsRepository.deleteTicket(id)
            .then(() => {
                this.loadTickets();
            })
    }


    getTicket = (id) => {
        flightTicketsRepository.getTicket(id)
            .then((data) => {
                this.setState({
                    selectedTicket: data.data
                })
            })
    }

    selectTicketForCart = (id) => {
        flightTicketsRepository.ticketToCart(id)
            .then((data) => {
                this.setState({
                    ticketToCart: data.data
                })
            })
    }

    addTicketToCart = (userId,id, quantity) =>
    {
        flightTicketsRepository.addTicketToCart(userId,id,quantity)
            .then(() => {
                this.loadShoppingCart(this.state.loggedInUser.userId);
            })
    }

    deleteFromShoppingCart = (userId,id) =>
    {
        flightTicketsRepository.deleteFromShoppingCart(userId,id)
            .then(() => {
                const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
                this.loadShoppingCart(loggedInUser.userId);
            })
    }

    orderFromShoppingCart = () =>
    {
        flightTicketsRepository.orderFromShoppingCart()
            .then(() => {
                this.loadShoppingCart(this.state.loggedInUser.userId);
            })
    }

    payOrder = (stripeEmail,stripeToken) =>
    {
        flightTicketsRepository.payOrder(stripeEmail,stripeToken)
            .then(() => {
                this.loadShoppingCart(this.state.loggedInUser.userId);
            })
    }

    registerUser = (name,lastName,email,password,confirmPassword,phoneNumber) =>
    {
        flightTicketsRepository.registerUser(name,lastName,email,password,confirmPassword,phoneNumber)
            .then(() => {

            })
    }

    loginUser = (email,password) =>
    {
        flightTicketsRepository.loginUser(email,password)
            .then((data) => {
                sessionStorage.clear()

                sessionStorage.setItem('loggedInUser', JSON.stringify(data.data));

            })
            .catch((error) => {

                console.error('Login failed:', error);
            });
    }



    exportOrder = (id) =>
    {
        flightTicketsRepository.exportOrder(id)
    }









    componentDidMount(){
        this.loadTickets();
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if(loggedInUser) {
            this.loadShoppingCart(loggedInUser.userId)
            this.loadOrders(loggedInUser.userId);
        }



  }


}

export default App;