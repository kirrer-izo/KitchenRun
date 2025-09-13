import { Head, Link } from "@inertiajs/react";
import React from "react";
import Layout from "../../layouts/app-layout";

const index = () => {
    return (
        <>
        <Head title="Menu Index"/>
        <div className="max-w-6xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Menu</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-2xl overflow-hidden border">
                    <img className="w-full h-40 object-cover"/>

                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Menu Title</h2>
                        <p className="text-gray-600 text-sm mb-3">Menu Description</p>
                        <p className="text-sm">
                            <span className="font-medium">Category:</span>
                        </p>
                            <p className="text-sm">
                                <span className="font-medium">Availability:</span>{" "}
                               
                                <span className="text-green-600">Available</span>
                          
                                {/* <span className="text-red-500">Not Available</span> */}
               
                            </p>
                            <p className="text-lg font-bold text-indigo-600 mt-2">Price</p>
                            <div className="mt-4">
                                <Link href="#" className="text-indigo-500 hover:underline text-sm">View Details</Link>
                            </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

index.layout = page => <Layout children={page} title="Menu Index"/>
export default index;