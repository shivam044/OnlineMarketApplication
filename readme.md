# DressStore - Online Market Application

This project is an online market application developed using Node.js, Express, and MongoDB. It features a REST API to interact with a MongoDB database using Mongoose ODM.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivam044/OnlineMarketApplication.git
   
2. **Navigate to the project directory:**
    ```bash
    cd OnlineMarketApplication

3. **Install dependencies:**
    ```bash
    npm install

4. **Start the server**
    ```bash
    npm start

# API Endpoints

### Products

- **Get all products:** `GET /api/products`
- **Get a product by ID:** `GET /api/products/:id`
- **Add a new product:** `POST /api/products`
- **Update a product by ID:** `PUT /api/products/:id`
- **Delete a product by ID:** `DELETE /api/products/:id`
- **Delete all products:** `DELETE /api/products`
- **Find products by name:** `GET /api/products/search?name=keyword`




