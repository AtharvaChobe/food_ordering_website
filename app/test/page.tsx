// "use client"
// import React, { useEffect } from 'react'
// import { loadStripe } from "@stripe/stripe-js";
// import { checkoutCredits } from "@/actions/checkout.actions";

// const Page = () => {
//   useEffect(() => {
//     loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
//   }, []);

//   // const onCheckout = async () => {
//   //   await checkoutCredits();
//   // };

//   return (
//     <div>
//       <form action={onCheckout} method='POST'>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default Page