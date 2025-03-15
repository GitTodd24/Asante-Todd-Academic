import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Ethics({ handlePageChange }) {
    const navigate = useNavigate(); // Hook for navigation

    return <>
        <h1>Lectures</h1>
        <div id="ethics" class="parallax-window relative" data-parallax="scroll" data-image-src="img/pngtree-university-lecture-hall.jpg">
            <div class="container mx-auto tm-container">
                <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-8">
                    <div class="rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact w-auto max-w-fit display-block">


                        <h2 class="text-3xl mb-6 tm-text-green">What is the Good?</h2>
                        <p class="mb-6 text-lg leading-8">
                        Moral philosophy, ethics, and religous thought have been part of human existence in one way or another for as long as we know. How do we tell right from wrong? What is the right course of action? Each lecture is based on a key thinker or school and also includes remarks on the thinker's social context.<br></br><br></br>Courses in ethics include Moral Issues in Contemporary Society, Faith and Public Policy, Introduction to Moral Philosophy, and Introduction to Christian Ethics </p>
                        <div class="text-center">
                            <nav className="bg-grey shadow-md rounded-lg p-4 flex justify-center">
                                <ul className="space-x-8">
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
                            <h2 class="text-3xl mb-6 tm-text-green">Lectures in Religious Thought</h2>
                            <p class="input w-full bg-black border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold">
                            <div><u>Selected Lectures</u></div>
                                The Gospel Gone Social
                                <br></br><br></br>
                                Moral Issues in Youth Culture <br></br><br></br>
                                Bonhoeffer and Responsible Action<br></br><br></br>
                                Niebuhr on the Responsible Self<br></br> <br></br>
                                Tillich and Christian Existentialism <br></br><br></br>
                                Divine Command Ethics and Freedom for the World <br></br><br></br>
                                The Ethics of Equality and Nonviolent Resistance in MidCentury America<br></br><br></br>
                                Howard Thurman, Mysticism, and the Ethics of Freedom and Reconciliation <br></br><br></br>
                                Love, Equality, and Nonconformity in the Eyes of Rev. Dr. Martin Luther King Jr.<br></br><br></br>
                                Gustavo Gutierrez on Latin American Liberation <br></br><br></br>
                                Christian Feminist Ethics of Inclusive Care <br></br><br></br>
                                Womanist Ethics of Survival and Quality of Life <br></br><br></br>
                                Postliberal Christianity and the turn to Virtue <br></br><br></br>
                                A New Natural Law? Basic Forms of Good in a World of Difference<br></br><br></br>
                                Ecowomanism on Love and Recognition <br></br><br></br>
                                Process Theology, Respect, and Responsibility <br></br><br></br>
                                Queer Theology, Dance, and "Disorderly" Conduct <br></br><br></br>
                                On Reconciliation and Restitution in South Africa<br></br><br></br>
                                Healing and Peacemaking in South Africa 
                            </p>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </>

}

export default Ethics

