import Footer from "../components/footer";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import stripePromise from "../config/stripeClient";

function Donation({ handlePageChange }) {
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
                        setStatus("Payment successful!");

            // Step 3: Send donation data to backend
            const donationResponse = await fetch("/donation", {
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
                                    className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg tm-bg-green" style={{ cursor: "default", marginLeft: "75px" }}>
                                    <u>Giving Form</u>
                                </button>
                                <br></br>
                                <br />

                                <form className="mb-6 text-lg leading-8 " onSubmit={handleSubmit}>

                                    {/* Name Input */}
                                    <label htmlFor="firstName">First Name:</label>
                                    <input type="text" name="firstName" className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter First Name Here" required />

                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" name="lastName" className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Last Name Here" required />

                                    {/* Email Input */}
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" className="input w-full bg-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Here" required/>
                               
                                    <label htmlFor="donationAmount">Gift Amount:</label>
                        

                                    <div className="flex flex-col text-left rounded-xl">
                                   {/* Predefined Donation Amounts */}
                                 <ul>                            
                                    <label htmlFor="amount-25" style={{ marginRight: "10px" }}>$25</label>
                                    <input type="radio" name="donationAmount" value="25" id="amount-25"
                                        checked={formData.donationAmount === "25"}
                                        onChange={handleInputChange} />
                                    </ul>
                                    <ul>
                                    <label htmlFor="amount-50" style={{ marginRight: "10px" }}>$50</label>
                                    <input type="radio" name="donationAmount" value="50" id="amount-50"
                                        checked={formData.donationAmount === "50"}
                                        onChange={handleInputChange} />
                                        </ul>
                                        <ul>
                                    <label htmlFor="amount-100" style={{ marginRight: "10px" }}>$100</label>
                                    <input type="radio" name="donationAmount" value="100" id="amount-100" checked={formData.donationAmount === "100"}
                                        onChange={handleInputChange} />
                                    </ul>
                                    <ul>
                                    <label htmlFor="amount-250" style={{ marginRight: "10px" }}>$250</label>
                                    <input type="radio" name="donationAmount" value="250" id="amount-250" checked={formData.donationAmount === "250"}
                                        onChange={handleInputChange} />
                                   </ul>
                                    {/* Custom Donation Amount */}

                                   <ul>
                                    <label htmlFor="amount-custom" style={{ marginRight: "10px" }}>Other Amount:</label>
                                    <input type="radio" name="donationAmount" value={customAmount} id="amount-custom"
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
                                    <br/>
                                     {/* Card Information */}
                                    <label className="block mb-2">Card Details:</label>
                                    <br/>
                                    <div className="p-2 border rounded mb-4 bg-white">
        <CardElement options={{ hidePostalCode: true }}  />
                                    </div>
                                    <br/>
                                    {/* Optional Message */}
                                    <label className="block mb-2">Message (Optional):</label>
                                    <textarea rows="6"
                                        name="message"
                                        className="input w-full bg-white rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Enter Message Here..."
                                    ></textarea>

                                   
                                    <br/>
                                    <div className="text-center">
                                        <button type="submit" className="text-white hover:text-yellow-500 transition" disabled={isLoading || !stripe || !elements} style={{ backgroundColor: "rgb(154, 12, 15)" }}> {isLoading ? "Processing..." : "Submit Giving Form"}</button>
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
                                <div className="flex-1 rounded-xl pb-50 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "15px", marginTop: "-150px", width: "500px", zIndex: '2', position: 'relative' }}>
                                    <form action="" method="POST" className="text-lg"><br />
                                       {/*} <h2 className="text-3xl mb-6 text-white">Other Ways to Give</h2>*/}
                                        <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">

                                            <ul className="space-x-8">

                                                <li>
                                                    {/*<button
                                                        onClick={() => handlePageChange("Give/MobileText")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                        Mobile/Text Giving
                                                    </button>*/}
                                                       <button onClick={() => handlePageChange("Give/WordsofAffirmation")}
                                                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green" style={{ backgroundColor: "rgb(133, 26, 150)" }}>
                                                        Give Words of Affirmation                      </button>
                                                </li>
                                                <br />
                                                {/*<li>
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
                                                </li>*/}
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
            <Donation handlePageChange={handlePageChange} />
        </Elements>
    );
}
Give.propTypes = {
    handlePageChange: PropTypes.func.isRequired,
};

export default Give;