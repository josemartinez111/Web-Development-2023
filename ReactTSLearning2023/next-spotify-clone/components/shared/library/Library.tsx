'use client';
// FILE: components/shared/Library.tsx
// _______________________________________________

import { useUser } from "@/context/providers/MyUserProvider";
import { useAuthModalStore } from "@/hooks/useAuthModalStore";
import { useUploadModalStore } from "@/hooks/useUploadModalStore";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import styles from 'components/shared/library/library.module.css';
// _______________________________________________

// type LibraryProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const Library = () => {
	const authModal = useAuthModalStore();
	const uploadModal = useUploadModalStore();
	const { user } = useUser();
	
	// _________________ [functions] ___________________
	
	const handleUpload = () => {
		// will re-route to the login screen
		// if the user is not login
		if (!user) return authModal.onOpen();
		// TODO: check for subscription
		
		// if the user is logged in
		return uploadModal.onOpen();
	};
	// _________________________________________________
	return (
		<div className="flex flex-col">
			<div className={ styles.wrapper }>
				<div className="inline-flex items-center gap-x-2">
					{ /*|====== playlist-icon ======|*/ }
					<TbPlaylist className="text-neutral-400" size={ 26 } />
					{ /*|====== playlist-header ======|*/ }
					<p className="text-neutral-400 font-medium">
						Your Library
					</p>
				</div>
				{ /*|====== plus-icon ======|*/ }
				<AiOutlinePlus
					className={ styles.plus }
					onClick={ handleUpload }
					size={ 20 }
				/>
			</div>
			{ /*|====== song-list ======|*/ }
			<div className="flex flex-col gap-y-2 mt-4 px-3">
				List of Songs!
			</div>
		</div>
	);
};
// _______________________________________________

export default Library;
// _______________________________________________
















