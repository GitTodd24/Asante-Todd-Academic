primarycontactphone
secondarycontactphone
eventtime
venuename
venueaddress1
venueaddress2
venueaddressunit
venuestate
venuezipcode
eventrole
eventaudience
eventmedia
eventpromo
speakersales
eventairport
eventexpenselistair
eventexpenselistcar
eventexpenselisthotel
eventexpenselistmeals
speakerbudget
responsedeadline
other


//#7
import Footer from "../components/footer";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51RDapyR89nc26OtMtayuFE6lsy6PcbJxygJwQJdkhEfDa1GPG172A3gHNO7O0SlrW7ausbUZCamzlFhjssYOO5xZ00P2paSqWX");

function CreditDebit({ handlePageChange }) {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
        message: "",
    });

    const [customAmount, setCustomAmount] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        saveFormDataToLocalStorage(updatedFormData);
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        const updatedFormData = { ...formData, donationAmount: amount };
        setFormData(updatedFormData);
        saveFormDataToLocalStorage(updatedFormData);
    };

    // Save form data to localStorage
    const saveFormDataToLocalStorage = (data) => {
        localStorage.setItem("formData", JSON.stringify(data));
    };

    // Load form data from localStorage when the page loads
    useEffect(() => {
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData((prev) => ({ ...prev, donationAmount: amount }));
    };

    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email) {
            setStatus("Please fill in all required fields.");
            return false;
        }
        if (!formData.donationAmount || isNaN(Number(formData.donationAmount)) || Number(formData.donationAmount) <= 0) {
            setStatus("Please enter a valid donation amount.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setStatus("");

        try {
            // Step 1: Create Payment Intent via backend
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: formData.donationAmount, // Ensure the amount is in correct currency format
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create Payment Intent. Please try again.");
            }

            const { clientSecret } = await response.json();

            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Missing client secret.");
            }

            // Step 2: Confirm Payment using CardElement
            const cardElement = elements.getElement(CardElement);

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                    },
                },
            });

            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                localStorage.removeItem("formData");
                setStatus("Payment successful!");

                // Step 3: Send donation data to backend
                const donationResponse = await fetch("/submit-donation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        paymentIntentId: result.paymentIntent.id, // Linking PaymentIntent to donation data
                    }),
                });

                const donationResult = await donationResponse.json();

                if (!donationResponse.ok) {
                    setStatus("Donation submission failed. Please contact support.");
                } else {
                    setStatus(donationResult.message || "Donation successful!");
                }
            } else {
                setStatus("Payment processing. Please wait.");
            }
        } catch (err) {
            console.error("Error during payment submission:", err);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name Inputs */}
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter First Name"
                required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter Last Name"
                required
            />

            {/* Email Input */}
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email"
                required
            />

            {/* Donation Amount */}
            <label htmlFor="donationAmount">Donation Amount:</label>
            <input
                type="text"
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleInputChange}
                placeholder="Enter Donation Amount"
                required
            />

            {/* Card Input */}
            <label>Card Details:</label>
            <CardElement options={{ hidePostalCode: true }} />

            {/* Submit Button */}
            <button type="submit" disabled={isLoading || !stripe || !elements}>
                {isLoading ? "Processing..." : "Submit Donation"}
            </button>

            <p>{status}</p>
        </form>
    );
}

CreditDebit.propTypes = {
    handlePageChange: PropTypes.func,
};

export default function App() {
    return (
        <Elements stripe={stripePromise}>
            <CreditDebit />
        </Elements>
    );
}

//#6
function CreditDebit({ handlePageChange }) {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
        message: "",
    });
    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData((prev) => ({ ...prev, donationAmount: amount }));
    };

    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email) {
            setStatus("Please fill in all required fields.");
            return false;
        }
        if (!formData.donationAmount || isNaN(Number(formData.donationAmount)) || Number(formData.donationAmount) <= 0) {
            setStatus("Please enter a valid donation amount.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setStatus("");

        try {
            // Step 1: Create Payment Intent via backend
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: formData.donationAmount, // Ensure the amount is in correct currency format
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create Payment Intent. Please try again.");
            }

            const { clientSecret } = await response.json();

            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Missing client secret.");
            }

            // Step 2: Confirm Payment using Stripe's PaymentElement
            const result = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.href, // Optional: Redirect on success
                },
            });

            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setStatus("Payment successful!");

                // Step 3: Send donation data to backend
                const donationResponse = await fetch("/submit-donation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        paymentIntentId: result.paymentIntent.id, // Linking PaymentIntent to donation data
                    }),
                });

                const donationResult = await donationResponse.json();

                if (!donationResponse.ok) {
                    setStatus("Donation submission failed. Please contact support.");
                } else {
                    setStatus(donationResult.message || "Donation successful!");
                }
            } else {
                setStatus("Payment processing. Please wait.");
            }
        } catch (err) {
            console.error("Error during payment submission:", err);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const paymentElementOptions = {
        layout: "tabs", // Customizable layout for the PaymentElement
    };

    //form
    <form className="mb-6 text-lg leading-8" onSubmit={handleSubmit}>
    {/* Name Inputs */}
    <label htmlFor="firstName">First Name:</label>
    <input
        type="text"
        name="firstName"
        className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Enter First Name Here"
        required
    />

    <label htmlFor="lastName">Last Name:</label>
    <input
        type="text"
        name="lastName"
        className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Enter Last Name Here"
        required
    />

    {/* Email Input */}
    <label htmlFor="email">Email:</label>
    <input
        type="email"
        name="email"
        className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter Email Here"
        required
    />

    {/* Donation Amount */}
    <label htmlFor="donationAmount">Gift Amount:</label>
    <div className="flex flex-col text-left rounded-xl">
        {/* Predefined Donation Amounts */}
        <ul>
            <label htmlFor="amount-25" style={{ marginRight: "10px" }}>$25</label>
            <input
                type="radio"
                name="donationAmount"
                value="25"
                id="amount-25"
                checked={formData.donationAmount === "25"}
                onChange={handleInputChange}
            />
        </ul>
        <ul>
            <label htmlFor="amount-50" style={{ marginRight: "10px" }}>$50</label>
            <input
                type="radio"
                name="donationAmount"
                value="50"
                id="amount-50"
                checked={formData.donationAmount === "50"}
                onChange={handleInputChange}
            />
        </ul>
        <ul>
            <label htmlFor="amount-100" style={{ marginRight: "10px" }}>$100</label>
            <input
                type="radio"
                name="donationAmount"
                value="100"
                id="amount-100"
                checked={formData.donationAmount === "100"}
                onChange={handleInputChange}
            />
        </ul>
        <ul>
            <label htmlFor="amount-250" style={{ marginRight: "10px" }}>$250</label>
            <input
                type="radio"
                name="donationAmount"
                value="250"
                id="amount-250"
                checked={formData.donationAmount === "250"}
                onChange={handleInputChange}
            />
        </ul>

        {/* Custom Donation Amount */}
        <ul>
            <label htmlFor="amount-custom" style={{ marginRight: "10px" }}>Other Amount:</label>
            <input
                type="radio"
                name="donationAmount"
                value={customAmount}
                id="amount-custom"
                checked={
                    !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                    formData.donationAmount === customAmount
                }
                onChange={() => handleCustomAmountChange({ target: { value: customAmount } })}
            />
            <input
                type="text"
                className="input w-full bg-white rounded-xl text-center bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                placeholder="Enter custom amount here"
                value={customAmount}
                onChange={handleCustomAmountChange}
            />
        </ul>
    </div>

    {/* Card Information */}
    <label className="block mb-2">Credit/Debit Card Information:</label>
    <div className="p-2 border rounded mb-4 bg-white">
        <PaymentElement options={paymentElementOptions} />
    </div>

    {/* Optional Message */}
    <label className="block mb-2">Message (Optional):</label>
    <textarea
        rows="6"
        name="message"
        className="input w-full bg-white rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Enter Message Here..."
    ></textarea>

    {/* Submission Button */}
    <div className="text-center">
        <button
            type="submit"
            className="text-white hover:text-yellow-500 transition"
            disabled={!stripe || isLoading}
            style={{ backgroundColor: "rgb(154, 12, 15)" }}
        >
            {isLoading ? "Processing..." : "Submit Credit/Debit Giving Form"}
        </button>
        <p className="text-center mt-4">{status}</p>
    </div>
</form>


//#5
import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CreditDebit() {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
    });
    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData((prev) => ({ ...prev, donationAmount: amount }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        setIsLoading(true);
        setStatus("");

        try {
            // Step 1: Create Payment Intent via backend
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: formData.donationAmount, // Ensure the amount is correctly formatted
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create Payment Intent. Please try again.");
            }

            const { clientSecret } = await response.json();

            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Missing client secret.");
            }

            // Step 2: Confirm Payment using Stripe's PaymentElement
            const result = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.href, // Optional: Redirect on success
                },
            });

            // Step 3: Handle the payment confirmation result
            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setStatus("Payment successful!");
            } else {
                setStatus("Payment processing. Please wait.");
            }
        } catch (err) {
            console.error("Error during payment submission:", err);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const paymentElementOptions = {
        layout: "tabs", // Customizable layout for the PaymentElement
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="donationAmount">Gift Amount:</label>
            <div className="flex flex-col text-left rounded-xl">
                <ul>
                    <label htmlFor="amount-25" style={{ marginRight: "10px" }}>$25</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="25"
                        id="amount-25"
                        checked={formData.donationAmount === "25"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-50" style={{ marginRight: "10px" }}>$50</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="50"
                        id="amount-50"
                        checked={formData.donationAmount === "50"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-100" style={{ marginRight: "10px" }}>$100</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="100"
                        id="amount-100"
                        checked={formData.donationAmount === "100"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-250" style={{ marginRight: "10px" }}>$250</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="250"
                        id="amount-250"
                        checked={formData.donationAmount === "250"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-custom" style={{ marginRight: "10px" }}>Other Amount:</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value={customAmount}
                        id="amount-custom"
                        checked={
                            !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                            formData.donationAmount === customAmount
                        }
                        onChange={() => handleCustomAmountChange({ target: { value: customAmount } })}
                    />
                    <input
                        type="text"
                        className="input w-full bg-white rounded-xl text center bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter custom amount here"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </ul>
            </div>
            <br />
            <label className="block mb-2">Credit/Debit Card Information:</label>
            <div className="p-2 border rounded mb-4 bg-white">
                <PaymentElement options={paymentElementOptions} />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="text-white hover:text-yellow-500 transition"
                    disabled={isLoading || !stripe}
                    style={{ backgroundColor: "rgb(154, 12, 15)" }}
                >
                    {isLoading ? "Processing..." : "Submit Credit/Debit Giving Form"}
                </button>
                <p className="text-center mt-4">{status}</p>
            </div>
        </form>
    );
}

//#4
import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CreditDebit() {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
    });
    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData((prev) => ({ ...prev, donationAmount: amount }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        setIsLoading(true);
        setStatus("");

        try {
            // Step 1: Create Payment Intent via backend
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: formData.donationAmount, // Ensure the amount is correctly formatted
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create Payment Intent. Please try again.");
            }

            const { clientSecret } = await response.json();

            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Missing client secret.");
            }

            // Step 2: Confirm Payment using Stripe's PaymentElement
            const result = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.href, // Optional: Redirect on success
                },
            });

            // Step 3: Handle the payment confirmation result
            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setStatus("Payment successful!");
            } else {
                setStatus("Payment processing. Please wait.");
            }
        } catch (err) {
            console.error("Error during payment submission:", err);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const paymentElementOptions = {
        layout: "tabs", // Customizable layout for the PaymentElement
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="donationAmount">Gift Amount:</label>
            <div className="flex flex-col text-left rounded-xl">
                <ul>
                    <label htmlFor="amount-25" style={{ marginRight: "10px" }}>$25</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="25"
                        id="amount-25"
                        checked={formData.donationAmount === "25"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-50" style={{ marginRight: "10px" }}>$50</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="50"
                        id="amount-50"
                        checked={formData.donationAmount === "50"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-100" style={{ marginRight: "10px" }}>$100</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="100"
                        id="amount-100"
                        checked={formData.donationAmount === "100"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-250" style={{ marginRight: "10px" }}>$250</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="250"
                        id="amount-250"
                        checked={formData.donationAmount === "250"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-custom" style={{ marginRight: "10px" }}>Other Amount:</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value={customAmount}
                        id="amount-custom"
                        checked={
                            !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                            formData.donationAmount === customAmount
                        }
                        onChange={() => handleCustomAmountChange({ target: { value: customAmount } })}
                    />
                    <input
                        type="text"
                        className="input w-full bg-white rounded-xl text center bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter custom amount here"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </ul>
            </div>
            <br />
            <label className="block mb-2">Credit/Debit Card Information:</label>
            <div className="p-2 border rounded mb-4 bg-white">
                <PaymentElement options={paymentElementOptions} />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="text-white hover:text-yellow-500 transition"
                    disabled={isLoading || !stripe}
                    style={{ backgroundColor: "rgb(154, 12, 15)" }}
                >
                    {isLoading ? "Processing..." : "Submit Credit/Debit Giving Form"}
                </button>
                <p className="text-center mt-4">{status}</p>
            </div>
        </form>
    );
}

//#3

import Footer from "../components/footer";
import React, { useState } from "react";
import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RDapyR89nc26OtMtayuFE6lsy6PcbJxygJwQJdkhEfDa1GPG172A3gHNO7O0SlrW7ausbUZCamzlFhjssYOO5xZ00P2paSqWX");

function CreditDebit({ handlePageChange }) {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
        message: "",
    });

    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData((prev) => ({ ...prev, donationAmount: amount }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
            setStatus("Stripe has not loaded yet. Please refresh the page.");
            return;
        }
    
        setIsLoading(true);
        setStatus("");
    
        try {
            // Step 1: Create a Payment Intent via backend
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: formData.donationAmount }), // Ensure `amount` is in correct currency format (e.g., cents for USD)
            });
    
            if (!response.ok) {
                throw new Error("Failed to create Payment Intent. Please try again.");
            }
    
            const { clientSecret } = await response.json();
    
            if (!clientSecret) {
                throw new Error("Payment Intent creation failed. Missing client secret.");
            }
    
            // Step 2: Confirm Payment on the client side
            const result = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.href, // Optional: Redirect on successful payment
                },
            });
    
            // Step 3: Handle the result
            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
                setStatus("Payment successful!");
            } else {
                setStatus("Payment processing. Please wait.");
            }
        } catch (err) {
            console.error("Error during payment submission:", err);
            setStatus("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const paymentElementOptions = {
        layout: "tabs", // Customizable layout for the PaymentElement
    };

    return (
        <>
            <img
                src="img/handWheat.jpg"
                alt="Hand on wheat stalks in a field"
                className="absolute"
                style={{
                    top: '3',
                    left: '0',
                    width: '100%',
                    height: 'auto',
                    zIndex: '1'
                }}
            />
            <h1 style={{ zIndex: '3', position: 'relative', color: 'black' }}>Give</h1>

            <div id="give" className="parallax-window relative" data-parallax="scroll" data-image-src="img/Choir2Landscape2.jpg">

                <div className="container mx-auto tm-container  py-24 sm:py-48">

                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-8">

                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit" style={{ zIndex: '2', position: 'relative', width: "1100px", marginTop: "-50px", marginBottom: "300px" }}>
                            
                            <div>
                                <h2 className="text-3xl mb-6 tm-text-green">Give Now. <br /> Make an Impact.</h2>
                                <p className="mb-6 text-lg leading-8">
                                    Offer a gift in support of Dr. Todd's research, cultural knowledge, writing, and public education as well as the values of faith, liberty of conscience, and religious tolerance.<br /><br />
                                    With gratitude and sincerest thanks.
                                </p>

                                <button
                                    className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg tm-bg-green" style={{ cursor: "default" }}>
                                    <u>Giving Form</u>
                                </button>
                                <br></br>
                                <br />

                                <form className="mb-6 text-lg leading-8 " onSubmit={handleSubmit}>

                                    {/* Name Input */}
                                    <label htmlFor="name">First Name:</label>
                                    <input type="text" name="firstName" class="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter First Name Here" required="" />

                                    <label htmlFor="name">Last Name:</label>
                                    <input type="text" name="lastName" class="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Last Name Here" required="" />

                                    {/* Email Input */}
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" class="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Here" required="" />
                               
                                    <label htmlFor="donationAmount">Gift Amount:</label>
                        

                                    <div className="flex flex-col text-left rounded-xl">
                                
                                 <ul>                            
                                 <label>Gift Amount</label>
                {[25, 50, 100, 250].map((amount) => (
                    <label key={amount}>
                        <input
                            type="radio"
                            name="donationAmount"
                            value={amount}
                            checked={formData.donationAmount === amount.toString()}
                            onChange={handleInputChange}
                        />
                        ${amount}
                    </label>
                ))}

                <label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value={customAmount}
                        checked={
                            !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                            formData.donationAmount === customAmount
                        }
                        onChange={() =>
                            setFormData((prev) => ({
                                ...prev,
                                donationAmount: customAmount,
                            }))
                        }
                    />
                    Other:
                    <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Custom amount"
                    />
                </label>
                                    </ul>
                                </div>
                                    <br/>
                                   
                                    <br/>
                                    <label className="block mb-2">Message (Optional):</label>
                                    <textarea rows="6"
                                        name="message"
                                        className="input w-full bg-white rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Enter Message Here..."
                                    ></textarea>

                                   
                                    <br/>
                                    <label className="block mb-2">Giving Method Information:</label>
                                    <br/>
                                    <div className="p-2 border rounded mb-4 bg-white">
                                         <PaymentElement options={paymentElementOptions} />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" className="text-white hover:text-yellow-500 transition"  disabled={!stripe || isLoading} style={{ backgroundColor: "rgb(154, 12, 15)" }}>{isLoading ? "Processing..." : "Submit Giving Form"}</button>
                                        <p className="text-center mt-4">{status}</p>
                                    </div>


                                </form> {/* Properly closing the form */}
                                
                                <div className="text-center">
                                    <p className="mb-6 text-lg leading-8">
                                        *This site uses tokenization and relies on payment gateway for secure storage and processing, and always uses HTTPS for secure communication.
                                    </p>

                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex-1 rounded-xl pb-50 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "125px", marginTop: "-150px", width: "550px", zIndex: '2', position: 'relative' }}>
                                    <form action="" method="POST" className="text-lg"><br />
                                        <h2 className="text-3xl mb-6 text-white">Other Ways to Give</h2>
                                        <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">

                                            <ul className="space-x-8">

                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/MobileText")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Mobile/Text Giving
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/PayPal")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        PayPal
                                                    </button>

                                                    <button
                                                        onClick={() => handlePageChange("Give/Venmo")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Venmo
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/Zelle")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }} className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Zelle
                                                    </button>
                                                    <br /><br />
                                                    <button
                                                        onClick={() => handlePageChange("Give/DirectTransfer")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-gold">
                                                        Direct Transfer
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/ApplePay")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }} className="text-white text-2xl pl-7 pr-7 py-6 rounded-lg transition tm-bg-green">
                                                        Apple Pay
                                                    </button>

                                                    <button onClick={() => handlePageChange("Give/GooglePay")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }} className="text-white text-2xl pl-7 pr-7 py-6 rounded-lg bg-green">
                                                        Google Pay
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>

                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/DonorAdvisedFunds")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Donor-Advised Funds
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/Crypto")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Cryptocurrency                      </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/Stocks")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Stocks
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/WordsofAffirmation")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green" style={{ backgroundColor: "rgb(133, 26, 150)" }}>
                                                        Words of Affirmation                      </button>
                                                </li>
                                                <br />
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                
            </div>
        </>
    )
};

function Give({ handlePageChange }) {
    return (
        <Elements stripe={stripePromise}>
            <CreditDebit handlePageChange={handlePageChange} />
        </Elements>
    );
}
Give.propTypes = {
    handlePageChange: PropTypes.func.isRequired,
};

export default Give;

//#2
import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CreditDebit() {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
    });

    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCustomAmountChange = (e) => {
        const amount = e.target.value;
        setCustomAmount(amount);
        setFormData({ ...formData, donationAmount: amount });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: formData.donationAmount }),
            });

            const { clientSecret } = await response.json();

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: window.location.href,
                    payment_method_data: {
                        billing_details: {
                            name: `${formData.firstName} ${formData.lastName}`,
                            email: formData.email,
                        },
                    },
                },
                clientSecret,
            });

            if (result.error) {
                setStatus(`Payment Error: ${result.error.message}`);
            } else {
                setStatus("Payment successful!");
            }
        } catch (err) {
            console.error(err);
            setStatus("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const paymentElementOptions = {
        layout: "tabs", // Customizable layout for the PaymentElement
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="donationAmount">Gift Amount:</label>
            <div className="flex flex-col text-left rounded-xl">
                <ul>
                    <label htmlFor="amount-25" style={{ marginRight: "10px" }}>$25</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="25"
                        id="amount-25"
                        checked={formData.donationAmount === "25"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-50" style={{ marginRight: "10px" }}>$50</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="50"
                        id="amount-50"
                        checked={formData.donationAmount === "50"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-100" style={{ marginRight: "10px" }}>$100</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="100"
                        id="amount-100"
                        checked={formData.donationAmount === "100"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-250" style={{ marginRight: "10px" }}>$250</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value="250"
                        id="amount-250"
                        checked={formData.donationAmount === "250"}
                        onChange={handleInputChange}
                    />
                </ul>
                <ul>
                    <label htmlFor="amount-custom" style={{ marginRight: "10px" }}>Other Amount:</label>
                    <input
                        type="radio"
                        name="donationAmount"
                        value={customAmount}
                        id="amount-custom"
                        checked={
                            !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                            formData.donationAmount === customAmount
                        }
                        onChange={() => handleCustomAmountChange({ target: { value: customAmount } })}
                    />
                    <input
                        type="text"
                        className="input w-full bg-white rounded-xl text center bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter custom amount here"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </ul>
            </div>
            <br />
            <label className="block mb-2">Credit/Debit Card Information:</label>
            <div className="p-2 border rounded mb-4 bg-white">
                <PaymentElement options={paymentElementOptions} />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="text-white hover:text-yellow-500 transition"
                    disabled={isLoading || !stripe}
                    style={{ backgroundColor: "rgb(154, 12, 15)" }}
                >
                    {isLoading ? "Processing..." : "Submit Credit/Debit Giving Form"}
                </button>
                <p className="text-center mt-4">{status}</p>
            </div>
        </form>
    );
}

//#1
import Footer from "../components/footer";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_publishable_key_here");

function CreditDebit({ handlePageChange }) {
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        donationAmount: "",
        message: "",
    });

    const [customAmount, setCustomAmount] = useState("");
    const [status, setStatus] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setFormData({ ...formData, donationAmount: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setStatus("Stripe.js has not loaded yet.");
            return;
        }

        try {
            const cardElement = elements.getElement(CardElement);

            // Create a PaymentMethod
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                },
            });

            if (error) {
                setStatus(`Payment Method Error: ${error.message}`);
                return;
            }

            // Send data to backend
            const response = await fetch("/submit-donation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    paymentMethodId: paymentMethod.id,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus(result.message); // Success message
            } else {
                setStatus(result.error); // Error message
            }
        } catch (err) {
            console.error("Error submitting the form:", err);
            setStatus("An error occurred. Please try again.");
        }
    };
    return (
        <>
            <img
                src="img/handWheat.jpg"
                alt="Hand on wheat stalks in a field"
                className="absolute"
                style={{
                    top: '3',
                    left: '0',
                    width: '100%',
                    height: 'auto',
                    zIndex: '1'
                }}
            />
            <h1 style={{ zIndex: '3', position: 'relative', color: 'black' }}>Give</h1>

            <div id="give" className="parallax-window relative" data-parallax="scroll" data-image-src="img/Choir2Landscape2.jpg">

                <div className="container mx-auto tm-container">

                    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-8" style={{ width: '900' }}>

                        <div className="rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact" style={{ zIndex: '2', position: 'relative', width: "1100px" }}>
                            
                            
                                <h2 className="text-3xl mb-6 tm-text-green">Give Now. <br /> Make an Impact.</h2>
                                <p className="mb-6 text-lg leading-8">
                                    Offer a gift in support of Dr. Todd's research, cultural knowledge, writing, and public education as well as the values of faith, liberty of conscience, and religious tolerance.<br /><br />
                                    With gratitude and sincerest thanks.
                                </p>
                                <div class="text-center">
                                <button
                                    className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg tm-bg-green" style={{ cursor: "default" }}>
                                    <u>Credit/Debit Giving Form</u>
                                </button>
                                <br></br>
                                <br />

                                <form className="mb-6 text-lg leading-8 " onSubmit={handleSubmit}>

                                    {/* Name Input */}
                                    <label htmlFor="name">First Name:</label>
                                    <input type="text" name="firstName" class="input w-full border-b text-black px-0 py-4 mb-4 tm-border-gold" value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter First Name Here" required="" />

                                    <label htmlFor="name">Last Name:</label>
                                    <input type="text" name="lastName" class="input w-full border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Last Name Here" required="" />

                                    {/* Email Input */}
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" class="input w-full border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Here" required="" />

                                    <label htmlFor="donationAmount">Gift Amount:</label>
                                    <input type="radio" name="donationAmount" value="25" id="amount-25"
                                        checked={formData.donationAmount === "25"}
                                        onChange={handleInputChange} />
                                    <label htmlFor="amount-25">$25</label>


                                    <input type="radio" name="donationAmount" value="50" id="amount-50"
                                        checked={formData.donationAmount === "50"}
                                        onChange={handleInputChange} />
                                    <label htmlFor="amount-50">$50</label>


                                    <input type="radio" name="donationAmount" value="100" id="amount-100" checked={formData.donationAmount === "100"}
                                        onChange={handleInputChange} />
                                    <label htmlFor="amount-100">$100</label>


                                    <input type="radio" name="donationAmount" value="250" id="amount-250" checked={formData.donationAmount === "250"}
                                        onChange={handleInputChange} />
                                    <label htmlFor="amount-250">$250</label>

                                    <input type="radio" name="donationAmount" value={customAmount} id="amount-custom"
                                        checked={
                                            !["25", "50", "100", "250"].includes(formData.donationAmount) &&
                                            formData.donationAmount === customAmount
                                        }
                                        onChange={() => handleCustomAmountChange({ target: { value: customAmount } })}
                                    />
                                    <label htmlFor="amount-custom">Other Amount:</label>
                                    <input
                                        type="text"
                                        class="input w-full bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                                        placeholder="Enter custom amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                    />

                                    <label className="block mb-2">Message (Optional):</label>
                                    <textarea rows="6"
                                        name="message"
                                        className="input w-full bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Enter Message Here..."
                                    ></textarea>

                                    <label className="block mb-2">Credit/Debit Card:</label>
                                    <div className="p-2 border rounded mb-4">
                                        <CardElement />
                                    </div>

                                    <div class="text-right">
                                        <button type="submit" className="text-white hover:text-yellow-500 transition" disabled={!stripe} style={{ backgroundColor: "rgb(154, 12, 15)" }}>Submit Credit/Debit Giving Form</button>
                                        <p className="text-center mt-4">{status}</p>
                                    </div>


                                </form> {/* Properly closing the form */}
                                <h2 className="text-3xl mb-6 tm-text-green">Thank You!</h2>
                                
                                    <p className="mb-6 text-lg leading-8">
                                        (This site uses tokenization and relies on payment gateway for secure storage and processing, and always uses HTTPS for secure communication.)
                                    </p>
                        

                                </div>
                            
                            </div>
                            <div>
                                <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container margin-top=900px" style={{ marginLeft: "575px", marginTop: "-1100px", width: "1100px", zIndex: '2', position: 'relative' }}>
                                    <form action="" method="POST" className="text-lg"><br />
                                        <h2 className="text-3xl mb-6 text-white">Other Ways to Give</h2>
                                        <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">

                                            <ul className="space-x-8">

                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/MobileText")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Mobile/Text Giving
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/PayPal")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        PayPal
                                                    </button>

                                                    <button
                                                        onClick={() => handlePageChange("Give/Venmo")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Venmo
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/Zelle")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }} className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Zelle
                                                    </button>
                                                    <br /><br />
                                                    <button
                                                        onClick={() => handlePageChange("Give/DirectTransfer")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }}
                                                        className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-gold">
                                                        Direct Transfer
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/ApplePay")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "15px" }} className="text-white text-2xl pl-7 pr-7 py-6 rounded-lg transition tm-bg-green">
                                                        Apple Pay
                                                    </button>

                                                    <button onClick={() => handlePageChange("Give/GooglePay")}
                                                        style={{ backgroundColor: " rgb(227, 193, 120)" }} className="text-white text-2xl pl-7 pr-7 py-6 rounded-lg bg-green">
                                                        Google Pay
                                                    </button>
                                                </li>
                                                <br></br>
                                                <li>

                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/DonorAdvisedFunds")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Donor-Advised Funds
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/Crypto")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Cryptocurrency                      </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange("Give/Stocks")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Stocks
                                                    </button>
                                                </li>
                                                <br />
                                                <li>
                                                    <button onClick={() => handlePageChange("Give/WordsofAffirmation")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green" style={{ backgroundColor: "rgb(133, 26, 150)" }}>
                                                        Words of Affirmation                      </button>
                                                </li>
                                                <br />
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Footer />
                
            </div>
        </>
    )
};

function Give({ handlePageChange }) {
    return (
        <Elements stripe={stripePromise}>
            <CreditDebit handlePageChange={handlePageChange} />
        </Elements>
    );
}
Give.propTypes = {
    handlePageChange: PropTypes.func.isRequired,
};

export default Give;