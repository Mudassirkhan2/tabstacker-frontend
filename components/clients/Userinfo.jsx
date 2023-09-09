
"use client";

import Image from "next/image";
import SignUpBtn from "./SignUpBtn";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export default function UserInfo() {
  const { status, data: session } = useSession();
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    if (session?.user?.email) {
      setEmail(session?.user?.email);
      console.log("email", email)
      if (email) {
        console.log(email)
        // Define the endpoint URL (replace with your actual server URL)
        const endpoint = `https://tabstacker-backend.onrender.com/user/googletoken/${email}`;
        // Make a GET request to the server
        fetch(endpoint)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Handle the data from the response
            console.log(data)

            setToken(data.token);
            localStorage.setItem('token', data.token);
            setError(null);
          })
          .catch((error) => {
            // Handle errors
            setError(error.message);
            setToken('');
          });

      }
    }
    else {
      console.log("no email")
    }
  }, [email, session?.user?.email]);
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

