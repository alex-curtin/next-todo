import { api } from "~/utils/api";
import CheckIcon from "./ui/icons/check-icon";
import TrashIcon from "./ui/icons/trash-icon";

const TodosList = () => {
	const ctx = api.useContext();
	const { data: items, isLoading } = api.todos.getAllCurrentUser.useQuery();
	const { mutate: toggleComplete, isLoading: isToggling } =
		api.todos.toggleComplete.useMutation({
			onSuccess: () => {
				ctx.todos.getAllCurrentUser.invalidate();
			},
			onError: (e) => {
				console.error(e.message);
			},
		});
	const { mutate: deleteTodo } = api.todos.delete.useMutation({
		onSuccess: () => {
			ctx.todos.getAllCurrentUser.invalidate();
		},
		onError: (e) => {
			console.error(e.message);
		},
	});

	if (!isLoading && !items) {
		return <div>loading...</div>;
	}

	const onClickCheck = async (id: number, completed: boolean) => {
		await toggleComplete({
			id,
			completed,
		});
	};

	const onClickTrash = async (id: number) => {
		await deleteTodo({ id });
	};

	return (
		<div>
			{items?.map((item) => (
				<div
					key={item.id}
					className={`p-4 border-b border-white/50 flex items-center gap-2 ${
						item.completed && "bg-white/20"
					}`}
				>
					<button
						type="button"
						className={`${
							item.completed
								? "text-green-500 hover:text-green-400"
								: "text-white/50 hover:text-white/60"
						}`}
						onClick={() => onClickCheck(item.id, !item.completed)}
						disabled={isToggling}
					>
						<CheckIcon />
					</button>
					<div>
						<h4>{item.title}</h4>
					</div>
					<button
						type="button"
						className="text-red-500 hover:text-red-400 ml-auto"
						onClick={() => onClickTrash(item.id)}
					>
						<TrashIcon />
					</button>
				</div>
			))}
		</div>
	);
};

export default TodosList;
