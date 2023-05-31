// FILE: ./vue-shim.d.ts
// _______________________________________________

declare module "*.vue" {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
// _______________________________________________