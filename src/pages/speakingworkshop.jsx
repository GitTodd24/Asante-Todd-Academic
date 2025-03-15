import React from "react";
import Footer from "../components/footer";

function SpeakingWorkshop({ handlePageChange }) {
    return (
        <>
         {/*} <img src="img/Choir2Landscape.jpg" alt="Image Description" className="absolute" style={{ top: '10', left: '40', width: '100%', height: 'auto', marginTop: '10', zIndex: '1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} /> */}
            <h1 class="text-white" style={{ zIndex: '3', position: 'relative'}}>Speaking and Workshops</h1>
            <div id="SpeakingWorkshop" className="parallax-window relative" data-parallax="scroll" data-image-src="public/img/Choir2Landscape2.jpg">
                <div className="container mx-auto tm-container">
                    <div className="lg:items-stretch">
                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit" style={{ zIndex: '2', position: 'relative' }}>
                            <h2 className="text-3xl mb-6 tm-text-green">Workshops</h2>
                            <p className="mb-6 text-lg leading-8">
                                Monuments in Theologcal Perspective <br /><br />
                                The Golden Church <br /><br />
                                The Golden City <br /><br /> 
                            </p>
                            <button onClick={() => handlePageChange('Contact')} className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md cursor-pointer">
              <i className="far fa-comments mr-4"></i>
              Contact
              </button>
                          </div>
                        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-490px", zIndex: '2', position: 'relative' }}>
                            <form action="" method="POST" className="text-lg">
                                <h2 className="text-3xl mb-6 tm-text-green">Speaking Engagements</h2>
                                <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                                “A Theological View on Human Rights and the Limits of the State” (Invited Lecture, A National Summit on Torture by Evangelicals for Human Rights, Atlanta, GA) <br/> <br />The End of White Christian America? (Invited Lecture, Agudas Achim Congregaton and Public Religion Research Institute)<br /><br /> 
                                An American Conscience: On Reinhold Niebuhr (Invited Lecture, Harry Ransom Center, University of Texas)<br /><br />
                                Beloved Community at the Texas Border (Invited Lecture, Presbyterian Church, U.S.A., McAllen, TX)<br /><br /> 
                                "And Ethiopia Shall Stretch Forth Her Hand" (Invited Lecture, Huston Tillotson College, Austin, TX)<br/> <br />
                                Spirit, Law, and the Other: A Theological Approach to Bare Life Biopolitics (The Grandeur of Reason Conference, Rome, Italy) <br/> <br />                       
                                The Cruel Hand, the Birdcage, and the Fire this Time: A Theological Reflection on The New Jim Crow (Invited Lecture, Seminary of the Southwest, Austin, TX) <br />
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

export default SpeakingWorkshop;

