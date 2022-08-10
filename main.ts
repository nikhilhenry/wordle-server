import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import db from "./db.json" assert {type:"json"};

const getSolutions = () => {
    return JSON.stringify(db.solutions);
}

function handler(_req: Request):Response {
    return new Response(getSolutions(),{
        status:200,
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        }
    })
}

serve(handler)
