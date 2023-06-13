// FILE: ./HomePage.tsx
// _______________________________________________

import Header from "@/components/header/Header";
import ListItem from "@/components/list-item/ListItem";
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
			<Header>
				<div className="mb-2">
					<h1 className="text-white text-3xl font-semibold">
						Welcome back
					</h1>
					{ /*|====== list-item-component ======|*/ }
					<div className={styles.listItem}>
						<ListItem
							image='/images/liked.png'
							name="Liked Songs"
							href="liked"
						/>
					</div>
				</div>
			</Header>
			{ /*|====== newest-songs ======|*/ }
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-2xl font-semibold">
						Newest songs
					</h1>
				</div>
				{ /*|====== list-of-songs ======|*/ }
				<div>
					List of Songs!
				</div>
			</div>
		</div>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________