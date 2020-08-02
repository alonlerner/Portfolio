import React from "react"
import GitHub from "./photos/GitHub.png"
import LinkedIn from "./photos/LinkedIn.png"
import Email from "./photos/Email.jpg"

function ContactMe() {
    return (
        <div className="section-div" >
            <br />
            <h2>Contact Me</h2>
            <br />
            <table className="contact-me-table">
                <tr>
                    <td className="contact-me-td">
                        <a href="https://www.linkedin.com/in/alon-lerner-16586b19a/" title="Click to see my profile">
                            <img src={LinkedIn} alt="LinkedIn logo" style={{ width: 100 }} />
                        </a>
                    </td>
                    <td className="contact-me-td">
                        <a href="https://github.com/alonlerner" title="Click to see my profile">
                            <img src={GitHub} alt="GitHub logo" style={{ width: 100 }} />
                        </a>
                    </td>
                    <td className="contact-me-td">
                        <a href="mailto:lernera97@gmail.com" title="Click to email me">
                            <img src={Email} alt="Email logo" style={{ width: 100 }} />
                        </a>
                    </td>
                </tr>
            </table>
            <br/>
        </div>
    )
}

export default ContactMe