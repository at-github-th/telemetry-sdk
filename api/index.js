import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(cors()); app.use(express.json()); app.use(morgan("dev"));
app.get("/", (_q,r)=>r.json({name:"Telemetry API", ok:true}));
app.get("/api", (_q,r)=>r.json({hint:"add real endpoints here"}));
app.listen(5108, ()=>console.log("Telemetry API on http://127.0.0.1:5108"));
