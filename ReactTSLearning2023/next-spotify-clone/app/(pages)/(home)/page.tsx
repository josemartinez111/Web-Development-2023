// FILE: ./HomePage.tsx
// _______________________________________________

import { fetchSongs } from "@/actions/fetchSongs";
import Header from "@/components/header/Header";
import ListItem from "@/components/list-item/ListItem";
import PageContent from "@/components/page-content/PageContent";
import { NextPage } from "next";
import styles from './home.module.css';
// _______________________________________________

// this will prevent the page from being cached
// & the data on it will always be up-to-date
export const revalidate = 0;
// _______________________________________________

const HomePage: NextPage = async () => {
	const songs = await fetchSongs();
	
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
				<PageContent />
			</div>
		</div>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________