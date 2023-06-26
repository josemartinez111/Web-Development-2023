// FILE: app/page.tsx
// _______________________________________________

import Product from "@/app/components/product/Product";
import { ProductDataType } from "@/app/types/product-data.shared";
import { NextPage } from "next";
import Stripe from "stripe";
// _______________________________________________

const fetchProducts = async () => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
		apiVersion: '2022-11-15',
	});
	
	// fetch the products
	const products = await stripe.products.list();
	
	const productWithPrices = await Promise.all(
		products.data.map(async (product: Stripe.Product) => {
			const prices = await stripe.prices.list({ product: product.id });
			let features = 'No features for this product';
			
			if ('features' in product.metadata) {
				features = product.metadata.features;
			}
			
			return {
				id: product.id,
				name: product.name,
				unit_amount: prices.data[ 0 ].unit_amount,
				image: product.images[ 0 ],
				currency: prices.data[ 0 ].currency,
				description: product.description,
				features,
			} as ProductDataType;
		}),
	);
	
	return productWithPrices;
};
// _______________________________________________

const HomePage: NextPage = async () => {
	const products = await fetchProducts();
	console.log(products);
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		<main className="grid grid-cols-fluid gap-4 p-4">
			{ products.map((product: ProductDataType) => (
				<Product
					key={ product.id }
					{ ...product }
				/>
			)) }
		</main>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________