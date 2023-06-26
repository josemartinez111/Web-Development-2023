'use client';
// FILE: components/product/Product.tsx
// _______________________________________________

import { ProductDataType } from "@/app/types/product-data.shared";
import { formatPrice } from "@/app/utils/utilities";
import Image from 'next/image';
import Link from "next/link";
// _______________________________________________


const Product = ({
	name,
	image,
	unit_amount,
	id,
	description,
	features,
}: ProductDataType) => {
	const query = {
		name,
		image,
		unit_amount,
		id,
		description,
		features,
	};
	
	// _________________ [functions] ___________________
	
	// black-preset-collection
	// _________________________________________________
	return (
		<Link
			href={ { pathname: `/product/${ id }`, query } }>
			<div className="text-gray-700">
			<Image
				className="w-full h-56 object-cover rounded-lg"
				src={ image }
				alt={ name }
				width={ 800 }
				height={ 800 }
			/>
				<div className="font-medium py-2">
					<h1>{ name }</h1>
					<h2 className="text-sm text-teal-700">
						{ unit_amount !== null
							? formatPrice(unit_amount)
							: 'Price is not available'
						}
					</h2>
				</div>
			</div>
		</Link>
	);
};
// _______________________________________________

export default Product;
// _______________________________________________