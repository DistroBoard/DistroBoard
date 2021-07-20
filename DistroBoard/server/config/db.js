import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


export default function connectDB() {
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(console.log(`Database Connection Succesful!`))
    .catch((error) => console.log(`${error}\nDatabase Connection Failed`));

}
