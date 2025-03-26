import Footer from "../components/footer";

function Contact(){
    return <>
        <h1 class="text-white">Contact</h1>
        <div id="contact" class="parallax-window relative" data-parallax="scroll" data-image-src="img/St Lukes Inside Prayer.jpg">

        <div class="container mx-auto tm-container relative">

            <div class="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
            
                <div class="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact">
                    
                    <h2 class="text-3xl mb-6 tm-text-green">Contact Dr. Todd.<br/><br/>Discuss.<br/>Consult.<br/>Collaborate.<br/>Invite.<br/></h2>
                    <p class="mb-6 text-lg leading-8">
                    Thanks for stopping by the site! I hope that you enjoyed your visit. You may contact Dr. Todd for further information or needed services by filling out the form to the right or by using the contact information below. 
                    </p>
                    <p class="mb-10 text-lg">
                        <span class="block">Email: <a href="mailto:info@company.com" class="hover:text-yellow-600 transition">drasantetodd@gmail.com</a></span>
                        <br/>
                        <span class="block mb-2">Place of Employment: <a href="tel:0100200340" class="hover:text-yellow-600 transition">Actively Seeking (Voluntary) </a></span>                        
                    </p>
                    <div class="text-center">
                      
                    </div>    
                    <img src="img/AsanteStreet.jpg" alt="Image Description" className="absolute scroll" style={{ top: '20%', left: '76%', transform: 'translate(-50%, -50%)', zIndex: '10', width: '200px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />                
                </div>
                
                <div class="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container">
                    <form action="" method="POST" class="text-lg">
                        <input type="text" name="name" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Name" required="" />
                        <input type="email" name="email" class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder="Email" required="" />
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

export default Contact;