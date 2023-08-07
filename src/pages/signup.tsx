import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignupPage = () => {
	return (
		<div>
			<SignUp />
			<div>
				or <Link href="/signin">sign in</Link>
			</div>
		</div>
	);
};

export default SignupPage;
