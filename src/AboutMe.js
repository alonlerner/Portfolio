import React from "react"

class AboutMe extends React.Component {
    constructor() {
        super()
        this.state = {
            MouseOver: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }
    

    handleMouseOver() {
        this.setState({ MouseOver: true })
    }

    handleMouseOut() {
        this.setState({ MouseOver: false })
    }

    render() {
        const styles = {
            border: "solid",
            borderColor: "darkgrey",
            borderRadius: 0,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            backgroundColor: "#1a1a1a",
            transition: "background-color 0.5s ease"
        }
        if (this.state.MouseOver) {
            styles.backgroundColor = "#262626"
        }

        return (
            <div className="section-div">
                <br />
                <h1>Alon Lerner</h1>
                <h2>Computer Science Student</h2>
                <br />
                <h2 id="about-me-section" > About Me</h2>
                <br />
                <div style={styles} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                    <p className="about-me-p">My name is Alon Lerner and I am a Division I student-athlete studying B.S. in Computer Science with a minors in Applied Mathematics and Data Analytics at New Jersey Institute of Technology. I started my coding career when I was 15 years old in high school and gained knowledge in different coding languages, such as: C, C++, Java, Python, HTML, CSS, JavaScript, and SQL. I am motivated to become a contributing part of the computer science community and keep developing my skills. I always strive to gain knowledge about modern technologies and incorporate them into my own unique projects. Computer Science is my passion and I hope to devote my future education and career to this field.</p>
                </div>
                <br />
            </div>
        )
    }
}


export default AboutMe
