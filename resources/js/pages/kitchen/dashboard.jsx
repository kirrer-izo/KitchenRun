import { Head } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {

    return (
        <>
            <Head title="Kitchen Dashboard"/>
            <div className="max-w-5xl mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6">Kitchen Dashboard</h1>

                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                    <p className="text-gray-700">Here you can see all pending and ongoing orders</p>

                    <ul className="list-disc list0inside text-gray-600">
                        <li>View new incoming orders</li>
                        <li>Update order status (Cooking → Ready)</li>
                        <li>Mark unavailable items</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

Dashboard.layout = page => <Layout children={page} title="Kitchen Dashboard" />
export default Dashboard;