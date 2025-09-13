import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6 bg-white dark:bg-gray-900">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold mb-4">👥 Manage Users</h2>
                            <Link href="/user/create" className="px-6 py-2 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600">➕ Add User</Link>
                        </div>
                            {/* <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                        <th className="px-4 py-2 border-b">Name</th>
                                        <th className="px-4 py-2 border-b">Email</th>
                                        <th className="px-4 py-2 border-b">Role</th>
                                        <th className="px-4 py-2 border-b text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Customer" },
                                        { id: 2, name: "David Kim", email: "david@example.com", role: "Staff" },
                                        { id: 3, name: "Sarah Lee", email: "sarah@example.com", role: "Manager" },
                                    ].map((user) => (
                                        <tr key={user.id} className="text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
                                            <td className="px-4 py-2 border-b">{user.name}</td>
                                            <td className="px-4 py-2 border-b">{user.email}</td>
                                            <td className="px-4 py-2 border-b">{user.role}</td>
                                            <td className="px-4 py-2 border-b text-right space-x-2">
                                                <button className="px-3 py-1 text-xs rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> */}
                        </div>

                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
