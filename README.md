# Workshop 04 – Building a Full-Stack App with MongoDB

## Overview
In this workshop, you will learn the fundamentals of **MongoDB** and **database integration** by building a full-stack Node.js application that persists data to a MongoDB database.

This workshop focuses on **practical understanding** of how to connect Express.js applications to MongoDB and perform CRUD operations on data.

---

## Learning Objectives
By the end of this workshop, you should be able to:
- Understand MongoDB basics and document structure
- Connect a Node.js application to MongoDB
- Create models using Mongoose (ODM - Object Document Mapper)
- Perform CRUD operations (Create, Read, Update, Delete)
- Validate data using Mongoose schemas
- Build RESTful API endpoints that interact with a database
- Handle database errors and edge cases
- Understand async/await patterns with database operations

---

## Topics Covered
- MongoDB fundamentals
- MongoDB Atlas setup and cloud database
- Mongoose ODM library
- Schema and model definition
- Data validation and middleware
- CRUD operations with async/await
- RESTful API design with database integration
- Error handling and data persistence
- Database indexing basics
- ObjectId and data types

---

## Prerequisites
Before starting this workshop, make sure you have:
- Basic knowledge of JavaScript and async/await
- Understanding of HTML and CSS
- Completed Workshop 03 (Express.js) or equivalent knowledge
- Understanding of HTTP and RESTful APIs
- Installed:
  - Node.js (LTS version recommended)
  - npm (comes with Node.js)
  - Git
  - A code editor (VS Code recommended)
- Created a MongoDB Atlas account (free tier available)

---

## Project Description
You will build:
> **A full-stack web application with Express.js backend that stores and retrieves data from MongoDB**

The application will:
- Connect to MongoDB (local or MongoDB Atlas)
- Define data models with Mongoose schemas
- Implement CRUD API endpoints
- Display data from the database on web pages
- Handle form submissions and store data
- Provide JSON API endpoints for frontend integration
- Include error handling and validation

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Workshop04_mongodb
```

### 2. Navigate to the Starter Folder
```bash
cd starter
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up MongoDB
- Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- OR use a local MongoDB installation

### 5. Configure Environment Variables
Create a `.env` file in the `starter/` directory:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/workshop04
PORT=3000
NODE_ENV=development
```

### 6. Run the Application
```bash
npm start        # Run with Node.js
npm run dev      # Run with Nodemon for auto-restart
```

The server will start at `http://localhost:3000`

---

## Folder Structure
```
Workshop04_mongodb/
├── README.md                 # This file
├── requirements.md           # Detailed task requirements
├── starter/                  # Your working directory
│   ├── package.json
│   ├── server.js            # Main server file
│   ├── .env                 # Environment variables (create this)
│   ├── models/              # Mongoose models (create this)
│   ├── routes/              # API routes (create this)
│   ├── public/              # Static files
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── 404.html
│   │   ├── 500.html
│   │   └── styles/
│   │       └── style.css
│   └── config/              # Database config (create this)
├── tuntiharjoitukset/       # Class examples and demonstrations
│   ├── package.json
│   ├── example-1-connect.js
│   ├── example-2-crud.js
│   └── public/              # Same static files
```

---

## Key Concepts

### MongoDB vs Relational Databases
- **Document-based**: Data stored as JSON-like documents
- **Schema-less**: Flexible structure (with Mongoose we add structure)
- **Scalable**: Designed for horizontal scaling
- **NoSQL**: No SQL queries (uses MongoDB query language)

### Mongoose
- ODM (Object Document Mapper) for MongoDB
- Provides schema validation
- Relationship management
- Middleware hooks (pre/post operations)
- Query building

### CRUD Operations
- **Create**: Insert new documents into the database
- **Read**: Query and retrieve documents
- **Update**: Modify existing documents
- **Delete**: Remove documents from the database

---

## Common Commands

### Development
- `npm start` - Start the server
- `npm run dev` - Start with auto-reload (nodemon)

### Database
- `mongosh` - MongoDB shell for testing queries
- View MongoDB Atlas in the browser at https://cloud.mongodb.com

---

## Troubleshooting

### Cannot connect to MongoDB
- Check your connection string in `.env`
- Verify MongoDB Atlas IP whitelist includes your IP
- Check that MongoDB service is running (for local databases)

### Module not found errors
- Run `npm install` to ensure all dependencies are installed
- Check that `node_modules/` directory exists

### Port already in use
- Change `PORT` in `.env` to a different number (e.g., 3001)
- Or kill the process using port 3000

---

## Resources

### MongoDB
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Atlas Setup](https://docs.mongodb.com/atlas/)
- [MongoDB Query Language](https://docs.mongodb.com/manual/reference/query-filter-documents/)

### Mongoose
- [Mongoose Documentation](https://mongoosejs.com/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [Mongoose API](https://mongoosejs.com/docs/api/model.html)

### Learning Resources
- [Express.js Guide](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [REST API Tutorial](https://restfulapi.net/)

---

## Next Steps

After completing this workshop:
- Workshop 05: Authentication and Authorization
- Workshop 06: File Uploads and Image Processing
- Workshop 07: Real-time Applications with WebSockets

---

## Support

For questions or issues:
- Review the `requirements.md` for detailed task descriptions
- Check the `tuntiharjoitukset/` folder for examples
- Consult the MongoDB and Mongoose documentation
- Reach out to your instructor

---

**Happy coding! 🚀**
