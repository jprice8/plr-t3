import {
  ClientSafeProvider,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loader from "../../components/shared/Loader";

interface Props {
  providers:
    | { [s: string]: ClientSafeProvider }
    | ArrayLike<ClientSafeProvider>;
}

const Signin = ({ providers }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <div className="bg-gray-100 flex h-screen flex-col items-center space-y-8 pt-40">
      <Head>
        <title>Login - PLR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/favicon.svg"
        alt=""
        height={250}
        width={600}
        objectFit="contain"
      />
      <h1 className="text-4xl font-extrabold text-gray-900">Par Level Reset</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-full border border-transparent bg-blue-600 py-4 px-6 text-xs font-bold uppercase tracking-wider text-white transition duration-300 ease-out hover:scale-105 hover:bg-blue-700 md:text-base"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
