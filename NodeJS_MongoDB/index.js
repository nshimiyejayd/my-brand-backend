import express  from "express";
import dotenv from "dotenv";
import connectDB from "./src/database/connectDB.js"
import routes from "./src/routes/routes.js";
import bodyParser from 'body-parser';
dotenv.config({ config: process.env.NODE_ENV === 'dev' });

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({extended: true}));

app.use('/image',express.static('upload/images'));


app.use('/api/v1', routes);

// app.use('/api/v1/admin', secureRoute);

// app.use('/api/v1/message', messageRoute);

// app.get("/", (req, res) => {
//     return res.status(200).json({"user": "Jay"});
//   });


export default app;


