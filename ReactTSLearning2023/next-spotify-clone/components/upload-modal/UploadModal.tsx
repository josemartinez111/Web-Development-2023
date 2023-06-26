'use client';
// FILE: components/UploadModal.tsx
// _______________________________________________

import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Modal from "@/components/shared/modal/Modal";
import { useUser } from "@/context/providers/MyUserProvider";
import { useUploadModalStore } from "@/hooks/useUploadModalStore";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import uniqid from 'uniqid';
// _______________________________________________

type MyFormValuesType = FieldValues & {
	author: string;
	title: string;
	song: File | null; // Assuming song and image are File types. Adjust as needed.
	image: File | null;
}
// _______________________________________________

const UploadModal = () => {
	const [isLoading, setIsLoading] = useState(false);
	const uploadModal = useUploadModalStore();
	const { user } = useUser();
	
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	
	const { register, handleSubmit, reset } = useForm<MyFormValuesType>({
		defaultValues: {
			author: '',
			title: '',
			song: null,
			image: null,
		},
	});
	
	const isRequired = { required: true };
	
	// _________________ [functions] ___________________
	
	const closeModal = (open: boolean) => {
		if (!open) {
			// Reset the form
			reset();
			uploadModal.onClose();
		}
	};
	
	const onSubmitForm: SubmitHandler<FieldValues> = async (values) => {
		// Upload to supabase
		try {
			setIsLoading(true);
			
			// extracting our image
			const imageFile = values.image?.[ 0 ];
			const songFile = values.song?.[ 0 ];
			
			if (!imageFile || !songFile || !user) {
				toast.error("Missing fields...");
				return;
			}
			
			// Creating a unique ID to store things in the supabase bucket
			const uniqueID = uniqid();
			// Upload song
			const { data: songData, error: songError } = await supabaseClient
				.storage
				.from('songs')
				.upload(`song-${ values.title }-${ uniqueID }`, songFile, {
					cacheControl: '3600',
					upsert: false,
				});
			
			if (songError) {
				setIsLoading(false);
				return toast.error("Failed song upload...");
			}
			
			// Upload image
			const { data: imageData, error: imageError } = await supabaseClient
				.storage
				.from('images')
				.upload(`image-${ values.title }-${ uniqueID }`, imageFile, {
					cacheControl: '3600',
					upsert: false,
				});
			
			if (imageError) {
				setIsLoading(false);
				return toast.error("Failed image upload...");
			}
			
			const insertSong = {
				user_id: user.id,
				title: values.title,
				author: values.author,
				image_path: imageData?.path,
				song_path: songData?.path,
			};
			
			const { error: supabaseError } = await supabaseClient
				.from('songs')
				.insert(insertSong);
			
			if (supabaseError) {
				setIsLoading(false);
				return toast.error(supabaseError.message);
			}
			
			router.refresh();
			setIsLoading(false);
			toast.success('Song created!..');
			
			// Everything above is successful, reset & close the form
			reset();
			uploadModal.onClose();
		} catch (error: unknown) {
			toast.error("Something went wrong...");
		} finally {
			setIsLoading(false);
		}
	};
	// _________________________________________________
	return (
		<Modal
			title="Add song"
			description="Upload an mp3 file"
			isOpen={ uploadModal.isOpen }
			onChange={ closeModal }
		>
			{/* form with custom components ================================ */ }
			<form onSubmit={ handleSubmit(onSubmitForm) }
			      className="flex flex-col gap-y-4">
				{ /*|====== custom-input component (title) ======|*/ }
				<Input
					id="title"
					disabled={ isLoading }
					{ ...register('title', isRequired) }
					placeholder="Song title"
				/>
				{ /*|====== custom-input component (author) ======|*/ }
				<Input
					id="author"
					disabled={ isLoading }
					{ ...register('author', isRequired) }
					placeholder="Song author"
				/>
				
				<div>
					<div className="pb-1">
						Select a song file
					</div>
					{ /*|====== custom-input component (file-upload) ======|*/ }
					<Input
						id="song"
						type="file"
						disabled={ isLoading }
						accept=".mp3"
						{ ...register('song', isRequired) }
					/>
				</div>
				
				<div>
					<div className="pb-1">
						Select an image
					</div>
					{ /*|====== custom-input component (image-upload) ======|*/ }
					<Input
						id="image"
						type="file"
						disabled={ isLoading }
						accept="image/*"
						{ ...register('image', isRequired) }
					/>
				</div>
				
				{ /*|====== custom-button component ======|*/ }
				<Button disabled={ isLoading } type="submit">
					Create
				</Button>
			</form>
		</Modal>
	);
};
// _______________________________________________

export default UploadModal;
// _______________________________________________