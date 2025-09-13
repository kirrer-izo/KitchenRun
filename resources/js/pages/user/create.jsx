import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

const create = () => {
    return (
        <>
        <AuthLayout title="Create an account" description="Enter your details below to create an account">
                    <Head title="Register" />
                    <Form
                        method="post"
                        action={route('register')}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="first_name">FirstName</Label>
                                        <Input
                                            id="first_name"
                                            type="text"
                                            required
                                            autoFocus
                                            
                                            autoComplete="first_name"
                                            name="first_name"
                                            placeholder="First name"
                                        />
                                        <InputError message={errors.first_name} className="mt-2" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="last_name">LastName</Label>
                                        <Input
                                            id="last_name"
                                            type="text"
                                            required
                                            
                                            
                                            autoComplete="last_name"
                                            name="last_name"
                                            placeholder="Last name"
                                        />
                                        <InputError message={errors.last_name} className="mt-2" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="username">UserName</Label>
                                        <Input
                                            id="username"
                                            type="text"
                                            required
                                            
                                            
                                            autoComplete="username"
                                            name="username"
                                            placeholder="User name"
                                        />
                                        <InputError message={errors.username} className="mt-2" />
                                    </div>
        
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">PhoneNumber</Label>
                                        <Input
                                            id="phone"
                                            type="text"
                                            required
                                            
                                            
                                            autoComplete="phone"
                                            name="phone"
                                            placeholder="Phone number"
                                        />
                                        <InputError message={errors.phone} className="mt-2" />
                                    </div>
                                     <div className="grid gap-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            id="address"
                                            type="text"
                                            required
                                            
                                            
                                            autoComplete="address"
                                            name="address"
                                            placeholder="Address"
                                        />
                                        <InputError message={errors.address} className="mt-2" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">Role</Label>
                                        <select
                                            id="role"
                                            name="role"
                                            required
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                        >
                                            <option value="">-- Select Role --</option>
                                            <option value="customer">Customer</option>
                                            <option value="driver">Driver</option>
                                            <option value="staff">Staff</option>
                                        </select>
                                        <InputError message={errors.role} className="mt-2" />
                                    </div>
        
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>
        
                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">Confirm password</Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            required
                                            
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirm password"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>
        
                                    <Button type="submit" className="mt-2 w-full" >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Create account
                                    </Button>
                                </div>
        
                            </>
                        )}
                    </Form>
                </AuthLayout>
        </>
    );
};

export default create;
