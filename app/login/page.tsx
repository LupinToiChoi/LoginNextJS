'use client'

import { LoginForm } from '@/components/molecules/loginForm';
import { Footer } from '@/components/organisms/Footer';
import { Sidebar } from '@/components/organisms/Sidebar';
import { Header } from '@/components/organisms/Header';

export default function LoginPage() {

    return (
        <div className="flex min-h-screen">
            <Sidebar className="hidden lg:flex lg:w-2/3 bg-gray-50">
                <img src="/nextjs.svg" alt="Logo" className="mx-auto h-12 w-auto" />
            </Sidebar>
            <div className="flex w-full lg:w-1/3 flex-col justify-between">
                <div className=" p-8">
                    <Header className="mb-8">
                        <p className="mt-2 text-sm text-gray-600 mt-10 font-bold">
                            Nice to see you again
                        </p>
                    </Header>

                    <div className="w-full max-w-sm mx-auto">
                        <LoginForm />
                    </div>
                </div>
                <Footer className="mt-auto" />

            </div>
        </div>
    );
}
