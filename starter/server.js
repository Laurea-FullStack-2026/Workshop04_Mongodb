const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// ========================================
// TODO: Task 1 - Connect to MongoDB
// ========================================
// Uncomment and complete the following:
/*
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});
*/

const app = express();
const PORT = process.env.PORT || 3000;

// ========================================
// Middleware Configuration
// ========================================

// Parse JSON bodies
app.use(express.json());

// Serve static files from public directory
app.use(express.static('public'));

// ========================================
// TODO: Task 2 - Create a Mongoose Model
// ========================================
// Create a models/ directory and define your schema
// Then import it here:
// const Post = require('./models/Post');

// ========================================
// Routes - HTML Pages
// ========================================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// ========================================
// TODO: Task 3 - Create POST Endpoint
// ========================================
// Uncomment when ready:
/*
app.post('/api/posts', async (req, res) => {
  try {
    // Extract data from request body
    const { title, description } = req.body;

    // TODO: Create and save a new post to MongoDB
    // const post = new Post({ title, description });
    // const savedPost = await post.save();
    // res.status(201).json(savedPost);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: err.message });
  }
});
*/

// ========================================
// TODO: Task 4 - Create GET Endpoints
// ========================================
// Uncomment when ready:
/*
// Get all posts
app.get('/api/posts', async (req, res) => {
  try {
    // TODO: Query all posts from MongoDB
    // const posts = await Post.find().sort({ createdAt: -1 });
    // res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Validate MongoDB ObjectId
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ error: 'Invalid ID format' });
    // }

    // TODO: Find post by ID
    // const post = await Post.findById(id);
    // if (!post) {
    //   return res.status(404).json({ error: 'Post not found' });
    // }
    // res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/

// ========================================
// TODO: Task 5 - Create PUT/PATCH and DELETE Endpoints
// ========================================
// Uncomment when ready:
/*
// Update post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // TODO: Update the post in MongoDB
    // const post = await Post.findByIdAndUpdate(id, updateData, {
    //   new: true,           // Return updated document
    //   runValidators: true  // Run schema validators
    // });

    // if (!post) {
    //   return res.status(404).json({ error: 'Post not found' });
    // }

    // res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Delete the post from MongoDB
    // const post = await Post.findByIdAndDelete(id);

    // if (!post) {
    //   return res.status(404).json({ error: 'Post not found' });
    // }

    // res.json({ message: 'Post deleted successfully', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
*/

// ========================================
// Error Handling - 404 and 500
// ========================================

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// ========================================
// Start Server
// ========================================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`
  Available routes:
  GET  /              - Home page
  GET  /about         - About page
  GET  /contact       - Contact page
  
  API endpoints (when tasks are completed):
  POST   /api/posts        - Create a new post
  GET    /api/posts        - Get all posts
  GET    /api/posts/:id    - Get a single post
  PUT    /api/posts/:id    - Update a post
  DELETE /api/posts/:id    - Delete a post
  `);
});
