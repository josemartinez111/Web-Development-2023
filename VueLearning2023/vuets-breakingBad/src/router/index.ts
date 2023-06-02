// FILE: router/index.ts
// _______________________________________________

import AboutPage from "@/shared/pages/AboutPage.vue";
import HomePage from "@/shared/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
// _______________________________________________

const routes = [
	//! Public
	{ path: '/', name: 'home', component: HomePage },
	{ path: '/about', name: 'about', component: AboutPage },
	//! Characters
	{
		path: '/characters',
		name: 'characters',
		//? lazy-loaded import
		component: () => import("@/characters/layout/CharacterLayout.vue"),
	},
	
	//! Default: if known of the routes above work, default to `home`
	{ path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) },
];
// _______________________________________________

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});
// _______________________________________________

export default router;
// _______________________________________________