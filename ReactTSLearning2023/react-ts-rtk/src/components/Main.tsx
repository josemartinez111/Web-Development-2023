// FILE: Main.tsx
// _______________________________________________

import Content from "@/components/Content.tsx";
import { RootState } from "@/store/store.ts";
import { ReactElement } from 'react';
import { useSelector } from "react-redux";
// _______________________________________________

const Main = (): ReactElement => {
	const user = useSelector((state: RootState) => (
		state.user.currentUser
	));
	// _______________________________________________
	return (
		<main className="py-8">
      <h1 className="text-3xl text-center font-bold underline">Welcome</h1>
      <p className="mt-8 text-xl text-center">
	      {
		      user
			      ? `Hello ${ user.name }!`
			      : 'Please sign in'
	      }
			</p>
      <Content />
    </main>
	);
};
// _______________________________________________

export default Main;