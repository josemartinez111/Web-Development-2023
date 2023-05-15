// FILE: WithChildren.ts
import { ReactNode } from "react";
// _______________________________________________

export type WithChildren = {
	children?: ReactNode
}

/** EXAMPLE USE CASE
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 @type BlahProps = WithChildren<{
    title?: string
}>

 IF YOU DO NOT WANT TO PASS
 PROPS BE EXPLICIT!!!
 @type BlahProps = {
    //...WHAT EVER
    children?: never
}
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// _______________________________________________