"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

export async function checkoutCredits(total: number) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: 'My product'
                    },
                    unit_amount: total * 100,

                }
            }
        ],

        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/canceled`,
    });
    
    redirect(session.url!);
}