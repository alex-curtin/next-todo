import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

import { api } from "~/utils/api";
import Sidebar from "~/components/sidebar";
import AddTodoForm from "~/components/add-todo-form";
import TodosList from "~/components/todos-list";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	const router = useRouter();
	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) return null;

	if (!isSignedIn && isLoaded) {
		router.push("/signup");
	}

	const { data, isLoading } = api.todos.getAllCurrentUser.useQuery();

	return (
		<div className="flex bg-black text-white">
			<Sidebar />
			<main className={`${inter.className} w-1/2 border-r border-white/50`}>
				<AddTodoForm />
				<TodosList />
			</main>
		</div>
	);
};

export default Home;
