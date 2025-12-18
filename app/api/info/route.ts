export async function GET() {
    return Response.json({ 
        appName: "analyst-ai",
        version: "0.1.0",
       environment: "local",
     });
}