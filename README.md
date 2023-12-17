# NodeMiniCart

NodeMiniCart is a minimalistic shopping cart application built with Node.js and Express that demonstrates basic eCommerce functionality, including a product catalog, a shopping cart, and admin product management.

## Features
- View products on the homepage
- Add products to the shopping cart
- View and manage the shopping cart, including quantities
- Admin dashboard for managing products (add, edit, delete)
- Persistent data storage with MySQL

## Prerequisites

- [Node.js](https://nodejs.org/en) (Recommended: Node v14 or higher)
- [MySQL](https://www.mysql.com/) server running on your local machine or a remote server
- npm (Generally comes with Node.js)


## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/m-mdy-m/NodeMiniCart.git
```

2. Change to the project directory:

```bash
cd NodeMiniCart
```

3. Install the required npm packages:
```bash
npm install
```


4. Set up your MySQL database and ensure it is running.


5. Create a .env file in the root directory and update it with your MySQL credentials:
```js
DB_HOST=localhost
DB_USER= root
DB_PASS= mdy_mmshly13831922
DB_NAME= node_learning
```

6. Start the application:

```bash
npm start
```



# How to Use the App

Navigate to `http://localhost:3000` in your web browser to interact with the application. You will be able to:

 
- **Home (/):** See the list of manufactured products; add them to the cart with a single click.

- **Cart (/cart):**  View products added to the cart and their quantities. No actual checkout process is implemented.

- **Add Products (/add-products):** As an admin, add new products to the catalog.

- **Admin Dashboard (/admin/dashboard):** Access the admin view to manage products - delete or edit existing entries.

- **Edit Products (/edit-products/:idProducts):** Admins may update a product’s information by navigating here with the specific product ID.



# Technical Details

## Frontend

- **CSS**-For styling the user interface.

- **EJS**-Embedded JavaScript templating engine used for server-side rendering of views.

## Backend

- **NodeJs** - The JavaScript runtime environment.
- **Express.js** - Web application framework for Node.js.
- **body-parser** - Middleware for parsing incoming request bodies.
- **MySQL2** - MySQL client for Node.js.
- **Sequelize** - A promise-based ORM for Node.js, used for MySQL interaction.
- **Nodemon** - Utility that monitors for any changes in your source and 
automatically restarts your server.

- **Casual** - Used for generating random data.


## Routes
The application consists of the following routes:

- `GET /` - Display homepage with product listings.
- `GET /cart` - Display the shopping cart with products and quantities.
- `GET /add-products` - Admin form for adding new products.
- `GET /admin/dashboard` - Admin dashboard to manage existing products.
- `GET /edit-products/:idProducts` - Admin form for editing an existing product.



## License
This project is open-sourced under the MIT License. See the [LICENSE](https://github.com/m-mdy-m/NodeMiniCart/blob/main/LICENSE) file for more details.
