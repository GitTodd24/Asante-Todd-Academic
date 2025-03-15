import React from "react";
import Footer from "../components/Footer";

function Portfolio({handlePageChange}) {
    return (
        <>
            <h1 class="text-white">Portfolio</h1>
            <div id="portfolio" className="parallax-window relative" data-parallax="scroll" data-image-src="img/chair-1840011_1280.jpg">
                <div className="container mx-auto tm-container">
                    <div className="lg:items-stretch">
                        
                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit">
                        <h2 className="text-3xl mb-6 tm-text-green">Selected Works</h2>
                        <div className="flex items-start mt-20 mb-10 tm-menu-item-1">
                        <a href="https://www.amazon.com/Golden-Band-American-Spirituals-Hermeneutics/dp/0802885144/ref=sr_1_1?crid=3T6QCLUQLM7SH&dib=eyJ2IjoiMSJ9.j7NX4L5TI4I0eg-jbpad36K_nL8QepPxZ_7hQVGtgNcxu7knLWaCUfGF2zD6lp5QlCCCaWvI9fmq2p6lurfCIYjCV1pw1Lx_tC_K6Yp4MdfhQI-fbP9NZYZLgtUhUv1MnW3qqDjXqmdbmbK_6dQSO8ompNfjWG2oyAkmjWZQtfojYy5HMepVsFS4mk5S1arTfbHiLo9PafC9BTVEb7z7153R2G_YzgyBwrADoI6brlo.pqCuoCgf52jQq8AnavWcVZCR3m-OK4mL612I_6lY66g&dib_tag=se&keywords=the+golden+band&qid=1740491304&s=books&sprefix=the+golden+band%2Cstripbooks%2C110&sr=1-1" target="_blank" rel="noopener noreferrer" className="hover:underline italic">
                        <img src="img/81KUH4zYSsL._SY522_.jpg" alt="The Golden Band book cover" className="rounded-md w-10 h-auto style={{ marginLeft: '20px' }}"/></a> 
                        <div className="ml-3 sm:ml-6">
                            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow"> <a href="https://www.amazon.com/Golden-Band-American-Spirituals-Hermeneutics/dp/0802885144/ref=sr_1_1?crid=3T6QCLUQLM7SH&dib=eyJ2IjoiMSJ9.j7NX4L5TI4I0eg-jbpad36K_nL8QepPxZ_7hQVGtgNcxu7knLWaCUfGF2zD6lp5QlCCCaWvI9fmq2p6lurfCIYjCV1pw1Lx_tC_K6Yp4MdfhQI-fbP9NZYZLgtUhUv1MnW3qqDjXqmdbmbK_6dQSO8ompNfjWG2oyAkmjWZQtfojYy5HMepVsFS4mk5S1arTfbHiLo9PafC9BTVEb7z7153R2G_YzgyBwrADoI6brlo.pqCuoCgf52jQq8AnavWcVZCR3m-OK4mL612I_6lY66g&dib_tag=se&keywords=the+golden+band&qid=1740491304&s=books&sprefix=the+golden+band%2Cstripbooks%2C110&sr=1-1" target="_blank" rel="noopener noreferrer" className="hover:underline italic">The Golden Band</a></h3>
                        </div>                  
                    </div>
                            <div className="flex items-start mb-6 tm-menu-item">
                        <img src="img/71b+P8GMdQL._SY523_.jpg" alt="Beyond the Pale Book Cover" className="rounded-md w-10 h-auto"/>                 
                        <div className="ml-3 sm:ml-6">
                            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                            <a href="https://www.amazon.com/Beyond-Pale-Reading-Ethics-Margins-ebook/dp/B005X3KS5Q/ref=sr_1_8?crid=1W1U0HDLKM781&dib=eyJ2IjoiMSJ9.Wr0S4-sBJAuQZB_ScXG8nExtiCBkrXFOiKJEm1sAo3u2puu8VHS-neGkmvOvww-CKSqQckhbfxT9cr3HzSekhZjd-W8vlmp5iTEi43TDQ0Vj9FKndAg-DyMG3jrvkNeQb7kLVZYyKC3jrs5wYQKY2o3S3bLukVZSUoWooGYZGhjnjFsGyjqIROxo8FOWMfkV5PJi8knup9y0LFt3Y5Qi2bReM7ZrQ8OaBK3p9wQIWjYnRcvij1sqOM73moC9iE1-4nWSZxFUHi-MhenuKpF00av1Ns06kUjxsD5-M-sQH5e6PDI15TCh2bFeiFm_-D8PSRY98Vjh9YiT_my3DQYZDOfIPep7R5OtaEep-vOyIa8.l8sv09-q5pTLfY52yhSrNqFAJaY3lUZqZMBo0-M3zno&dib_tag=se&keywords=Beyond+the+Pale&qid=1740490226&s=books&sprefix=beyond+the+pale%2Cstripbooks%2C129&sr=1-8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                             "Thomas Hobbes on Human Nature" </a></h3>
                            <div className="text-white text-md sm:text-lg font-light mb-1"></div>
                            <div className="text-gray text-md sm:text-lg font-light"> Beyond the Pale <br></br>(Top 4% - Academia.edu) </div>
                        </div>                    
                    </div>
                           </div>
                        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-900px" }}>
                        <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                         <div className="ml-3 sm:ml-6 flex justify-left gap-4">
                            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow text-left"><a href="/Between Disenfranchisement and Disillusionment The 2016 African American Electorate.pdf">"Between Disenfranchisement and Disillusionment: The African American Electorate in the 2016 Presidential Election"</a>
                            <br/><br/>
                             <div className="text-white text-md sm:text-lg font-light">Society of Christian Ethics - 2017</div></h3>
                            <br></br>
                            <img src="img/Screenshot 2025-02-25 162351.png" alt="Front Cover of 2017 Society of Christian Ethics Conference Manual" className="rounded-md w-10 h-auto"/>
                        </div>   
                        <br/><br/>                          
                        <div className="flex items-start mb-6 tm-menu-item">
                        <div className="ml-3 sm:ml-6 flex items-center">
                        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow text-left">Figures and Horizons in Christian Thought
                            <br/><br/>
                            <div className="text-white text-md sm:text-lg font-light">Forthcoming/<br/>Rescheduled</div></h3>
                        </div>
                        <img src="img/17ed287a-b07f-4521-9cbc-f948287c814e.jpg" alt="Image of Blank Book/Book Cover"  className="rounded-md w-10 h-auto" style={{ marginLeft: '-5px' }}/>                    
                    </div>
                    <br/>
                    <div className="flex items-start mb-6 tm-menu-item">
                           <div className="ml-3 sm:ml-6 flex items-center gap-4">
                            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow text-left">
                            <a href="https://s3.amazonaws.com/omekareclaim/original/9d9ecda5fe62120cdc297fe0c09dc027.pdf?AWSAccessKeyId=AKIA3ZTNZFTLNDZRX6AU&Expires=1740506400&Signature=UzwRCfyXISDzi0gkwWT69QaNYkE%3D" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            "Mass Incarceration, War, and the Great World House"</a>
                            <br/><br/>
                            <div className="text-white text-md sm:text-lg font-light mb-1">Insights Faculty Journal, Austin Seminary</div>
                            </h3>
                            <img src="img/download.jpeg" alt="Cover of Insights Faculty Journal, Fall 2014" className="rounded-md w-10 h-auto"/>
                        </div>
                        <br/><br/>                
                    </div>
                    <br/>
                    <div className="flex items-start mb-6 tm-menu-item">
                    <div className="ml-3 sm:ml-6 flex items-center gap-4">
                            <button onClick={() => handlePageChange('Lectures')} className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow text-left cursor-pointer">Lectures</button>
                           <div className="text-white text-md sm:text-lg font-light mb-1"></div>
                            <div className="text-white text-md sm:text-lg font-light"></div>
                        </div>   
                        <div classname="ml-3 sm:ml-6 flex justify-right">
                        <img src="img/Screenshot 2025-02-25 170105.png" alt="Screenshot of MLK lecture beginning with his life timeline" className="rounded-md w-10 h-auto" style={{ marginLeft: '80px' }} onClick={() => handlePageChange('Lectures')}/>                 
                    </div>
                    </div>
                    </div>     
                        </div>
                    </div>
                </div>
               <Footer />
            </div>
        </>
    );
}   
export default Portfolio;