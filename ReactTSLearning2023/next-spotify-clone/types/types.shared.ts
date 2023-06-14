// FILE: types/types.shared.ts
// _______________________________________________

import { PostgrestSingleResponse } from "@supabase/postgrest-js";
import { Dispatch, ReactNode, SetStateAction } from "react";
// _______________________________________________

export type WithChildren<Value = {}> = Value & {
	children?: ReactNode;
	className?: string;
};
// _______________________________________________

// Adjusted RequestType to match the actual return type from Supabase
export type RequestType<T> = {
	promise: Promise<PostgrestSingleResponse<T>>;
	setter: Dispatch<SetStateAction<T | null>>;
};
// _______________________________________________


















