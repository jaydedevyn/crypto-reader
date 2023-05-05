

# ReactJS and Redux Order Book

This repository contains a ReactJS and Redux application that pulls real-time data from the Bitfinex API using websockets and builds an order book. The application subscribes to the order book channel and receives updates in real-time, processing them to create a continuously updated view of the order book.

## Getting Started

To get started, first clone this repository to your local machine:

```
git clone https://github.com/jaydedevyn/crypto-reader.git
```

Next, install the required packages using npm:

```
npm install
```

## Running the Application

You can start the application using the following command:

```
npm start
```

The application should now be running at `http://localhost:3000`.

## Using the Application

When you first open the application, you will see the order book for the BTC/USD trading pair. You can select a different trading pair using the dropdown menu at the top of the page.

The order book is divided into two sections: the bid section and the ask section. The bid section shows all of the buy orders currently in the market, sorted by price from highest to lowest. The ask section shows all of the sell orders currently in the market, sorted by price from lowest to highest.

The rows in the order book show the price, quantity, and total amount for each order. The total amount is the cumulative quantity of orders at that price level.

As new orders are added to the market or existing orders are filled, the order book will be updated in real-time.

## Conclusion

This ReactJS and Redux application provides a user-friendly interface for viewing real-time order book data from the Bitfinex API. By leveraging websockets and real-time updates, the application provides a highly responsive and accurate view of the market, allowing traders to make informed decisions based on the most up-to-date information available.
