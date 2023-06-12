// FILE: ./HomePage.tsx
// _______________________________________________

import { NextPage } from "next";
import styles from './home.module.css';
// _______________________________________________

// type HomeProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const HomePage: NextPage = () => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<div className={ styles.homeContainer }>
			Main Content
		</div>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________