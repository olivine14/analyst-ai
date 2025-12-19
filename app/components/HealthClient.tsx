"use client";

import { useEffect, useState } from "react";

type HealthData = {
    status: string;
    service: string;
    timestamp: string;
};

export default function HealthClient() {
    const [data, setData] = useState<HealthData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/health")
        .then(res => res.json())
        .then((json => {
            setData(json);
            setLoading(false);
        }))
        .catch(error => {
            console.error("Error fetching health:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading health...</p>;
    }
    if (!data) {
        return <p>Error: No data</p>;
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Health</h1>
            <p className="text-gray-600">Status: {data.status}</p>
            <p className="text-gray-600">Service: {data.service}</p>
            <p className="text-gray-600">Timestamp: {data.timestamp}</p>
        </div>
    );
}
