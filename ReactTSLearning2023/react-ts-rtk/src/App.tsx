// FILE: App.tsx
import Header from "@/components/Header.tsx";
import Main from "@/components/Main.tsx";
import { userStore } from "@/store/store.ts";
import { ReactElement } from 'react';
import { Provider } from "react-redux";
// _______________________________________________

const App = (): ReactElement => {
	
	// _______________________________________________
	return (
		<div className="max-w-7xl mx-auto px-4">
			<Provider store={ userStore }>
	      <Header />
	      <Main />
			</Provider>
		</div>
	);
};
// _______________________________________________

export default App;