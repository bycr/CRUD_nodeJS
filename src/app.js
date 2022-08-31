import express from "express";
import cors from 'cors';
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentation from "./docs/documentations.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.set("port", process.env.PORT || 5000);

app.use(express.json());

app.use("/documentations", swaggerDoc.serve);

app.use("/documentations", swaggerDoc.setup(swaggerDocumentation));


//routes
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404 Not Found");
});

//iniciar server
app.listen(app.get("port"), () => {
    console.log("listening on port " + app.get("port"));
});

//conexión db
db.connect().then(() => {
    console.log("db connected");
}).catch(() => {
    console.log("error connecting");
});