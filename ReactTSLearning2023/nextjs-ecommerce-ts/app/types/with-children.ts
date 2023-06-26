// FILE: types/with-children.ts
// _______________________________________________

import { ReactNode } from "react";
// _______________________________________________

//! exporting this custom `WithChildren` type
//! to be used or placed in its own file later
export type WithChildren<Value = {}> = Value & {
	children?: ReactNode;
};
// _______________________________________________