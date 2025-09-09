import { Head } from "@inertiajs/react";
import { Layout } from "lucide-react";
import React from "react";

const Dashboard = () => {
    
    return (
        <>
            <Head title="Driver Dashboard"/>
            <div className="max-w-5xl mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6">Driver Dashboard</h1>

                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                    <p className="text-gray-700">Track and manage your deliveries</p>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>See assigned deliveries</li>
                        <li>Update status (Picked Up → On the Way → Delivered)</li>
                        <li>View delivery history & earnings</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Dashboard.layout = page => <Layout children={page} title="Driver Dashboard" />
export default Dashboard;