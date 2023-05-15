// FILE: Content.tsx
import { RootState } from "@/store/store.ts";
import { Fragment, ReactElement } from 'react';
import { useSelector } from "react-redux";
// _______________________________________________

const Content = (): ReactElement => {
	const permissions = useSelector((state: RootState) => (
		state.user.permissions
	));
	
	// If permissions are not defined or
	// not an array, return an empty fragment
	if (permissions === undefined) return <Fragment />;
	// _______________________________________________
	// The includes() method determines whether an array
	// includes a certain value among its entries,
	// returning true or false as appropriate.
	return permissions.includes('admin')
		? (
			<p className="mt-4 text-l text-center">
				Some important stuff that only an admin can do
			</p>
		) : (
			<p className="mt-4 text-l text-center">
				Insufficient permissions
			</p>
		);
};
// _______________________________________________

export default Content;