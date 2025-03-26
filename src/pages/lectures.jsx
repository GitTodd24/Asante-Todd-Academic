import React from "react";
import Footer from "../components/footer";

function Lectures({ handlePageChange }) {
       return (
        <>
            <img
          src="img/abcOutside.jpeg"
          alt="American Baptist College, Nashville, TN"
          className="absolute"
          style={{
            top: '3',
            left: '0',
            width: '100%',
            height: 'auto',
            zIndex: '1'
          }}
        />
              <h1 style={{ zIndex: '3', position: 'relative', color: 'black' }}>Course Lectures</h1>
          
            <div id="lectures" className="parallax-window relative" data-parallax="scroll" data-image-src="img/Choir2Landscape2.jpg">
                <div className="container mx-auto tm-container  py-24 sm:py-48">
               
                    <div className="lg:items-stretch">
                   
                        <div className="rounded-xl px-10 py-12 bg-white bg-opacity-80 tm-item-container-contact max-w-fit" style={{ zIndex: '2', position: 'relative', marginTop: "-50px" }}>
                            <h2 className="text-3xl mb-6 tm-text-green">Inspiring, Informative, Transformational</h2>
                            <p className="mb-6 text-lg leading-8">
                                My research spans the gamut from religion and politics to philosophy and history. I have published in a variety of venues, including academic journals, edited volumes, and manuscripts.<br /><br />
                                My teaching interests include courses in ethics, political theory, and the philosophy of religion. I served as professor of ethics for ten years at Austin Seminary in Austin, TX, and I have lectured at institutions including the University of Texas at Austin, Wesley Seminary in Washington D.C., and the annual Samuel DeWitt Proctor Conference. <br/><br/>
                                <b>Click a button below </b>to browse lectures by area of study OR click "Contact" in the top navigation bar to inquire about <span onClick={() => handlePageChange('Contact')} className="underline text-blue-500 cursor-pointer">lectures, adjunct, and online teaching</span>.
                                          </p>
                            <div className="text-center">
                            <nav className="bg-grey shadow-md rounded-lg p-4 flex justify-center">
            <ul className="space-x-8">
                <li>
                    <button
                        onClick={()=> handlePageChange("Lectures/Ethics")}
                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                        Christian Ethics   
                    </button>
                </li>
                <br />
                <li>
                    <button
                        onClick={()=> handlePageChange("Lectures/Hermeneutics")}
                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                        Hermeneutics
                    </button>
                </li>
                <br />
                <li>
                    <button
                        onClick={() => handlePageChange("Lectures/AfricanAmericanRelCul")}
                        className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                        African American Religion and Culture
                    </button>
                </li>
                <br></br>
                                    <li> 
                                        <button onClick={() => handlePageChange("Lectures/PublicTheology")} className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                               Public Theology
                                        </button>
                                    </li>
            </ul>
        </nav>
                            </div>
                        </div>
                        <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container" style={{ marginLeft: "575px", marginTop: "-1300px", zIndex: '2', position: 'relative' }}>
                            <form action="" method="POST" className="text-lg">
                                <h2 className="text-3xl mb-6 text-white">Selected Course Lectures</h2>
                                <div className="input bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                                    <div><u>Christian Ethics</u></div>
                                    Moral Issues in Modern Society<br /><br />
                                    Moral Issues in Youth Culture<br /><br />
                                    On Tillich and Christian Existentialism<br /><br />
                                    Howard Thurman, Mysticism, and the Ethics of Freedom and Reconciliation<br /><br />
                                    Love, Equality, and Nonconformity in the Eyes of the Rev. Dr. Martin Luther King Jr.<br /><br />
                                    Divine Command Ethics and Freedom for the World<br /><br />                                    Healing and Peacemaking in South Africa<br /><br />
                                    <div><u>Hermeneutics</u></div>
                                    Hermeneutics as Art<br /><br />
                                    On The Hermeneutics of Dialogue<br /><br />
                                    The Hermeneutics of Suspicion<br /><br />
                                    Narrative Hermeneutics<br /><br />
                                    <div><u>African American Religion and Culture</u></div>
                                    Is Beloved Community Still Possible?<br /><br />
                                    The Cultural Politics of Difference and African American Prophetic Christianity<br /><br />
                                    Pentecostalism<br /><br />
                                    The Black MegaChurch and Prosperity Gospel<br /><br />
                                    On Popular Traditional African Religions<br /><br />
                                    Introduction to Black Church Studies <br /><br />
                                    <div><u>Public Theology</u></div>
                                    What is Public Theology?<br /><br />
                                    Congregations in America<br /><br />
                                    The Golden Band: African American Spirituals as Public Theology<br /><br />
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

export default Lectures;