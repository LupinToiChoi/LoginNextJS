interface MessageProps {
    message: string;
}

export function Message({ message }: MessageProps) {
    const isSuccess = message.includes('successful');

    return message ? (
        <div className={`mb-4 p-3 rounded ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
            {message}
        </div>
    ) : null;
}
