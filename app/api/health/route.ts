export async function GET() {
    return Response.json({ 
        status: "ok",
        service: "analyst-ai",
        timestamp: new Date().toISOString(),
     });
}