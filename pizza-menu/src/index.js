import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1 style={{}}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    //     const pizzas = [];
    const numPizas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizas > 0 ? (
                <>
                    <p>
                        Authentic Indian Cuisine. 6 Creative dishes to choose
                        from. All from our stone oven, all organic and
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menu, please come back later</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 8;
    const closeHour = 24;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We are happy to welcome u between {openHour} and {closeHour}
                </p>
            )}
        </footer>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We are Open from {openHour}.00 until {closeHour}.00, Come visit
                us or Order ok Online
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/*
WARNING : --> DO NOT UNCOMMENT THIS : THIS IS FOR REFERENCE ONLY.
----------Inline CSS : ->
    const style = {
        color: "red",
        fontSize: "40px",
        textTransform: "upperCase",
    };
------------------
Props removed this------------ 
    <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
    />
    <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
    /> 
--------------------
sold out code
    {pizzaObj.soldOut ? 
    (
        <span>SOLD OUT</span>
    ) : (
        <span>pizzaObj.price</span>
    )}
-----------------------
hours
    if (hour >= 12 && hour <= 22) alert("We are currently Open!");
    else alert("We are currently Closed!");
*/
