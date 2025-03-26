import Footer from "../components/footer";


function Resume({handlePageChange}){
    
    return <>

    <div id="resume" class="parallax-window" data-parallax="scroll" data-image-src="img/church-3481187.jpg">
    <img
          src="img/vanderbilt2.jpg"
          alt="Vanderbilt University brickstone"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[200px] shadow-lg rounded-lg"
        />    
        <button> 
    <h1 style={{ zIndex: '2', position: 'relative' }} class="text-white">Curriculum Vitae</h1></button>

        <div class="container mx-auto tm-container py-24 sm:py-48">
            
            <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact" style={{ zIndex: '2', position: 'relative', marginTop: "175px" }}>
                <div class="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                    <h2 class="mb-6 tm-text-green text-4xl font-medium"><a href="/Asante Todd CV .pdf">Download <br></br>Curriculum Vitae</a></h2>
                </div>

                <button onClick={() => handlePageChange('Contact')} className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md cursor-pointer">
              <i className="far fa-comments mr-4"></i>
              Contact
              </button>
            </div>

            <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-650px", zIndex: '2', position: 'relative' }}>
                
                    
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                    <ul className="flex items-center">

            <li className="flex items-center">
                    <img src="img/logos/vanderbiltlogo.png" alt="Vanderbilt Logo" style={{ marginRight: "35px" }} class="flex custom-logo display-inline" />
    
                    <img src="img/logos/fasken.webp" alt="Fasken Foundation Logo" style={{ marginRight: "35px" }} class="flex custom-logo rounded-lg" />

                    <img src="img/logos/FTE_promo.jpg" alt="Forum for Theological Exploration Logo" class="flex custom-logo rounded-lg" />
            </li>
            </ul>
                    </div>
            <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
                     <img src="img/logos/grandeurofreason.jpg" alt="The Granduer of Reason Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline rounded-lg" />
     
                     <img src="img/logos/proctor.png" alt="Samuel DeWitt Proctor Foundation Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />
 
                     <img src="img/logos/sce.png" alt="Society of Christian Ethics Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
                     
             <img src="img/logos/hustontil.webp" alt="Huston Tillotson College Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />

                     <img src="img/logos/LillyEndowment_FullLogo.jpg" alt="The Lilly Endowment Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline rounded-lg" />
     
                     <img src="img/logos/fellowshipProtestantEthics.jpg" alt="Fellowship for Prostestant Ethics Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
                     <img src="img/logos/seminary_of_the_Southwest_Logo.jpg" alt="Seminary of the Southwest Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline rounded-lg" />
     
                     <img src="img/logos/agudas.png" alt="Congregation Agudas Achim Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />
 
                     <img src="img/logos/nrcat_logo.webp" alt="National Religious Campaign Against Torture Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
             <img src="public/img/logos/SUN_logo.png" alt="Stellenbosch University Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline" />
     
                     <img src="img/logos/institute_for_justice_and_reconciliation_logo.jpeg" alt="Institute for Justice and Reconciliation Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />
 
                     <img src="img/logos/sbl_logo.png" alt="Society forthe Study of Biblical Literature Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
                     <img src="img/logos/longhorn.png" alt="Texas Longhorn Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline" />
     
                     <img src="img/logos/HRC_logo.avif" alt=" Harry Ransom Center Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />
 
                     <img src="img/logos/TexasImpactlogo.png" alt="Texas Impact Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
                    <div className="flex flex-wrap justify-around mt-20 mb-10">
                     
                     <ul className="flex items-center">
 
             <li className="flex items-center">
                     <img src="img/logos/AAR-logo.svg" alt="American Academy of Religion Logo" style={{ marginRight: "30px" }} class="flex custom-logo display-inline" />
     
                     <img src="img/logos/austinseminary_logo.png" alt="Austin Presbyterian Seminary Logo" style={{ marginRight: "30px" }} class="flex custom-logo rounded-lg" />
 
                     <img src="img/logos/wesley_logo.png" alt="Wesley Theological Seminary Logo" class="flex custom-logo rounded-lg" />
             </li>
             </ul>
                    </div>
               </div>
    
            
        </div>   
        <Footer/>     
    </div>
        </>
}

export default Resume;