import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SigninPage = () => {
	return (
		<div>
			<SignIn />
			<div>
				or <Link href="/signup">sign up</Link>
			</div>
		</div>
	);
};

export default SigninPage;
