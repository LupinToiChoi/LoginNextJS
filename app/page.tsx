import Image from 'next/image'

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </>
  );
}