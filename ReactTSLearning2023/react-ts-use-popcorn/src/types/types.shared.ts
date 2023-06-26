// FILE: types/types.shared.ts
// _______________________________________________

import { ChangeEvent, ReactNode } from 'react';
// _______________________________________________

export type WithChildren<Value = {}> = Value & {
	children?: ReactNode;
};
// _______________________________________________

export type InputEvent = ChangeEvent<HTMLInputElement>;
// _______________________________________________
