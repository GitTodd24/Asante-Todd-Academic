import React from "react";
import Footer from "../components/footer";

function About({handlePageChange}){
    return <>

<img
          src="img/AllenChapel.webp"
          alt="Interior of Allen Chapel in Fort Worth, Texas oldest Black Church. Photo by KERA News"
          className="absolute"
          style={{
            top: '3',
            left: '0',
            width: '100%',
            height: 'auto',
            zIndex: '1'
          }}
        />
        <h1 class="text-white" style={{ zIndex: '3', position: 'relative' }}> Welcome!<br/>(Site Soft Opening)</h1>
        <div id="about" class="parallax-window" data-parallax="scroll" data-image-src="img/ChoirHero2.jpg">
        <div class="container mx-auto tm-container py-24 sm:py-48">

        {/*<img src="img/AtoddHotel.jpg" alt="Image Description" className="absolute flex-1 rounded-xl p-12 pb-14 m-50 bg-black bg-opacity-50 tm-item-container" style={{ top: '200px', right: '1000', width: '500px', marginLeft: '700px', height: 'auto', zIndex: '1', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> */}
                <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4" style={{ zIndex: '2', position: 'relative', marginRight: '320px' }}>
                <div class="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                    <h2 class="mb-6 tm-text-green text-4xl font-medium">Dr. Todd</h2>
                    <br></br>
                    <h2 class="mb-6 tm-text-green text-4xl font-medium">Scholar. Author. Speaker.</h2>
                    <p>
                     on   
                    </p>
                    <br/>
                    <h2 class="mb-6 tm-text-green text-4xl font-medium">Religion. Culture. Politics.</h2>
                    <p class="mb-6 text-base leading-8">
                    Dr. Asante Todd is an independent scholar who studies religion and politics. He is a published author currently writing, speaking, and teaching in the academy, the church, and society to teach, touch, and transform. <br></br> <br></br> 
                    Click navigation tabs above to explore the site!
                  </p>
                   </div>
                   <br></br>
                   <button onClick={() => handlePageChange('Contact')} className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md cursor-pointer">
              <i className="far fa-comments mr-4"></i>
              Contact
              </button>
            </div>     
            </div>  
        <Footer/>      
    </div>
        </>
}


export default About