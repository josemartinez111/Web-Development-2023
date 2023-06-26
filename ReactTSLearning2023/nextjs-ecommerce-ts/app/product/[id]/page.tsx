// FILE: ./product/[id]/page.tsx
// _______________________________________________

import { SearchParamsTypes } from "@/app/types/product-data.shared";
import { formatPrice } from "@/app/utils/utilities";
import Image from 'next/image';
import styles from '../product-id.module.css';
// _______________________________________________

const ProductPage = ({ searchParams }: SearchParamsTypes) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<div className={ styles.container }>
			<Image
				className="w-full h-fit object-cover rounded-lg mb-4"
				src={ searchParams.image }
				alt={ searchParams.name }
				width={ 800 }
				height={ 800 }
			/>
			
			<div className="font-medium text-gray-700">
				{ /*|====== name ======|*/ }
				<h1 className="text-2xl py-2">
					{ searchParams.name }
				</h1>
				{ /*|====== description ======|*/ }
				<p className="py-2">{ searchParams.description }</p>
				<hr className="border-t bg-gray-400 mb-4" />
				{ /*|====== metadata.features ======|*/ }
				<p> { searchParams.features }</p>
				{ /*|====== price ======|*/ }
				<div className="flex gap-2">
					<p className="font-bold text-xl text-teal-700 mt-4">
						{ searchParams.unit_amount !== null
							? formatPrice(searchParams.unit_amount)
							: 'Price is not available'
						}
					</p>
				</div>
				{ /*|====== button add-to-cart ======|*/ }
				<button className={ styles.btn }>
					Add to Cart
				</button>
			</div>
		</div>
	);
};
// _______________________________________________

export default ProductPage;
// _______________________________________________