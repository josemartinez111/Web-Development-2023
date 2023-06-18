'use client';
// FILE: components/list-item/ListItem.tsx
// _______________________________________________

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import styles from './list-item.module.css';
// _______________________________________________


type ListItemProps = {
	image: string
	name: string
	href: string
};
// _______________________________________________

const ListItem = ({ image, name, href }: ListItemProps) => {
	const router = useRouter();
	
	// _________________ [functions] ___________________
	
	const handleRoute = () => {
		// Add authentication, before push
		router.push(href);
	};
	// _________________________________________________
	return (
		<button
			onClick={ handleRoute }
			className="relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-1
        bg-neutral-100/10
        cursor-pointer
        hover:bg-neutral-100/20
        transition
        pr-4
        min-w-max
        w-full">
			{ /*|====== like-image ======|*/ }
			<div className={ styles.likeImageWrapper }>
				<Image
					className="object-cover"
					src={ image }
					alt="Image"
					width="80"
					height="80"
				/>
			</div>
			{ /*|====== name ======|*/ }
			<p className="font-medium truncate py-5 ml-2">
				{ name }
			</p>
			{ /*|====== play-icon ======|*/ }
			<div
				className="absolute
          transition
          opacity-0
          rounded-full
          flex
          items-center
          justify-center
          bg-green-500
          p-4
          drop-shadow-md
          right-5
          group-hover:opacity-100
          hover:scale-110">
				<FaPlay className="text-black" />
			</div>
		</button>
	);
};
// _______________________________________________

export default ListItem;
// _______________________________________________












