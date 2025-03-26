import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

function PublicTheology({ handlePageChange }) {
    const navigate = useNavigate(); // Hook for navigation

    return <>
         <img
       src="img/LincolnMemorial.jpeg"
       alt="Lincoln Memorial"
       className="absolute"
       style={{
         top: '3',
         left: '0',
         width: '100%',
         height: 'auto',
         zIndex: '1'
       }}
     />
        <h1 style={{ zIndex: '3', position: 'relative', color: 'white' }}>Public Theology</h1>
        <div id="publictheology" class="parallax-window relative" data-parallax="scroll" data-image-src="img/pngtree-university-lecture-hall.jpg">
            <div class="container mx-auto tm-container">
                <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-8">
                    <div class="rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact w-auto max-w-fit display-block" style={{ zIndex: '2', position: 'relative' }}>

                        <h2 class="text-3xl mb-6 tm-text-green">Religion & American Public Life</h2>
                        <p class="mb-6 text-lg leading-8">
                        Public theology studies at the intersection of social reality and religous commitments. While church and state remain separate, public theology intervenes in religion and American public life. <br/> <br/> The relationship between religion and American public life, present even during the nation's hallmark founding of political disestablishment, remains important today. <br></br><br></br>Courses in public theology include Introduction to Public Theology, Faith and Public Policy, and Religion and American Public Life. </p>
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
                            <h2 class="text-3xl mb-6 tm-text-green">Lectures in Public Theology</h2>
                            <p class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                            <div><u>Selected Lectures</u></div>
                                The New Pluralism and the Search for A Common Good
                                <br></br><br></br>
                                From Civil Religion to Public Theology<br></br><br></br>
                                Congregations in America <br></br><br></br>
                                The Church in the Digital Age<br></br><br></br>
                                Religious Perspectives in the American Colonies<br></br><br></br>
                                Public Theology and the Problem of Naturalism <br></br><br></br>
                                Church, State, and Disestablishment in American Public Life <br></br><br></br>
                                The Churching of America <br></br><br></br>
                                On Religion, Nature, and Health <br></br><br></br>
                                Postliberal Christianity and the turn to Virtue <br></br><br></br>
                                What is Public Theology?<br></br><br></br>
                                Christian Fundamentalism <br></br><br></br>
                                Christian Realism<br></br><br></br>
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

export default PublicTheology;

