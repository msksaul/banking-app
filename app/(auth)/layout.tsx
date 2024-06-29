import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}
      <div className='auth-asset'>
        <div className='translate-x-40 scale-125 rounded-sm border-4 border-black-2'>
          <Image
            src='/icons/auth-image.png'
            alt='auth image'
            width={800}
            height={800}
          />
        </div>
      </div>
    </main>
  );
}