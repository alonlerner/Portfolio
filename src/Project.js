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
            picUrl: props.picUrl,
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

    handlePhotoD() {
        console.log(this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim())
        if (this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim() === 'g==') {
            console.log('a')
            return (
                <table className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                    <tr>
                        <td className="project-td">
                            <a href="https://alonlerner.github.io/njit-trivia/">
                                <img src={this.state.videoUrl} height="180" style={{ padding:"2%" }}/>
                            </a>
                            <a href={this.state.codeUrl} title="Click to see the code" style={{ position: "relative", left: "40%" }}>
                                <img src={GitHub} alt="GitHub logo" style={{ width: 70 }} />
                            </a>
                        </td>
                        <td>
                            <p className="project-title"><strong><u>{this.state.title}</u></strong></p>
                            <p className="project-explanation">{this.state.explanation}</p>
                        </td>
                    </tr>
                </table>)
        }
    }

    render() {
        const styles = {
            width: "90%",
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
        if (window.innerWidth > 900) {
            if (this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim() === 'g==' || this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim() === 'png') {
                return (
                    <table style={styles} className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                        <tr>
                            <td className="project-td">
                                <a href={this.state.picUrl} style={{ display: "block", marginLeft: "auto", marginRight:"auto",width:"95%" }}>
                                    <img src={this.state.videoUrl} height="180" style={{ padding: "2%" }} />
                                </a>
                                <a href={this.state.codeUrl} title="Click to see the code" style={{ position: "relative", left: "40%" }}>
                                    <img src={GitHub} alt="GitHub logo" style={{ width: 70 }} />
                                </a>
                            </td>
                            <td>
                                <p className="project-title"><strong><u>{this.state.title}</u></strong></p>
                                <p className="project-explanation">{this.state.explanation}</p>
                            </td>
                        </tr>
                    </table>)
            }
            else {
                    return (
                        <table style={styles} className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                            <tr>
                                <td className="project-td">
                                    <video height="180" controls style={{ padding: "2%" }}>
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
        else {
            if (this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim() === 'g==' || this.state.videoUrl.substring(this.state.videoUrl.length - 3).trim() === 'png') {
                return (
                    <table style={styles} className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                        <tr>
                            <td>
                                <p className="project-title"><strong><u>{this.state.title}</u></strong></p>
                                <p className="project-explanation">{this.state.explanation}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-td">
                                <a href={this.state.picUrl} >
                                    <img src={this.state.videoUrl} height="160" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "76%" }} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", padding: "3%" }}>

                                <a href={this.state.codeUrl} title="Click to see the code"   >
                                    <img src={GitHub} alt="GitHub logo" width="70px" />
                                </a>
                            </td>
                        </tr>
                    </table>
                )
            }
            else {
                return (
                    <table style={styles} className="border-radiusImportant" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                        <tr>
                            <td>
                                <p className="project-title"><strong><u>{this.state.title}</u></strong></p>
                                <p className="project-explanation">{this.state.explanation}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-td">
                                <video controls className="project-video">
                                    <source src={this.state.videoUrl} type="video/mp4" />
                                </video>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", padding: "3%" }}>

                                <a href={this.state.codeUrl} title="Click to see the code"   >
                                    <img src={GitHub} alt="GitHub logo" width="70px" />
                                </a>
                            </td>
                        </tr>
                    </table>
                )
            }
        }
    }
}

export default Project