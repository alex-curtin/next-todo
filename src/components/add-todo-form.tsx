import { FormEvent, useState } from "react";

import { api } from "~/utils/api";

const AddTodoForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDesctiption] = useState("");
	const ctx = api.useContext();
	const { mutate } = api.todos.create.useMutation({
		onSuccess: () => {
			ctx.todos.getAllCurrentUser.invalidate();
			setTitle("");
			setDesctiption("");
		},
		onError: (e) => {
			console.error(e.message);
		},
	});

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title) {
			await mutate({
				title,
				description,
			});
		}
	};

	return (
		<div className="w-full border-b border-white/50 flex justify-center">
			<form onSubmit={onSubmit} className="flex flex-col gap-2 w-96 p-4">
				<div className="flex flex-col w-full gap-1">
					<label htmlFor="title" className="text-sm text-white/90">
						Title
					</label>
					<input
						type="text"
						id="title"
						onChange={(e) => setTitle(e.target.value)}
						className="rounded-sm bg-white/30 text-white/90"
						value={title}
					/>
				</div>
				<div className="flex flex-col w-full gap-1">
					<label htmlFor="description" className="text-sm text-white/90">
						Description
					</label>
					<textarea
						id="description"
						rows="2"
						onChange={(e) => setDesctiption(e.target.value)}
						className="rounded-sm bg-white/30 text-white/90"
						value={description}
					/>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="bg-white/90 text-sm text-black/90 py-2 px-2 rounded-lg hover:bg-white"
					>
						Add To Do Item
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTodoForm;
