// This is the startpoint for the application
//Import all dependencies
import express from 'express';
import cors from 'cors';

// import all routes 
import distroRoutes from './routes/distros.js';

//Create the app
const app = express();

//Allow our app to use the dependencies
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

//Setup our port
const PORT = process.env.PORT || 5000;

// Setup our routes
//routes for distros 
// url : localhost:5000/distros/
app.use('/distros', distroRoutes);

//Connect to our database
import connectDB from './config/db.js';
connectDB();


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.\nVisit http://localhost:${PORT} to view.`);
});


