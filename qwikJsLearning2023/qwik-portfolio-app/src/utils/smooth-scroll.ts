// FILE: utils/smooth-scroll.ts
// _______________________________________________

export const scrollToElement = (elementId: string) => {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};
// _______________________________________________