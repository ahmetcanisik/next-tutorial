import { fetchUser } from "@/lib/data";
import { redirect } from "next/navigation";

interface LoginInfos {
    username: string; // is username or email allowed.
    password: string;
}

export async function GET() {
    redirect("/dashboard")
}

export async function POST(request: Request) {
    const url = new URL(request.url);
    const infos = await request.json();
    const user = await fetchUser(infos.username, infos.password);
    
    return Response.json({
        url: url,
        user: user
    });
}