import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	const router = useRouter();
	const { data, isLoading } = api.todos.getAll.useQuery();
	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) return null;

	if (!isSignedIn && isLoaded) {
		router.push("/signup");
	}

	return (
		<main className={` ${inter.className}`}>
			<h1>todos app</h1>
		</main>
	);
};

export default Home;
