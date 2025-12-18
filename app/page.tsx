export default async function Home() {
  const res = await fetch("http://localhost:3000/api/health");
  
  if (!res.ok) {
    return <div>Failed to fetch health</div>;
  }
  
  const data = await res.json();
  return (
  <main className="p-8">
    <h1>Health: {data.status}</h1>
    <p>Service: {data.service}</p>
    <p>Timestamp: {data.timestamp}</p>
 
  
  <p>Доп техт без энпоинта</p>
  </main>
  );
}

