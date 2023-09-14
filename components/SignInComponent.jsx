"use client";
import React from 'react'
import { useSession } from "next-auth/react";
import UserInfo from './clients/Userinfo';
import SignInBtn from '@/app/SignInBtn';

const SignInComponent = () => {
    const { status, data: session } = useSession();
    return (
        <div>
            {status === "authenticated" ? <UserInfo /> : <SignInBtn />}
        </div>
    )
}

export default SignInComponent
