import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors());


const MONGO_CONNECTION_URL = 'mongodb+srv://distroboard:HULSAXa6277arc47@distroboard.j3j2x.mongodb.net/distroboard?retryWrites=true&w=majority";"mongodb+srv://distroboard:HULSAXa6277arc47@distroboard.j3j2x.mongodb.net/distroboard?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}\nDatabase Connection Succesful!`)))
  .catch((error) => console.log(`${error}\nDatabase Connection Failed`));

mongoose.set('useFindAndModify', false);
