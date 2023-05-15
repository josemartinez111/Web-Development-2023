// FILE: user_payload_action.ts
// _______________________________________________

import { UserType } from "@/types/user.ts";
import { PayloadAction } from "@reduxjs/toolkit";
// _______________________________________________

export type UserPayloadAction = PayloadAction<UserType>;
export type PermissionPayloadAction = PayloadAction<Array<string>>;
// _______________________________________________