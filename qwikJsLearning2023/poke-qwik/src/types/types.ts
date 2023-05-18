// FILE: types/types.ts
// _______________________________________________

import { RequestEventBase } from "@builder.io/qwik-city";
// _______________________________________________

export type RouteLoaderParams = Pick<RequestEventBase, 'params'> & {
	redirect: (statusCode: number, url: string) => unknown
};

// _______________________________________________