import Footer from "../components/footer";
import React, { useState, useEffect } from "react";

function Contact(){
    // State to manage form data
    const [formData, setFormData] = useState({
        nameoforg: "",
        primarycontactfirstandlastname: "",
        primarycontactemail: "",
        primarycontactphone: "",
        secondarycontactfirstandlastname: "",
        secondarycontactemail: "",
        secondarycontactphone: "",
        eventname: "",  
        eventdate: "",
        eventtime: "",
        venuename: "",
        keynote: "",
        eventdescription: "",
        venueaddress1: "",
        venueaddress2: "",
        venueaddressunit: "",
        venuecity: "",
        venuestate: "",
        venuezipcode: "",
        eventrole: "",
        eventaudience: "",
        eventmedia: "",
        eventpromo: "",
        honor: "",
        speakersales: "",
        eventairport: "",
        eventexpenselistair: "",
        eventexpenselistcar: "",
        eventexpenselisthotel: "",
        eventexpenselistmeals: "",
        speakerbudget: "",
        responsedeadline: "",
        other: "",
    });

    const [status, setStatus] = useState("");

     // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input changes and save data to LocalStorage
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        saveFormDataToLocalStorage(updatedFormData);
    };

    // Save form data to LocalStorage
    const saveFormDataToLocalStorage = (data) => {
        localStorage.setItem("invitationFormData", JSON.stringify(data));
    };

    // Retrieve form data from LocalStorage on page load
    useEffect(() => {
        const savedFormData = localStorage.getItem("invitationFormData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    // Submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to backend API
            const response = await fetch("/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit the form. Please try again.");
            }

            const result = await response.json();

            // If successful, clear LocalStorage and show success message
            if (result.success) {
                localStorage.removeItem("invitationFormData"); // Clear saved data
                setStatus("Form submitted successfully!");
                window.alert("Form successfully submitted!");
            } else {
                setStatus("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setStatus("An error occurred while submitting the form.");
        }
    };

    return <>
        <h1 className="text-white">Contact</h1>
        <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/St Lukes Inside Prayer.jpg">

        <div className="container mx-auto tm-container relative">
       
            <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch">

            
            
                <div className="flex-1 rounded-xl px-10 py-12 m-5 bg-white bg-opacity-80 tm-item-container-contact">
                    
                    <h2 className="text-3xl mb-6 tm-text-green">Contact Dr. Todd.<br/><br/>Discuss.<br/>Consult.<br/>Invite.<br/></h2>
                    <p className="mb-6 text-lg leading-8">
                    Thanks for stopping by the site! I hope that you enjoyed your visit. You may contact Dr. Todd for further information or needed services by filling out the form to the right or by using the contact information below. 
                    </p>
                    <p className="mb-10 text-lg">
                        <span><a href="mailto:drasantetodd@gmail.com" className="ml-4 hover:text-yellow-600 transition">Email: professor@asantetodd.com</a></span>
                        <br/><br/>
                        <span className="text-yellow-600 transition">Place of Employment: <br/>Actively Seeking Adjunct and Online Opportunities</span>                        
                    </p>
                    <div className="text-center">
                      
                    </div>    
                    <img src="img/AsanteStreet.jpg" alt="Image Description" className="absolute scroll" style={{ top: '20%', left: '76%', transform: 'translate(-50%, -50%)', zIndex: '10', width: '200px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />                
                </div>
                
                <div className="flex-1 rounded-xl p-12 pb-14 m-5 bg-black text-center bg-opacity-50 tm-item-container">
                <br/><br/>
                      <button 
                                    className="inline-block text-white text-2xl py-6 rounded-lg tm-bg-green" style={{ cursor: "default", backgroundColor: "rgb(45, 160, 217)", marginRight: '20px'  }}>
                                    <u>Invitation Contact Form</u>
                                </button>
                                
                             

                                <br/><br/>
                    <form onSubmit={handleSubmit} className="mb-6 text-lg leading-8" action="" method="POST" className="text-lg">
                    <h2 className="bg-black border-b bg-opacity-0 text-white text-left py-4 mb-4 tm-border-gold" ><b>About Your Organization</b></h2>
                    
                    <label className="text-white" style={{ marginRight: '225px'  }} htmlFor="nameoforg">Name of Organization*</label>
                        <input type="text" name="nameoforg" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '90px'  }}htmlFor="primarycontactfirstandlastname">Primary Contact's First and Last Name*</label>
                        <input type="text" name="primarycontactfirstandlastname" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '210px'  }}htmlFor="primarycontactemail">Primary Contact's Email*</label>
                        <input type="email" name="primarycontactemail" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                     <label className="text-white" style={{ marginRight: '135px'  }}htmlFor="primarycontactphone">Primary Contact's Phone Number</label>
                        <input type="number" name="primarycontactphone" className="input w-full bg-black rounded-xl border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder=""/>

                    <label className="text-white" style={{ marginRight: '70px'  }}htmlFor="secondarycontactfirstandlastname">Secondary Contact's First and Last Name*</label>
                        <input type="text" name="secondarycontactfirstandlastname" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '190px'  }}htmlFor="secondarycontactemail">Secondary Contact's Email*</label>
                        <input type="email" name="secondarycontactemail" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                     <label className="text-white" style={{ marginRight: '115px'  }}htmlFor="secondarycontactphone">Secondary Contact's Phone Number</label>
                        <input type="number" name="secondarycontactphone" className="input w-full bg-black rounded-xl border-b bg-opacity-0 text-white px-0 py-4 mb-4 tm-border-gold" placeholder=""/>

                    <h2 className="bg-black border-b bg-opacity-0 text-white pr-1 py-4 mb-4 tm-border-gold"><b>About Your Event</b></h2>
                    <label className="text-white" style={{ marginRight: '310px'  }}htmlFor="eventname">Event Name*</label>
                        <input type="text" name="eventname" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '180px'  }}htmlFor="eventdate">Event Date (YYYY/MM/DD)*</label>
                        <input type="text" name="eventdate" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                        <label className="text-white" style={{ marginRight: '200px'  }}htmlFor="eventtime">Event Start Time (am/pm)*</label> 
                        <input type="text" name="eventtime" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '190px'  }}htmlFor="eventdescription">Event Purpose/Description*</label>
                        <textarea rows="6" name="eventdescription" className="input w-full rounded-xl bg-black border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required=""></textarea>

                    <label className="text-white" style={{ marginRight: '300px'  }}htmlFor="venuename">Venue Name*</label>    
                        <input type="text" name="venuename" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" />

                     <label className="text-white" style={{ marginRight: '275px'  }}htmlFor="venueaddress1">Venue Address*</label>
                        <input type="text" name="venueaddress1" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />
                        <input type="text" name="venueaddress2" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" />
                     <label className="text-white" style={{ marginRight: '240px'  }}htmlFor="venueaddressunit">Unit/Suite #</label>
                         <input type="text" name="venueaddressunit" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" />
                    <label className="text-white" style={{ marginRight: '290px'  }}htmlFor="venuecity">City*</label>
                        <input type="text" name="venuecity" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />
                    <label className="text-white" style={{ marginRight: '280px'  }}htmlFor="venuestate">State*</label>
                         <input type="text" name="venuestate" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />
                    <label className="text-white" style={{ marginRight: '250px'  }}htmlFor="venuezipcode">Zip Code*</label>
                         <input type="text" name="venuezipcode" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '205px'  }}htmlFor="eventrole">Dr. Todd's Role in Event?*</label>
                        <input type="text" name="eventrole" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />
                   
                     <label className="text-white" style={{ marginRight: '320px'  }}htmlFor="eventaudience">Audience?*</label>
                        <input type="text" name="eventaudience" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" /> 

                     <label className="text-white" style={{ marginRight: '165px'  }}htmlFor="keynote">Keynote Theme/Topic/Title?*</label>
                          <input type="text" name="keynote" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />

                     <label className="text-white" style={{ marginRight: '70px'  }}htmlFor="eventmedia">What media will be present at the event?*</label>
                        <textarea rows="4" name="eventmedia" className="input w-full rounded-xl bg-black border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required=""></textarea>

                     <label className="text-white" style={{ marginRight: '125px'  }}htmlFor="eventpromo">How is this event being promoted?*</label>
                        <input type="text" name="eventpromo" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                     <label className="text-white text-left" style={{ marginRight: '85px'  }}htmlFor="speakersales"> Speaker will have products (books, etc.) available for your event. Would you be willing to provide 2-3 people to help sell speaker's products?*</label>
                     <br/><br/>
            
            <div classname="flex flex row">
            <label className="text-white" htmlFor="speakersales" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="speakersales" className="input bg-black text-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="speakersales" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="speakersales" className="input bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                      

                    <h2 className="bg-black border-b bg-opacity-0 text-white pr-1 py-4 mb-4 tm-border-gold"><b>About Travel and Accommodations</b></h2>

                    <label className="text-white" style={{ marginRight: '160px'  }}htmlFor="eventairport">Closest Airport to Event Venue*</label>
                        <input type="text" name="eventairport" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                    <label className="text-white" style={{ marginRight: '125px'  }}htmlFor="eventexpenselist">Expenses covered by organization:*</label>
                <br/><br/>
            <label className="text-white text-left bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" htmlFor="eventexpenselistair" style={{ marginRight: "50px" }}>Air Travel</label>

            <div classname="flex flex row">
            <label className="text-white" htmlFor="eventexpenselistair" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="eventexpenselistair" className="input bg-black text-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="eventexpenselistair" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="eventexpenselistair" className="input bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                        <br/>
            <label className="text-white text-left bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" htmlFor="eventexpenselistcar" style={{ marginRight: "50px" }}>Car Service</label>
            <div classname="flex flex row">
            <label className="text-white" htmlFor="eventexpenselistcar" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="eventexpenselistcar" className="input bg-black text-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="eventexpenselistcar" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="eventexpenselistcar" className="input bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                        <br/>
            <label className="text-white text-left bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" htmlFor="eventexpenselisthotel" style={{ marginRight: "50px" }}>Hotel</label>
            <div classname="flex flex row">
            <label className="text-white" htmlFor="eventexpenselisthotel" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="eventexpenselisthotel" className="input bg-black text-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="eventexpenselisthotel" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="eventexpenselisthotel" className="input bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                        <br/>
            <label className="text-white text-left bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold" htmlFor="eventexpenselistmeals" style={{ marginRight: "50px" }}>Meals</label>
            <div classname="flex flex row">
            <label className="text-white" htmlFor="eventexpenselistmeals" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="eventexpenselistmeals" className="input bg-black text-white rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="eventexpenselistmeals" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="eventexpenselistmeals" className="input bg-black rounded-xl border-b text-black px-0 py-4 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                        <br/>
                    <label className="text-white" style={{ marginRight: '305px'  }}htmlFor="honor">Honorarium?*</label>
                    <br/>
                   
                    <div classname="flex flex row">
                    
            <label className="text-white" htmlFor="honor" style={{ marginRight: "10px" }}>Yes</label>
                         <input type="radio" name="honor" className="input bg-black text-white rounded-xl border-b text-black px-0 mb-4 tm-border-gold"  style={{ marginRight: "15px" }}
                        placeholder="Yes" required="" />
            <label className="text-white" htmlFor="honor" style={{ marginRight: "10px" }}>No</label>
                        <input type="radio" name="honor" className="input bg-black rounded-xl border-b text-black px-0 mb-4 tm-border-gold"
                        placeholder="No" required="" />
                    </div>
                    
                    <br/>

                     <label className="text-white" style={{ marginRight: '10px'  }}htmlFor="speakerbudget">What is your budget for a speaker for this event?*</label>
                        <input type="number" name="speakerbudget" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold"
                        placeholder="" required="" />

                         <label className="text-white" style={{ marginRight: '75px'  }}htmlFor="responsedeadline">Deadline for Response? (YYYY/MM/DD)*</label> 
                        <input type="text" name="responsedeadline" className="input w-full bg-black rounded-xl border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder="" required="" />
                        <br/>
                        <label className="text-white" style={{ marginRight: '230px'  }}htmlFor="other">Additional Information</label>
                        <textarea rows="6" name="other" className="input w-full rounded-xl bg-black border-b text-white px-0 py-4 mb-4 tm-border-gold" placeholder=""></textarea>
                        <br/><br/>
                <div className="text-center">
                            <button type="submit" className="text-white hover:text-yellow-500 transition" style={{ backgroundColor: "rgb(154, 12, 15)" }}>Submit Invitation Contact Form</button>
                        </div>                        
                      </form>
                     
                </div>
                
            </div>
            <Footer/>
        </div>        
    </div>   
        </>
}

export default Contact;