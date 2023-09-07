
"use client";

import Image from "next/image";
import SignUpBtn from "./SignUpBtn";

import { useSession } from "next-auth/react";
export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
          alt="user image"
        />
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignUpBtn />;
  }
}

// componentDidMount() {
//   console. log("CLIENT SIDE");
//   const { token, refreshToken } = this.props.query;
//   localStorage.setItem('token', token);
//   localStorage.setItem('refreshToken', refreshToken);
// };