import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring'

const Logout = () => {

    // Animation logic
    let allTexts = ["Plan", "Mood", "Feelings", "Goals", "Thoughts", "Vision", "Ideas", "Targets"]
    const [currentText, setCurrentText] = useState(allTexts[0])
    let text = document.getElementById("lo-animatingText");

    useEffect(() => {
        const setInt = setInterval(() => {
            const currentIndex = allTexts.indexOf(currentText)
            const nextIndex = (currentIndex + 1) % allTexts.length
            setCurrentText(allTexts[nextIndex])
        }, 4000);
        // cleanup line executes after the component is unmounted, till then the code runs
        return () => clearInterval(setInt)
    }, [allTexts, currentText])

    // React-useSpring effect WORD Effect
    const animSpring = useSpring({
        from: { opacity: 0, transform: 'rotateX(45deg) translateY(100%)' },
        to: { opacity: 1, transform: 'rotateX(0deg) translateY(0%)' },
        reset: true,
    });

    // React-useSpring effect COUNTER Effect
    const { count } = useSpring({
        from: { count: 0, opacity: 0 },
        to: { count: 150000, opacity: 1 }
    })
    // interpolate property is used here and it's working but find a way to do without using interpolate
    // becuase it's depricated now

    return (
        <>
            <div className='lo-container mt-3'>

                {/* ***************************Hero Sectionc****************************** */}

                <div className="lo-heroSection my-3">
                    <h1 className='lo-headings'>The Simplest Way To Keep Notes</h1>
                    <p>Simplifying Your Thoughts - Organize, Create, and Access Your Ideas Effortlessly, All Your Notes At One Place.</p>
                    <button className="btn btn-primary">Create Your Free Account</button>
                </div>

                {/* ***************************Hero Animation****************************** */}

                <div className='lo-animationContainer m-5'>
                    <h1 className="lo-headings">What Is Your Today's
                        <animated.div style={{ ...animSpring }} id='lo-animatingText'>{currentText + " ?"}</animated.div>
                    </h1>
                </div>

                {/* ***************************Hero Sectionc mid****************************** */}

                <div className="lo-mid border-bottom pb-3">

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

                {/* ***************************Hero Sectionc End****************************** */}

                <div className="lo-end my-5">
                    <h1 className="lo-headings text-center mb-4">What people are saying</h1>
                    <div className="row">
                        <p className="col-md-4">If you're not using iNoteBook, you're missing out.<div>TechCrunch</div></p>
                        <p className="col-md-4">If you're looking for a cross-platform note-taking tool with just enough frills, it's hard to look beyond iNoteBook.<div>MacWorld</div></p>
                        <p className="col-md-4">If you want a truly distraction-free environment then you can't do better than iNoteBook for your note-taking needs.<div>Zapier</div></p>
                    </div>

                    {/* Counter animation */}
                    <div className="counter my-5">
                        <h1 className="lo-headings text-center">Join The Family Of <animated.div className="d-inline-block">{count.interpolate((val) => Math.floor(val))}</animated.div> Users On iNoteBook</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Logout