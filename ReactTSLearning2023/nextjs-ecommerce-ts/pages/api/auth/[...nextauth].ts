// FILE: ./api/auth/[...nextauth].ts
// _______________________________________________

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Updated this line
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
// _______________________________________________

const prisma = new PrismaClient();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
	throw new Error("Google Client ID and Secret must be defined");
}
// _______________________________________________

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId,
			clientSecret,
		}),
	],
	events: {
		//! this code will only get ran when a new user is created
		createUser: async ({ user }) => {
			// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
			// if (!stripeSecretKey) throw new Error("Secret key not defined");
			
			const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
				apiVersion: '2022-11-15',
			});
			
			// check if there is a username & email
			if (!(user.name && user.email)) return;
			
			// create stripe customer
			const customer = await stripe.customers.create({
				email: user.email,
				name: user.name,
			});
			
			await prisma.user.update({
				where: { id: user.id },
				data: { stripeCustomerID: customer.id },
			});
		},
	},
};
// _______________________________________________

export default NextAuth(authOptions);
// _______________________________________________