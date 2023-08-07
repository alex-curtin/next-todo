import { useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

const Sidebar = () => {
	const { user } = useUser();

	return (
		<div className="bg-slate-400 w-1/5 flex flex-col items-center p-4 h-screen">
			{user && (
				<div className="flex flex-col items-center gap-1">
					<div className="h-16 w-16">
						<Image
							src={user.imageUrl}
							alt="avatar"
							width={64}
							height={64}
							className="rounded-full"
						/>
					</div>
					<p>{user.username}</p>

					<SignOutButton>
						<button
							type="button"
							className="rounded-lg bg-slate-300 py-1 px-2 shadow-sm"
						>
							Sign Out
						</button>
					</SignOutButton>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
