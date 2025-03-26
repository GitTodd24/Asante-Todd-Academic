import React from "react";
import Footer from "../components/footer";

function DonorAdvisedFunds({ handlePageChange }) {
    return <>
    <img
       src="img/transparent-apple-logo-on-white-gjotehos5arbbq21.jpg"
       alt="3D PayPal logo by Farhat Altaf"
       className="absolute"
       style={{
         top: '3',
         left: '0',
         width: '100%',
         height: 'auto',
         zIndex: '1'
       }}
     />
    <h1 style={{ zIndex: '3', position: 'relative'}} class="text-black">Donor-Advised Funds</h1>
    <div id="donorAdvisedFunds" class="parallax-window relative" data-parallax="scroll" data-image-src="img/St Lukes Inside Prayer.jpg">

    <div class="container mx-auto tm-container relative">

        <div class="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
        
            <div class="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact" style={{ zIndex: '2', position: 'relative'}}>
                
                <h2 class="text-3xl mb-6 tm-text-green">Giving Donor-Advised Funds<br/><br/></h2>
                <p class="mb-6 text-lg leading-8">
                Thanks for stopping by the site! I hope that you enjoyed your visit. You may contact Dr. Todd for further information or needed services by filling out the form to the right or by using the contact information below. 
                <br/><br/>
                1 - Enter required information in the form to the right.
                <br/><br/>
                2 - Click "Give Now!" to submit your giving form.
                <br/><br/>
                3 - Receive immediate confirmation of your gift, with the option to share the good news on social media.
                </p>
                <p class="mb-10 text-lg">
                    <span class="block">Email: <a href="mailto:info@company.com" class="hover:text-yellow-600 transition">drasantetodd@gmail.com</a></span>
                    <br/>
                    <span class="block mb-2">Place of Employment: <a href="tel:0100200340" class="hover:text-yellow-600 transition">Actively Seeking (Voluntary) </a></span>                        
                </p>
                <div class="text-center">
                  
                </div>                  
            </div>
            
            <div class="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ zIndex: '2', position: 'relative' }}>
                <form action="" method="POST" class="text-lg">
                    <input type="text" name="name" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required="" />
                    <input type="email" name="email" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required="" />
                    <input type="text" name="donationtype" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Donation Type" required="" />
                    <input type="creditcard" name="creditcard" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Credit Card" required="" />
                    <textarea rows="6" name="message" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Message..." required=""></textarea>
                    <div class="text-right">
                        <button type="submit" class="text-white hover:text-yellow-500 transition">Send it</button>
                    </div>                        
                  </form>
            </div>
            
        </div>
        <Footer/>
    </div>        
</div>   
    </>
}

export default DonorAdvisedFunds;