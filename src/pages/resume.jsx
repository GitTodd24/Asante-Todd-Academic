import Footer from "../components/footer";


function Resume({handlePageChange}){
    return <>
    <div id="resume" class="parallax-window" data-parallax="scroll" data-image-src="img/church-3481187.jpg">
    <h1 style={{ zIndex: '2', position: 'relative', color: 'black' }}>Curriculum Vitae</h1>
        <div class="container mx-auto tm-container py-24 sm:py-48">
        {/*<img src="img/lightBulb.jpeg" alt="Image Description" className="absolute" style={{ top: '0', left: '0', width: '100%', height: 'auto', zIndex: '1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> */}
            <div class="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4" style={{ zIndex: '2', position: 'relative' }}>
                <div class="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                    <h2 class="mb-6 tm-text-green text-4xl font-medium"><a href="/resume.pdf">Download <br></br>Curriculum Vitae</a></h2>
                </div>
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

export default Resume;