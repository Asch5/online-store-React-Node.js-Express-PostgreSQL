# online-store-React-Node.js-Express-PostgreSQL
This is a full-stack e-commerce web application built using React, Node.js, Express and PostgreSQL. The frontend is created with React and allows users to browse and purchase electronic devices. The backend uses Node.js, Express and Sequelize ORM to interact with a PostgreSQL database.

Some key features and technologies:

Frontend:

- Created using React and React Bootstrap for responsive UI components
- Routing handled by React Router for navigation between pages
- State management using MobX for reactivity and shared state
- Fetch API and Axios used for API calls to backend

Backend:

- Node.js and Express framework handles server logic and routing
- PostgreSQL database used with Sequelize ORM for data persistence
- JWT authentication implemented for secure user login
- Role based authorization middleware protects admin routes
- RESTful API endpoints created for CRUD operations
- Image upload implemented with express-fileupload
- 
Key features:

- User registration and login with encrypted passwords
- Admin product management with create, read, update, delete
- Pagination, filtering and search for products
- Product details page with ratings
- Persistent shopping cart
- Checkout and payments integration (to be implemented)

The frontend React app makes calls to API endpoints on the Express backend server. The backend interacts with the PostgreSQL database using Sequelize for data queries, validation, associations etc.

Overall, the technology stack provides a robust and scalable e-commerce platform. React offers seamless UI rendering, Node.js enables scalable server code, and PostgreSQL gives relational data storage. Features like authentication and role-based access control improve security. The modular architecture allows easy extensions and customizations.
