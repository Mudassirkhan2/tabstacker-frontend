import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const EntryPage = () => {
    const { status, data: session } = useSession();

    return session?.user?.image ? (
        <div className=" p-4 rounded-md flex  gap-3 justify-center items-center ">
            <div>
                <span className="font-bold">{session?.user?.name}</span>
            </div>
            <Image
                className="rounded-full"
                src={session.user.image}
                width={60}
                height={60}
                alt="user image"
            />
        </div>
    ) : (
        <div className='flex items-center justify-center'>
            <Link href="/sign-in">
                <button className="bg-lime-700 text-orange-300 text-3xl px-6 py-2 rounded-md text-center">
                    Get Started
                </button>
            </Link>
        </div>
    );
};

export default EntryPage;