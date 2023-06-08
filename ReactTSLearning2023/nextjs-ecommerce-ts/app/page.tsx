// FILE: app/page.tsx
// _______________________________________________

import { NextPage } from "next";
// _______________________________________________

const customStyles = {
	backgroundColor: '#2f323a',
	marginTop: '5rem',
	padding: '0',
	width: '100%',
	borderRadius: '15px',
	
	h1: {
		padding: '55px',
		fontFamily: 'Liberation Mono for Powerline',
		color: 'mediumpurple',
		fontSize: '2.2rem',
		display: 'grid',
		placeItems: 'center',
	},
};
// _______________________________________________

type HomeProps = {
	mockProp?: string;
};
// _______________________________________________

const HomePage: NextPage = ({ mockProp = 'HomePage' }: HomeProps) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		//==== <>fragments</> ====
		<>
			<div style={ customStyles }>
				<h1 style={ customStyles.h1 }>@{ mockProp }</h1>
			</div>
		</>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________