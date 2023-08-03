import Image from "next/image";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	const { data, isLoading } = api.todos.getAll.useQuery();
	console.log(data);
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1>todos app</h1>
		</main>
	);
};

export default Home;
