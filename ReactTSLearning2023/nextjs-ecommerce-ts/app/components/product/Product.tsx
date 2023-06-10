'use client';
// FILE: components/product/Product.tsx
// _______________________________________________

import { ProductDataType } from "@/app/types/product-data.shared";
import { formatPrice } from "@/app/utils/utilities";
import Image from 'next/image';
// _______________________________________________


const Product = ({ name, image, price }: ProductDataType) => {
	
	// _________________ [functions] ___________________
	
	// black-preset-collection
	// _________________________________________________
	return (
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
					{ price !== null ? formatPrice(price) : 'Price is not available' }
				</h2>
			</div>
		</div>
	);
};
// _______________________________________________

export default Product;
// _______________________________________________