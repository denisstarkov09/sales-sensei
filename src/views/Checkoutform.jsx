import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import HomeLayout from "../layouts/home";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Checkoutform = () => {
  const navigate = useNavigate();
  // collect data from the user
  const [name, setCardName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [email, setEmail] = useState("metaknowya@gmail.com");
  const [email, setEmail] = useState("");
  const priceId = "price_1Ni4zSIzxhFKhxAIWnTvdkNT";

  // stripe items
  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
      // create a payment method
      setIsLoading(true);
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });

      console.log("paymentMethod", paymentMethod);

      // call the backend to create subscription
      const response = await fetch("http://localhost:5000/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod?.paymentMethod?.id,
          name,
          email,
          priceId,
        }),
      }).then((res) => res.json());

      // const confirmPayment = await stripe?.confirmCardPayment(
      //   response.clientSecret
      // );

      // if (confirmPayment?.error) {
      //   alert(confirmPayment.error.message);
      // } else {
      alert("Success! Check your email for the invoice.");
      window.localStorage.setItem(
        "sub_scription",
        JSON.stringify({
          cs: response.clientSecret,
          ss: response.subscriptionId,
          email: email,
        })
      );
      setIsLoading(false);
      navigate("/main");
      // }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <HomeLayout>
      <div className="checkout-form">
        <div className="checkout-div">
          <div className="checkout-label-div">
            <label htmlFor="Email">Email</label>
          </div>
          <input
            className="checkform-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-div card-information-div">
          <div className="checkout-label-div">
            <label htmlFor="cardNumber">Card Information</label>
          </div>
          <CardElement />
        </div>

        <div className="checkout-div">
          <label htmlFor="cardName">Name on Card</label>
          <input
            className="checkform-input"
            type="text"
            id="cardName"
            name="cardName"
            placeholder="Enter cardholder name"
            value={name}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        <div className="checkout-div button-div">
          <button
            className="pay-btn"
            onClick={createSubscription}
            disabled={isLoading}
          >
            {isLoading ? "wait some mins..." : "Pay"}
          </button>
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
};

export default Checkoutform;
