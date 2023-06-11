// FILE: types/product-data.shared.ts
// _______________________________________________

export type ProductDataType = {
	id: string;
	name: string;
	unit_amount: number | null;
	image: string;
	description: string | null;
	features: string;
	currency?: string;
	quantity?: number;
}
// _______________________________________________

export type ParamsType = {
	id: string;
}
// _______________________________________________

export type SearchParamsTypes = {
	params: ParamsType;
	searchParams: ProductDataType;
}
// _______________________________________________
