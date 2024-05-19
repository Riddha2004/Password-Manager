import { Manager } from "@/models/manager";
import mongoose from "mongoose"

export async function POST(req) {
  const body = await req.json(); 
  mongoose.connect("mongodb+srv://riddharc2004:nEjAGlgAqnt4ir11@cluster0.dmarndy.mongodb.net/password-manager");
  const createdInfo = await Manager.create(body)
  return Response.json(createdInfo);
}

export async function PUT(req) {
    mongoose.connect("mongodb+srv://riddharc2004:nEjAGlgAqnt4ir11@cluster0.dmarndy.mongodb.net/password-manager");
    const {_id,userName,password} = await req.json();
    console.log({_id,userName,password});
    await Manager.updateOne({_id},{password});
    return Response.json(true);
}

export async function GET() {
    mongoose.connect("mongodb+srv://riddharc2004:nEjAGlgAqnt4ir11@cluster0.dmarndy.mongodb.net/password-manager");
    return Response.json(
        await Manager.find()
    );
}
export async function DELETE(req) {
    mongoose.connect("mongodb+srv://riddharc2004:nEjAGlgAqnt4ir11@cluster0.dmarndy.mongodb.net/password-manager");
    const url =  new URL(req.url);
    const _id = url.searchParams.get('_id');
    await Manager.deleteOne({_id});
    return Response.json(true);
}