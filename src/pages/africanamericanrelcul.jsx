import { href, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

function AfricanAmericanRelCul({ handlePageChange }) {
    const navigate = useNavigate(); // Hook for navigation

    return <>
     <img
       src="img/Choir2Landscape2.jpg"
       alt="AI generated image of a church choir"
       className="absolute"
       style={{
         top: '3',
         left: '0',
         width: '100%',
         height: 'auto',
         zIndex: '1'
       }}
     />
        <h1 style={{ zIndex: '3', position: 'relative', color: 'white' }}>African American <br></br>Religion and Culture</h1>
        <div id="africanamericanrelcul" class="parallax-window relative" data-parallax="scroll" data-image-src="img/pngtree-university-lecture-hall.jpg">
            <div class="container mx-auto tm-container">
                <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-6">
                    <div class="rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact w-auto max-w-fit display-block" style={{ zIndex: '2', position: 'relative'}}>
                        <h2 class="text-3xl mb-6 tm-text-green">"Life for me ain’t been no crystal stair..."</h2>
                        <p class="mb-6 text-lg leading-8">
                            My research considers "life on these shores" for African Americans, taking account of both the similarities and differences among African Americans in life and thought. <br/> <br/> African American life has certainly been marked by struggle and survival. Yet, it has also been defined by elevation, transcendence, and freedom. My research seeks to take account of the full range of experiences in African American Religion and Culture.<br></br><br></br> </p>
                        <div class="text-center">
                            <nav className="bg-grey shadow-md rounded-lg p-4 flex justify-center">
                                <ul className="space-x-8">
                                    <li>
                                        <button onClick={()=> handlePageChange("Lectures/Ethics")} className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                Christian Ethics
                                        </button>
                                    </li>
                                    <br></br>
                                    <li> <button onClick={()=> handlePageChange("Lectures/Hermeneutics")} className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                Hermeneutics
                                            </button>
                                    </li>
                                    <br></br>
                                    <li> 
                                        <button onClick={() => handlePageChange("Lectures/AfricanAmericanRelCul")} className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
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
                    <div class="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container margin-top=200px" style={{ zIndex: '2', position: 'relative' }}>
                        <form action="" method="POST" class="text-lg">
                            <h2 class="text-3xl mb-6 text-white">Lectures in African American Religion and Culture</h2>
                            <p class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                                What is African American Religious and Cultural Criticism? <br></br><br></br>
                                Thurman and African American Mysticism <br></br><br></br>
                                Introduction to Black Church Studies <br></br><br></br>
                                Black Humanism <br></br><br></br>
                                Molefi K. Asante on Traditional African Religions <br></br><br></br>
                                19th Century Slave Religion <br></br><br></br>
                                19th Century African American Evangelical Christianity <br></br><br></br>
                                The Underground Railroad <br></br><br></br>
                                The Negro Church <br></br><br></br>
                                Pentecostalism <br></br><br></br>
                                On African American Pan-Africanism <br></br><br></br>
                                The Shrine of the Black Madonna <br></br><br></br>
                                Martin Luther Ling Jr. and the Beloved Community <br></br><br></br> 
                                Malcolm X, the Nation of Islam, and Black Nationalism <br></br><br></br> 
                                Black Liberation Theology <br></br><br></br>
                                Womanist Theology <br></br><br></br>
                                Cornel West, the Cultural Politics of Difference, and African American Prophetic Christianity <br></br><br></br>
                                Black Feminist Thought <br></br><br></br>
                                T.D. Jakes, the Black MegaChurch, and Prosperity Gospel <br></br><br></br>
                                The Golden Band: African American Spirituals as Public Theology 
                            </p>

                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </>

}

export default AfricanAmericanRelCul