import React from "react";
import Footer from "../components/footer";

function Give({ handlePageChange }) {
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
         
              <div className="lg:items-stretch">
             
               <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit" style={{ zIndex: '2', position: 'relative', marginTop: "-50px" }}>
                <h2 className="text-3xl mb-6 tm-text-green">Give Now. <br/> Make an Impact.</h2>
                <p className="mb-6 text-lg leading-8">
                    Offer a gift in support of Dr. Todd's research, cultural knowledge, writing, and public education as well as the values of faith, liberty of conscience, and religious tolerance.<br /><br /> 
                    With gratitude and sincerest thanks.  
                </p>
                <h2 className="text-3xl mb-6 tm-text-green"> Fill and Submit the Form Below:</h2>
                
                <p className="mb-6 text-lg leading-8">
                <form action="" method="POST" class="text-lg">
                <label for="name">Name:</label>
                        <input type="text" name="name" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Name Here" required="" />
                        <label for="email">Email:</label>
                        <input type="email" name="email" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Email Here" required="" />
                        <label for="donation-amount">Gift Amount:</label>
                        <input type="text" name="donation-amount"
                        class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter Amount Here as $0.00" 
                        required="" />
                        <label for="card-number">Credit/Debit Card Number:</label>
                        <input type="text" name="card-number"
                        class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter Card Number Here as XXXX-XXXX-XXXX-XXXX" 
                        required="" />
                        <label for="expiration-date">Expiration Date:</label>
                        <input type="text" name="expiration-date"
                        class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter Expiration Date Here as MM/YY" 
                        required="" />
                        <label for="CVV">CVV:</label>
                        <input type="text" name="cvv"
                        class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="Enter CVV Here as XXX" 
                        required="" />
                        <label for="message">Message (Optional):</label>
                        <textarea rows="6" name="message" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Enter Message Here..." required=""></textarea>

                        <div class="text-right">
                            <button type="submit" class="text-white hover:text-yellow-500 transition">Submit Form</button>
                        </div> 
                    
                </form>    
                            
                </p>
                <h2 className="text-3xl mb-6 tm-text-green">Thank You!</h2>
                <div className="text-center">
                <p className="mb-6 text-lg leading-8"> 
                (This site uses tokenization and relies on payment gateway for secure storage and processing, and always uses HTTPS for secure communication.)
                </p>
    
                </div>
               </div>
               
               <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-1625px", zIndex: '2', position: 'relative' }}>
                <form action="" method="POST" className="text-lg">
                    <h2 className="text-3xl mb-6 text-white">Other Ways to Give</h2>
                    <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                     
                    <ul className="space-x-8">

          <li>
              <button
               onClick={()=> handlePageChange("Give/MobileText")}
               className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
               Mobile/Text Giving
               </button>
          </li>
          <br/> 
          <li>
              <button onClick={()=> handlePageChange("Give/PayPal")}
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
                         style={{ backgroundColor: " rgb(227, 193, 120)", marginRight: "8.5px" }} className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                             Apple Pay
                         </button>
        
                         <button onClick={() => handlePageChange("Give/GooglePay")}
                         style={{ backgroundColor: " rgb(227, 193, 120)" }} className="text-white text-2xl pl-10 pr-12 py-6 rounded-lg bg-green">
                             Google Pay
                         </button>
                     </li>
                     <br></br>
                     <li>
             
          </li>
            <li>
              <button
               onClick={()=> handlePageChange("Give/DonorAdvisedFunds")}
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
                     <br/>
                     <li>
              <button
               onClick={()=> handlePageChange("Give/Stocks")}
               className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
               Stocks
               </button>
          </li>
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

export default Give;