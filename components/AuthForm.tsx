import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { isLoading, setIsLoading } = useState("");
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="flex h-24 items-center justify-center">Hello</div>
      <div className="flex h-[calc(100vh-96px)] items-center justify-center">
        Form
      </div>
    </div>
  );
};

export default AuthForm;
