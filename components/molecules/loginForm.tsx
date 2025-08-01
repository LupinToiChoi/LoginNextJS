import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { Message } from '@/components/atoms/Message'
import { Label } from '@/components/atoms/Label';
import Link from 'next/link';
import { ComplexInput } from '../atoms/ComplexInput';
import { ComplexButton } from '../atoms/ComplexButton';
import { useUser } from '@/hooks/useUser';

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { message, handleLogin } = useUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await handleLogin(email, password)
    }

    return (
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            {message && <Message message={message} />}

            <form onSubmit={handleSubmit} className="space-y-6">
                <ComplexInput
                    labelProps={{
                        text: 'Email',
                        className: 'text-left text-2xl font-bold tracking-tight text-gray-900'
                    }}
                    inputProps={{
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        className: 'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
                        required: true,
                        backgroundColor: 'lightgray'
                    }}
                >

                </ComplexInput>
                <ComplexInput
                    labelProps={{
                        text: 'Password',
                        className: 'text-left text-2xl font-bold tracking-tight text-gray-900'
                    }}
                    inputProps={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        className: 'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
                        required: true,
                        backgroundColor: 'lightgray'
                    }}
                >

                </ComplexInput>
                < div className="flex items-center  justify-between">
                    <div className='flex  items-center'>
                        <label className="relative  cursor-pointer">
                            <input type="checkbox" value="" className="peer sr-only" />
                            <div className="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                        </label>
                        <Label text="Remember me" htmlFor="remember" className="flex pl-2 items-center">
                        </Label>
                    </div>

                    <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </Link>
                </div>
                <Button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </Button>

                <ComplexButton
                    buttonProps={{
                        type: 'button',
                        className: 'flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                        children: (
                            <>
                                <span>Or Sign in with google</span>
                            </>
                        )
                    }}
                    labelProps={{
                        text: "Don't have an account?",
                        className: 'text-sm text-gray-500 justify-between flex',
                        children: (
                            <>
                                <Link href="/sign-up" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Sign up
                                </Link>
                            </>
                        )
                    }}
                >
                </ComplexButton>
            </form>
        </div >
    )
}