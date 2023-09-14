import React from "react";
import {Link} from "react-router-dom";

const header = (props) =>
{
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    return (

        <header>

            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/books">Book Flights Online</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/tickets"}>Tickets</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/shoppingcart"}>Shopping Cart</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/orders"}>My Orders</Link>
                        </li>
                    </ul>


                    <ul className="navbar-nav ms-auto"> {/* Right-aligned links */}
                        {loggedInUser === null ? (
                            <>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/account/login"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/account/register"}>Register</Link>
                        </li>
                            </>) : (

                            <li className="nav-item text-light">
                                    Welcome User
                            </li>

                            )}
                    </ul>

                </div>
            </div>
            </nav>

            <div
                style={{
                    backgroundImage: `url('https://scontent.fskp1-2.fna.fbcdn.net/v/t1.6435-9/72476570_901284196910054_1123080329532276736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gLn2H8rMZDkAX9Z5U1F&_nc_ht=scontent.fskp1-2.fna&oh=00_AfBs_2njK2a0qo__QB7BDf7GR5dKUf9ZJiBCLcxK5M8Y-g&oe=652AE49D')`, // Replace with the actual path to your image
                    backgroundPosition: 'center bottom -100px',
                    backgroundSize: 'cover',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}
            ></div>

        </header>

    );
}

export  default header;