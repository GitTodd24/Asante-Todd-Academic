import React, { useState } from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";

function WordsofAffirmation({ handlePageChange }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        prefix: "",
        suffix: "",
        email: "",
        city: "",
        state: "",
        country: "",
        message: "",
        publicFields: [],
    });
 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
                  // Handle checkbox values for privacy options
            setFormData((prevData) => ({
                ...prevData,
                publicFields: checked
                    ? [...prevData.publicFields, name]
                    : prevData.publicFields.filter((field) => field !== name),
            }));
        } else {
                  // Handle text input values
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
          }

        try {
            // Send data to the affirmations database
            const affirmationResponse = await fetch("http://localhost:5000/api/affirmations", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
      
            // Send data to the alldonors database
            const donorResponse = await fetch("/alldonors", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
      
            if (affirmationResponse.ok && donorResponse.ok) {
              setSubmitted(true); // Display success message
              setError(""); // Clear errors
            } else {
              setError("Error submitting the form. Please try again.");
            }
          } catch (err) {
            console.error("Error during submission:", err);
            setError("Failed to submit form. Please check your network connection.");
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
            <h1 style={{ zIndex: '3', position: 'relative', color: 'black' }}>Words of Affirmation</h1>

            <div id="wordsofaffirmation" className="parallax-window relative" data-parallax="scroll" data-image-src="img/Choir2Landscape2.jpg">
                <div className="container mx-auto tm-container  py-24 sm:py-48">

                    <div className="lg:items-stretch">

                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit" style={{ zIndex: '2', position: 'relative', marginTop: "-50px" }}>
                            <h2 className="text-3xl mb-6 tm-text-green" >Giving Words of Affirmation</h2>
                            <p className="mb-6 text-lg leading-8">
                                Offer a gift in support of Dr. Todds research, cultural knowledge, writing, and public education as well as the values of faith, liberty of conscience, and religious tolerance.<br /><br />
                                With gratitude and sincerest thanks.
                            </p>
                            <button
                                className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg tm-bg-green" style={{ backgroundColor: "rgb(133, 26, 150)", cursor: "default" }}>
                                <u>Words of Affirmation Form</u>
                            </button>
                            <br></br>
                            <br />
                            <div className="mb-6 text-lg leading-8">
                                {submitted ? (
                                    <p className="text-green-700 font-semibold">
                                        Form successfully submitted! Thank you for your gift! You will receive an email acknowledging your contribution.
                                    </p>
                                ) : (

                                    <form onSubmit={handleSubmit}>
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                      type="text"
                                      name="firstName"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter First Name Here"
                                      id="firstName"
                                      value={formData.firstName}
                                      onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                      type="text"
                                      name="lastName"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Last Name Here"
                                      id="lastName"
                                      value={formData.lastName}
                                      onChange={handleChange}
                                      required
                                    />
                                    <label htmlFor="prefix">Prefix (Optional):</label>
                                    <input
                                      type="text"
                                      name="prefix"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Prefix Here"
                                      id="prefix"
                                      value={formData.prefix}
                                      onChange={handleChange}
                                    />
                                    <label htmlFor="suffix">Suffix (Optional):</label>
                                    <input
                                      type="text"
                                      name="suffix"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Suffix Here"
                                      id="suffix"
                                      value={formData.suffix}
                                      onChange={handleChange}
                                    />
                                    <label htmlFor="email">Email:</label>
                                    <input
                                      type="email"
                                      name="email"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Email Here"
                                      id="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      required
                                    />
                                    <label htmlFor="city">City:</label>
                                    <input
                                      type="text"
                                      name="city"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter City Here"
                                      id="city"
                                      value={formData.city}
                                      onChange={handleChange}
                                      required
                                    />
                                    <label htmlFor="state">State (Optional):</label>
                                    <input
                                      type="text"
                                      name="state"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter State Here"
                                      id="state"
                                      value={formData.state}
                                      onChange={handleChange}
                                    />
                                    <label htmlFor="country">Country:</label>
                                    <input
                                      type="text"
                                      name="country"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Country Here"
                                      id="country"
                                      value={formData.country}
                                      onChange={handleChange}
                                      required
                                    />
                                    <label htmlFor="message">Words of Affirmation:</label>
                                    <textarea rows="6"
                                      name="message"
                                      className="input w-full rounded-xl bg-black border-b bg-opacity-0 text-black px-0 py-2 mb-15 tm-border-gold" placeholder="Enter Message Here"
                                      id="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                                    ></textarea>
                                    <div>
                                      <p>Privacy Options: Your words of affirmation may be displayed on this site! Choose which fields to hide:  (email is always private):</p>
                                        <br/>
                                      <div className="flex flex-col rounded-xl border-b tm-border-gold">
                                      {["first Name", "last Name", "prefix", "suffix", "city", "state", "country"].map((field) => (
                                        <label key={field}>
                                          <input
                                            type="checkbox"
                                            name={field}
                                            checked={formData.publicFields.includes(field)}
                                            onChange={handleChange}
                                          />
                                          Hide {field.charAt(0).toUpperCase() + field.slice(1)}
                                        </label>
                                      ))}
                                    </div>
                                    {error && <p className="text-red-500">{error}</p>}
                                    </div>
                                    <br />
                                    <div className="text-center">
                                            <button 
                                                type="submit"
                                                className="text-white hover:text-yellow-500 transition px-6 py-2 rounded"
                                                style={{ backgroundColor: "rgb(154, 12, 15)" }}
                                            >
                                                Submit Words of Affirmation Form
                                            </button>
                                        </div>
                                  </form>                                  
                                )}
                            
                             </div>
                            
                            <div className="text-center">
                                <p className="mb-6 text-lg leading-8">
                                    *This site uses tokenization, relies on secure storage and processing, and always uses HTTPS for secure communication.
                                </p>

                            </div>
                        </div>

                        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-2300px", zIndex: '2', position: 'relative' }}>
                            <form action="" method="POST" className="text-lg">
                                {/*<h2 className="text-3xl mb-6 text-white">Other Ways to Give</h2>*/}
                                <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">

                                    <ul className="space-x-8">
                                    <li>
              <button
               onClick={()=> handlePageChange("Give")}
               className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
               Credit/Debit Giving
               </button>
          </li>
          <br/>
                                        {/*<li>
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
                                        </li>*/}
                                        <br />
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
WordsofAffirmation.propTypes = {
    handlePageChange: PropTypes.func.isRequired,
};

export default WordsofAffirmation;