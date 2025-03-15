import { href, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Hermeneutics({ handlePageChange }) {
    const navigate = useNavigate(); // Hook for navigation

    return <>
        <h1>Lectures</h1>
        <div id="hermeneutics" class="parallax-window relative" data-parallax="scroll" data-image-src="img/pngtree-university-lecture-hall.jpg">
            <div class="container mx-auto tm-container">
                <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-8">
                    <div class="rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact w-auto max-w-fit display-block">


                        <h2 class="text-3xl mb-6 tm-text-green">The German Tradition; <br/> The French Connection; <br/> The American Pragmatist Rapprochment</h2>
                        <p class="mb-6 text-lg leading-8">
                             My research in hermeneutics takes account of the rich traditions and vibrant discourses on philosophical, theological, and biblical hermeneutics in the North Atlantic context. <br/> <br/> In our time together, we read world-transformationsal texts, interpret inspiring art, and understand life itself anew. <br></br><br></br></p>
                        <div class="text-center">
                            <nav class="bg-grey shadow-md rounded-lg p-4 flex justify-center">
                                <ul class="space-x-8">
                                    <li>
                                        <button onClick={()=> handlePageChange("Lectures/Ethics")} className="inline-block text-white text-2xl pl-10 pr-12 py-6 rounded-lg transition tm-bg-green">
                                                Religous Thought
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
                    <div class="flex-1 rounded-xl p-12 pb-14 m-5 bg-black bg-opacity-50 tm-item-container margin-top=200px">
                        <form action="" method="POST" class="text-lg">
                            <h2 class="text-3xl mb-6 tm-text-green">Lectures in Hermeneutics</h2>
                            <p class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                                Historical-Critical Hermeneutics <br></br><br></br>
                                Hermeneutcs as Art <br></br><br></br>
                                A Hermeneutics of the Human Sciences <br></br> <br></br>
                                On the Hermeneutics of Facticity <br></br><br></br>
                                The Hermeneutics of Dialogue <br></br><br></br>
                                Hermeneutics as Revelation <br></br><br></br>
                                The Hermeneutics of Suspicion <br></br><br></br>
                                Narrative Hermeneutics <br></br><br></br>
                                Art as Experience <br></br><br></br>
                                "Hermeneutics" and the Mirror of Nature <br></br><br></br>
                                Narrative Criticism, Cultural Studies, and Biblical Hermeneutics <br></br><br></br>
                                The Mujerista Hermeneutics of Suspicion <br></br><br></br>
                                Womanist Hermeneutics <br></br><br></br>
                                Black Liberationist Hermeneutics <br></br><br></br>
                                The Hermeneutics of Communication <br></br> <br></br>
                                On the Relation of Hermeneutics to Politics<br/><br/>
                                The Golden Standard in Art: On African American Religious Aesthetics 
                            </p>

                        </form>
                    </div>
                </div>
               <Footer />
            </div>
        </div>
    </>

}

export default Hermeneutics