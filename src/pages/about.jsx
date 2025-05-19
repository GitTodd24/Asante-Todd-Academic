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
        <h1 class="text-white" style={{ zIndex: '3', position: 'relative' }}> Welcome!</h1>
        <div id="about" class="parallax-window" data-parallax="scroll" data-image-src="img/ChoirHero2.jpg">
        <div class="container mx-auto tm-container py-24 sm:py-48">

        {/*<img src="img/AtoddHotel.jpg" alt="Image Description" className="absolute flex-1 rounded-xl p-12 pb-14 m-50 bg-black bg-opacity-50 tm-item-container" style={{ top: '200px', right: '1000', width: '500px', marginLeft: '700px', height: 'auto', zIndex: '1', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> */}

        <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4" style={{ zIndex: '2', position: 'relative', marginRight: '320px' }}>
        <div class="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
        
          <br/><br/> 
                                    <button 
                                    className="text-center text-white pl-8 pr-8 text-2xl rounded-lg tm-bg-green" style={{ backgroundColor: "rgb(154, 12, 15)", marginLeft: "140px" }}>
                                       <a href="https://www.amazon.com/Golden-Band-American-Spirituals-Hermeneutics/dp/0802885144/ref=sr_1_1?crid=3T6QCLUQLM7SH&dib=eyJ2IjoiMSJ9.j7NX4L5TI4I0eg-jbpad36K_nL8QepPxZ_7hQVGtgNcxu7knLWaCUfGF2zD6lp5QlCCCaWvI9fmq2p6lurfCIYjCV1pw1Lx_tC_K6Yp4MdfhQI-fbP9NZYZLgtUhUv1MnW3qqDjXqmdbmbK_6dQSO8ompNfjWG2oyAkmjWZQtfojYy5HMepVsFS4mk5S1arTfbHiLo9PafC9BTVEb7z7153R2G_YzgyBwrADoI6brlo.pqCuoCgf52jQq8AnavWcVZCR3m-OK4mL612I_6lY66g&dib_tag=se&keywords=the+golden+band&qid=1740491304&s=books&sprefix=the+golden+band%2Cstripbooks%2C110&sr=1-1" target="_blank" rel="noopener noreferrer"className="hover:underline" >New!</a>
                                    </button>
        
                        <a href="https://www.amazon.com/Golden-Band-American-Spirituals-Hermeneutics/dp/0802885144/ref=sr_1_1?crid=3T6QCLUQLM7SH&dib=eyJ2IjoiMSJ9.j7NX4L5TI4I0eg-jbpad36K_nL8QepPxZ_7hQVGtgNcxu7knLWaCUfGF2zD6lp5QlCCCaWvI9fmq2p6lurfCIYjCV1pw1Lx_tC_K6Yp4MdfhQI-fbP9NZYZLgtUhUv1MnW3qqDjXqmdbmbK_6dQSO8ompNfjWG2oyAkmjWZQtfojYy5HMepVsFS4mk5S1arTfbHiLo9PafC9BTVEb7z7153R2G_YzgyBwrADoI6brlo.pqCuoCgf52jQq8AnavWcVZCR3m-OK4mL612I_6lY66g&dib_tag=se&keywords=the+golden+band&qid=1740491304&s=books&sprefix=the+golden+band%2Cstripbooks%2C110&sr=1-1" target="_blank" rel="noopener noreferrer" className="hover:underline italic">
                        <img src="img/81KUH4zYSsL._SY522_.jpg" alt="The Golden Band book cover" className="rounded-md text-center w-100 h-auto" style={{ marginLeft: '100px', marginTop: '30px' }}/></a> 
                      
                      <br/>
                       <div className="text-center ml-3 sm:ml-6">
                        <button className="inline-block text-white text-xl pl-4 pr-4 rounded-xl tm-bg-green hover:underline italic"
                         style={{ backgroundColor: "rgb(173, 33, 36)" }}>
                         <a href="https://www.eerdmans.com/9780802885142/the-golden-band/" target="_blank" rel="noopener noreferrer"
                        className="inline-block text-white text-xl pl-5 pr-5 py-3 rounded-xl tm-bg-green hover:underline italic"
                         style={{ backgroundColor: "rgb(173, 33, 36)" }}
                        >Buy at Eerdmans's!</a>
                      </button>
                      <br/><br/> 
                      <button className="inline-block text-white text-xl pl-4 pr-4 rounded-xl tm-bg-green hover:underline italic"
                         style={{ backgroundColor: "rgb(173, 33, 36)" }}>
                         <a href="https://www.amazon.com/Golden-Band-American-Spirituals-Hermeneutics/dp/0802885144/ref=sr_1_1?crid=3T6QCLUQLM7SH&dib=eyJ2IjoiMSJ9.j7NX4L5TI4I0eg-jbpad36K_nL8QepPxZ_7hQVGtgNcxu7knLWaCUfGF2zD6lp5QlCCCaWvI9fmq2p6lurfCIYjCV1pw1Lx_tC_K6Yp4MdfhQI-fbP9NZYZLgtUhUv1MnW3qqDjXqmdbmbK_6dQSO8ompNfjWG2oyAkmjWZQtfojYy5HMepVsFS4mk5S1arTfbHiLo9PafC9BTVEb7z7153R2G_YzgyBwrADoI6brlo.pqCuoCgf52jQq8AnavWcVZCR3m-OK4mL612I_6lY66g&dib_tag=se&keywords=the+golden+band&qid=1740491304&s=books&sprefix=the+golden+band%2Cstripbooks%2C110&sr=1-1" target="_blank" rel="noopener noreferrer"
                          className="inline-block text-white text-center text-xl pl-5 pr-5 py-3 rounded-xl tm-bg-green hover:underline italic"
                          style={{ backgroundColor: "rgb(173, 33, 36)" }}>  Buy on Amazon!</a>
                      </button>
                      </div>            
          </div>
          </div>


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
                    Dr. Asante Todd is an independent American scholar of religion and politics. He is a published author currently writing, speaking, and teaching in the academy, the church, and society to teach, touch, and transform. <br></br> <br></br> 
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