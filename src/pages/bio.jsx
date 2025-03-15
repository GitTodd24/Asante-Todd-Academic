import React from "react";
import Footer from "../components/Footer";

function Bio() {
       return (
        <>
            <h1>Biography</h1>
            <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/chair-1840011_1280.jpg">
                <div className="container mx-auto tm-container">
                    <div className="lg:items-stretch">
                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit">
                            <h2 className="text-3xl mb-6 tm-text-green">West Texas Roots</h2>
                            <p className="mb-6 text-lg leading-8">
                                Asante Todd is a native of Midland, Texas. He is a graduate of the University of Texas at Austin in Austin, TX, where he earned a Bachelor of Arts degree in Religious Studies and English. <br /><br /> He also holds a Master of Divinity degree from Austin Presbyterian Theological Seminary as well as an earned doctorate in Religious Studies from Vanderbilt University. <br /><br />
                                Todd served as professor of ethics for ten years at Austin Presbyterian Theological Seminary in Austin, Texas, and currently works as an independent scholar.
                            </p>
                           </div>
                        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-750px" }}>
                            <form action="" method="POST" className="text-lg">
                                <h2 className="text-3xl mb-6 tm-text-green">Selected Service</h2>
                                <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                                Texas State Legislature (Legislative Aid) <br /><br />
                                Austin Area Urban League <br /><br />
                                Texas Impact (Texas' oldest and largest faith and public policy organization)<br /><br />
                                Missionary Baptist Church, Texas <br /><br />
                                Presbyterian Church (USA) <br /><br />
                                <h2 className="text-3xl mb-6 tm-text-green">Selected Consulting</h2>
                                Odell Education <br /><br />
                                State of New York Education Department <br /><br />
                                <h2 className="text-3xl mb-6 tm-text-green">Selected Associations</h2>
                                The American Academy of Religion <br /><br />
                                The Society of Christian Ethics <br /><br />
                                Constructive Theology Workgroup <br /><br />
                                The Forum for Theological Exploration<br /><br />
                                The Wabash Center <br /><br />
                                The Lilly Endowment <br /><br />
                                The Louisville Institute <br /><br /> 
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

export default Bio;

