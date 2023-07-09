// FILE: types/utilities.types.ts
// _______________________________________________

import { ReactNode } from "react";
// _______________________________________________

export type WithChildren<Value = {}> = Value & {
  children?: ReactNode;
};
// _______________________________________________



