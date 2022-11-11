import { FC, useState } from "react";
import { useRouter } from "next/router";
/* import { useSWRConfig } from "swr"; */
import { auth } from "../lib/mutations";
import Logo from "./Logo";
import Spinner from "./Spinner";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-24 space-y-6">
        <div className="flex items-center justify-center border-b-2 py-8">
          <Logo text="black" bg="black" />
        </div>
        <h2 className="text-center font-bold">
          {mode === "signup"
            ? "Sign up with your email address"
            : "To continue, sign in in with your email"}
        </h2>
      </div>
      <div className="flex h-[calc(100vh-96px)] flex-col items-center justify-center gap-10">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <label htmlFor="email-address" className="text-sm font-bold">
                Email address
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded border border-black px-3 py-4 font-medium text-black placeholder:text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-black"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>
              <label htmlFor="password" className="text-sm font-bold">
                Password
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full rounded border border-black px-3 py-4 font-extrabold text-black placeholder:font-medium placeholder:text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-black"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-green-500 py-4 text-lg font-bold uppercase tracking-wide text-black hover:bg-green-400 hover:text-xl focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-4"
              >
                <span className="flex items-center justify-center">
                  {mode}
                  {isLoading ? <Spinner /> : false}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
