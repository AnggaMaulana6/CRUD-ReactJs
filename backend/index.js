
import express  from "express";
import mongoose  from "mongoose";
import body  from "body-parser";
import cors  from "cors";
import UserRoute  from "./routes/UserRoute.js";

const app = express();


mongoose.connect('mongodb+srv://Angga:ame123@cluster0.qcaudyi.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected... '));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server up and running... '));
