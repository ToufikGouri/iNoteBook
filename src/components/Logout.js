import React from 'react'

const Logout = () => {

    // Animation logic
    let allTexts = ["plan", "mood", "feelings", "goals", "thoughts", "vision", "targets"]
    let text = document.getElementById("lo-animatingText");
    setInterval(() => {
        text.innerHTML = Math.random()
        // multily by length of the array and take a word
    }, 1000);
    // text.style.color = "yellow"

    return (
        <>
            <div className='lo-container mt-3'>

                {/* ***************************Hero Sectionc****************************** */}

                <div className="lo-heroSection my-3">
                    <h1 className='lo-headings'>The simplest way to keep notes</h1>
                    <p>Simplifying Your Thoughts - Organize, Create, and Access Your Ideas Effortlessly, All Your Notes At One Place.</p>
                    <button className="btn btn-primary">Create Your Free Account</button>
                </div>

                {/* ***************************Hero Animation****************************** */}

                <div className='lo-animationContainer m-5'>
                    <h1 className="lo-headings">What's your <span id='lo-animatingText'>idea</span> today ?</h1>
                </div>

                {/* ***************************Hero Sectionc mid****************************** */}

                <div className="lo-mid">

                    <div className="row lo-imgParent">
                        <div className="col-md-6">
                            <div className="img-container">
                                <img src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 lo-imgContent d-flex align-items-center">
                            <h2 className='text-center'>Create, Edit And Manage All Your Notes Easily Like Never Before.</h2>
                        </div>
                    </div>

                    <div className="row lo-imgParent">
                        <div className="col-md-6 lo-imgContent d-flex align-items-center">
                            <h2 className="text-center">Acces Anytime, Anywhere And Across All The Devices With One Account.</h2>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="img-container">
                                <img src="https://img.freepik.com/free-vector/people-with-web-design-concept-illustration_53876-66097.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row lo-imgParent">
                        <div className="col-md-6">
                            <div className="img-container">
                                <img src="https://img.freepik.com/premium-vector/laptop-password-notification-vector-phone-security-cellphone-access-user-authentication-login-password-protection-technology_545399-1765.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 lo-imgContent d-flex align-items-center">
                            <h2 className="text-center">Be Tension Free With iNoteBook's Security And Encryption.</h2>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Logout