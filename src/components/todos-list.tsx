import { api } from "~/utils/api";

const TodosList = () => {
	const { data: items, isLoading } = api.todos.getAllCurrentUser.useQuery();

	if (!isLoading && !items) {
		return <div>loading...</div>;
	}

	return (
		<div>
			{items?.map((item) => (
				<div key={item.id} className="p-4 border-b border-white/50">
					<h4 className="text-white/90">{item.title}</h4>
					<p className="text-sm p-2">{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default TodosList;
