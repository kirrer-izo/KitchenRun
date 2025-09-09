import { Head } from "@inertiajs/react";
import Layout from "../../layouts/app-layout";
import React from "react";

const dashboard = () => {

    return (
        <>
            <Head title="Customer Dashboard"/>
            <div className="max-w-5xl mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6">👤 Customer Dashboard</h1>

                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                    <p className="text-gray-700">Mage your orders</p>

                    <ul className="list-disc list-inside text-gray-600">
                        <li>Browse menu & place orders</li>
                        <li>Track your current orders</li>
                        <li>See past orders & reviews</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

dashboard.layout = page => <Layout children={page} title="Customer Dahsboard"/>
// Dashboard.layout = page => <Layout children={page} title="Customer Dahsboard"/>
export default dashboard;