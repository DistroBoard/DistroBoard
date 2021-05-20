//Import all dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Create the app
const app = express();

//Allow our app to use the dependencies
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

//Setup our port
const PORT = process.env.PORT || 5000;

//Connect to our database
import connectDB from './config/db.js';
connectDB();


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.\nVisit http://localhost:${PORT} to view.`);
});


