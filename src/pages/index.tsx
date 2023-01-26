import { type NextPage } from "next";
import { useSession } from "next-auth/react";

import { api } from "../utils/api";
import { useRouter } from "next/router";
import Dashboard from "../components/dashboard";
import Container from "../components/shared/Container";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin")
    }
  })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Dashboard />
    </Container>
  );
};

export default Home;
