# vertilogic_resto

- First : 
  - npm install
  - npx sequelize-cli db:create ( for create database in postgres )
  - npx sequelize-cli db:migrate ( for create tabel )


Tech :

- Node js 
- Express js 
- Postgres : Database
- Sequelize : ORM


List of available endpoints :

1. EndPoints for Restaurant :
- `GET /restaurant`
- `POST /restaurant`
- `PUT /restaurant/:id`
- `DELETE /restaurant/:id`

2. Endpoints for Product :
- `GET /product`
- `POST /product`
- `PUT /product/:id`
- `DELETE /product/:id`

3. Endpoints for Customer :
- `GET /customer`
- `POST /customer`

4. Endpoints for Order :
- `GET /orderlist`
- `POST /orderlist`



1. Endpoints for Restaurant :

### GET /restaurant

Description : Get all list of restaurant

Request :
  - headers: 
    - access_token : not neeeded

Response :
  - status : 200 
  - body : 

  ```json
  [
    {
        "id": "integer",
        "Name": "string",
        "alamat": "string",
        "noTelp": "string",
        "userId": "integer",
        "createdAt": "2021-01-28T06:49:17.334Z",
        "updatedAt": "2021-01-28T06:49:24.640Z",
        "Products": [
            {
                "id": "integer",
                "name": "string",
                "description": "string",
                "price": "integer",
                "halal": "boolean",
                "restoId": "integer",
                "createdAt": "2021-01-28T06:52:45.553Z",
                "updatedAt": "2021-01-28T06:54:56.107Z"
            }
        ]
    },...
  ]
  ```

### POST /restaurant

Description : Create New Restaurant

Request : 
  - body : 
    - Name : "string",
    - alamat : "string",
    - noTelp : "string"

Response : 
  - status : 201 - Created
  - body :
  
  ```json
  {
    "id": "integer",
    "Name": "string",
    "alamat": "string",
    "noTelp": "string",
    "updatedAt": "2021-01-29T06:26:34.846Z",
    "createdAt": "2021-01-29T06:26:34.846Z",
    "userId": "integer"
  }
  ```


  - status : 400 - Bad Request
  ```json
  {
    "errors" : [
      "Validation len on Name failed",
      "name should be less than 128 characters",
      "Name is required",
      "Alamat is required",
      "No Telp is required"
    ]
  }
  ```


### PUT /restaurant/:id 

Description : Update Restaurant By Id

Request :

  - headers :
    -access_token: not needed

  - body : 
    - Name : "string",
    - alamat : "string",
    - noTelp : "string"

  - params : 
    - id : "integer"

Response : 
  
  - status : 200 - Updated
  - body : 

  ```json
  {
    "id": "integer",
    "Name": "string",
    "alamat": "string",
    "noTelp": "string",
    "userId": "integer,
    "createdAt": "2021-01-28T06:49:17.334Z",
    "updatedAt": "2021-01-28T06:49:24.640Z"
  }
  ```

  - status : 404 - Not Found 
  ```json
  { msg: 'Restaurant not found' }
  ```

### DELETE /restaurant/:id

Description : Delete Restaurant By Id

Request :

  - headers :
    -access_token: not needed

  - body : not needed

  - params : 
    - id : "integer"

Response : 

  - status : 200 - OK
  - body : 
  
  ```json
  {
    "msg": "Restaurant with id : "integer" deleted"
  }
  ```

  - status : 404 - Not Found 
  ```json
  { msg: 'Restaurant not found' }
  ```

`--------------------------------------------------------`

2. Endpoints for Product :

### GET /product

Description : Get all list of product for Restaurant

Request :
  - headers: 
    - access_token : not neeeded

Response :
  - status : 200 
  - body : 

  ```json
  [
    {
        "id": "integer",
        "name": "string",
        "description": "string",
        "price": "integer",
        "halal": "boolean",
        "restoId": "integer",
        "createdAt": "2021-01-28T06:52:45.553Z",
        "updatedAt": "2021-01-28T06:54:56.107Z"
    }
  ]
  ```


### POST /product

Description : Create New Restaurant

Request : 
  - body : 
    - name : "string",
    - description : "string" 
    - price : "integer"
    - halal : "boolean"
    - restoId : "integer"

Response : 
  - status : 201 - Created
  - body :
  
  ```json
  {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "halal": "boolean",
    "restoId": "integer,
    "updatedAt": "2021-01-29T06:49:13.639Z",
    "createdAt": "2021-01-29T06:49:13.639Z"
  }
  ```


  - status : 400 - Bad Request
  ```json
  {
    "errors" : [
      "Name is required",
      "Description is required",
      "Price is required"
    ]
  }
  ```


### PUT /product/:id

Description : Update Product By Id

Request :

  - headers :
    -access_token: not needed

  - body : 
    - name : "string",
    - description : "string" 
    - price : "integer"
    - halal : "boolean"
    - restoId : "integer" 

  - params : 
    - id : "integer"

Response : 
  
  - status : 200 - Updated
  - body : 

  ```json
  {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "halal": "boolean",
    "restoId": "integer,
    "updatedAt": "2021-01-29T06:49:13.639Z",
    "createdAt": "2021-01-29T06:49:13.639Z"
  }
  ```

  - status : 404 - Not Found 
  ```json
  { msg: 'Product not found' }
  ```

### DELETE /product/:id

Description : Delete Product By Id

Request :

  - headers :
    -access_token: not needed

  - body : not needed

  - params : 
    - id : "integer"

Response : 

  - status : 200 - OK
  - body : 
  
  ```json
  {
    "msg": "Product with id : 3 deleted"
  }
  ```






`--------------------------------------------------------`

3. Endpoints for Customer :

### GET /customer

Description : Get all list of customer

Request :
  - headers: 
    - access_token : not neeeded

Response :
  - status : 200 
  - body : 

  ```json
  [
    {
        "id": "integer",
        "name": "string",
        "alamat": "string",
        "createdAt": "2021-01-28T07:34:21.917Z",
        "updatedAt": "2021-01-28T07:34:21.917Z"
    },...
  ]
  ```


### POST /customer

  Description : Create New Customer 

  Request : 
    - body : 
      - name : "string",
      - alamat : "text"

  Response :
    - status : 201
    - body : 

  ```json
  {
    "id": "integer",
    "name": "string",
    "alamat": "string",
    "updatedAt": "2021-01-29T07:00:30.782Z",
    "createdAt": "2021-01-29T07:00:30.782Z"
  }
  ``` 


  `------------------------------------------------------`

4. Endpoints for Order :

### GET /order

Description : Get all list of order

Request :
  - headers: 
    - access_token : not neeeded

Response :
  - status : 200 
  - body : 

  ```json
  [
    {
        "CustomerId": "integer",
        "ProductId": "integer",
        "quantity": "integer",
        "request": "string",
        "pickup": "boolean",
        "createdAt": "2021-01-29T05:48:34.935Z",
        "updatedAt": "2021-01-29T05:48:34.935Z",
        "Customer": {
            "id": "integer",
            "name": "string",
            "alamat": "string",
            "createdAt": "2021-01-28T07:34:21.917Z",
            "updatedAt": "2021-01-28T07:34:21.917Z"
        },
        "Product": {
            "id": "integer",
            "name": "string",
            "description": "string",
            "price": "integer",
            "halal": "boolean",
            "restoId": "integer",
            "createdAt": "2021-01-28T06:52:45.553Z",
            "updatedAt": "2021-01-28T06:54:56.107Z"
        }
    }
  ]
  ```
