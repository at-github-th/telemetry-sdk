import express from "express"; import cors from "cors"; import morgan from "morgan";
const TOKEN=process.env.API_TOKEN||"dev-12345"; const app=express(); app.use(cors()); app.use(express.json()); app.use(morgan("dev"));
const auth=(req,res,next)=> req.header("x-api-key")===TOKEN ? next() : res.status(401).json({error:"unauthorized"});
let events=[];
app.get("/",(_q,r)=>r.json({name:"Telemetry API",ok:true}));
app.post("/api/events/ingest",auth,(q,r)=>{ const e={id:Date.now(),...q.body,ts:Date.now()}; events.push(e); r.json({ok:true,id:e.id}); });
app.get("/api/events/recent",auth,(_q,r)=>r.json(events.slice(-50).reverse()));
app.listen(Number(process.env.API_PORT||5108),()=>console.log("Telemetry http://127.0.0.1:"+ (process.env.API_PORT||5108)));
