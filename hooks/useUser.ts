import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { POST } from '@/lib/api/auth/route';

interface UseUserProps {
    message: string;
    handleLogin: (email: string, password: string) => Promise<void>;
}

export function useUser(): UseUserProps {
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
    };

    return {
        message,
        handleLogin
    };
}
