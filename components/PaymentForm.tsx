"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement){
        alert("null values")
        return null;
      } 
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      const clientSecret = data;
    //   console.log(data)
      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
    //   console.log("successfull")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement className=" justify-center items-center p-4 border-2"/>
      <button type="submit">Submit</button>
    </form>
  );
}