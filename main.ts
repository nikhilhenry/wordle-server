import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import db from "./db.json" assert {type:"json"};

const getSolutions = () => {
    return db.solutions;
}

function handler(_req: Request):Response {
    return new Response(getSolutions())
}

serve(handler)
