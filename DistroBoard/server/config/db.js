import mongoose from 'mongoose';

const MONGO_CONNECTION_URL = 'mongodb+srv://distroboard:HULSAXa6277arc47@distroboard.j3j2x.mongodb.net/distroboard?retryWrites=true&w=majority";"mongodb+srv://distroboard:HULSAXa6277arc47@distroboard.j3j2x.mongodb.net/distroboard?retryWrites=true&w=majority';

export default function connectDB() {
  mongoose.connect(MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(console.log(`Database Connection Succesful!`))
    .catch((error) => console.log(`${error}\nDatabase Connection Failed`));

}
