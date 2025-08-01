import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/molecules/Form';
import { Footer, Sidebar } from '@/components/organisms';
import { Header } from '@/components/organisms/Header';
import { POST } from '@/lib/api/auth/route';
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();


    const handleLogin = async (email: string, password: string) => {

        try {
            const response = await POST(email, password);

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                router.push('/');
            } else {
                setMessage(data.error || 'Login failed');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    }

    return (
        <div className="flex h-full justify-center ">
            <Sidebar className="hidden lg:flex lg:w-3/4 bg-gray-50 ">
                <img src="/nextjs.svg" alt="Logo" className="mx-auto h-12 w-auto" />
            </Sidebar>
            <div className="w-full max-w-md">
                <Header className="bg-white pt-0 p-8  flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 ">UI Unicorn</h2>
                    <p className="mt-2 text-sm text-gray-600 pt-10 font-bold">
                        Nice to see you again
                    </p>
                </Header>

                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm onSubmit={handleLogin} message={message} />
                </div>
                <Footer />
            </div>

        </div>
    );
}