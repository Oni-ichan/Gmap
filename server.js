const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve admin.html at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Serve user.html at /user
app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

// API routes
let complaints = [];

// Add new complaint
app.post('/complaints', (req, res) => {
  const { id, lat, lng, title, description, severity } = req.body;
  if (!id || !title || !description || !severity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newComplaint = {
    id,
    lat,
    lng,
    title,
    description,
    severity,
    date: new Date().toISOString(),
    status: 'Pending'
  };
  complaints.push(newComplaint);
  res.status(201).json(newComplaint);
});

// Get all complaints
app.get('/complaints', (req, res) => {
  res.json(complaints);
});

// Delete a single complaint by ID
app.delete('/complaints/:id', (req, res) => {
  const complaintId = req.params.id;
  const index = complaints.findIndex(c => c.id === complaintId);

  if (index === -1) {
    return res.status(404).json({ error: 'Complaint not found' });
  }

  complaints.splice(index, 1); // Remove the complaint from array
  res.json({ message: 'Complaint deleted successfully' });
});

// Delete all complaints
app.delete('/complaints', (req, res) => {
  complaints = []; // Clear all complaints
  res.json({ message: 'All complaints cleared successfully' });
});

// Update complaint status
app.put('/complaints/:id', (req, res) => {
  const complaintId = req.params.id;
  const complaint = complaints.find(c => c.id === complaintId);
  if (!complaint) {
    return res.status(404).json({ error: 'Complaint not found' });
  }
  complaint.status = req.body.status;
  res.json(complaint);
});

let liveManholeData = [];

app.post('/manholes/live', (req, res) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Data must be an array of manhole objects' });
  }

  liveManholeData = data; // replace or update as needed
  console.log('Received live manhole data:', liveManholeData);
  res.status(200).json({ message: 'Manhole data received successfully' });
});

// Optional: Endpoint to GET the latest manhole data
app.get('/manholes/live', (req, res) => {
  res.json(liveManholeData);
});

// Fallback route
app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
