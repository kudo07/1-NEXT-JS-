import { createGuessBookEntry, getGuessBookEntries } from "@/lib/mongo/guessbook";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const {entries,error}=await getGuessBookEntries()

    if(error) throw new Error(error)
        return NextResponse.json({entries},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

// post

export async function POST(request){
    try {
        // this is how we get the  data out of  the body out of the request handlers by awaiting the json method
        // post handler get the request
        // get the {name,message } out of the body by awaiting the json method on the request
        // this is how you get the name and message from the req inside of the request handlers
        const {name,message}=await request.json()
        const {insertId,error}=await createGuessBookEntry({name,message})
        if(error) throw new Error(error)
        return NextResponse.json({insertId},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}