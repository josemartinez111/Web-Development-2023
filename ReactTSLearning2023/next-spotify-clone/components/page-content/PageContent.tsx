'use client'
// FILE: components/PageContent.tsx
// _______________________________________________
// _______________________________________________

type PageContentProps = {
	mockProp?: string;
};
// _______________________________________________

const PageContent = ({ mockProp = 'PageContent-Component' }: PageContentProps) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<>
			<div>
				<h1>@{ mockProp }</h1>
			</div>
		</>
	);
};
// _______________________________________________

export default PageContent;
// _______________________________________________