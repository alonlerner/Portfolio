import React from "react"
import GitHub from "./photos/GitHub.png"


class Project extends React.Component {
    constructor(props) {
        super()
        this.state = {
            videoUrl: props.videoUrl,
            codeUrl : props.codeUrl,
            title : props.title,
            explanation: props.explanation,
            mouseOver: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver() {
        this.setState({ mouseOver: true })
    }

    handleMouseOut() {
        this.setState({ mouseOver: false })
    }

    render() {
        const styles = {
            width: "75%",
            border: "solid darkgrey",
            borderRadius: "0",
            marginLeft: "auto",
            marginRight: "auto",
            height: 300,
            backgroundColor: "#1a1a1a",
            transition: "background-color 0.5s ease"
        }
        if (this.state.mouseOver) {
            styles.backgroundColor = "#262626"
        }
        return (
            <table style={styles} className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                <tr>
                    <td className="project-td">
                        <video height="100" controls style={{ padding: "2%" }}>
                            <source src={this.state.videoUrl} type="video/mp4" />
                        </video>
                        <a href={this.state.codeUrl} title="Click to see the code" style={{ position: "relative", left: "40%" }}>
                            <img src={GitHub} alt="GitHub logo" style={{ width: 70 }} />
                        </a>
                    </td>
                    <td>
                        <p className="project-title"><strong><u>{this.state.title}</u></strong></p>
                        <p className="project-explanation">{this.state.explanation}</p>
                    </td>
                </tr>
            </table>
        )
    }
}

export default Project