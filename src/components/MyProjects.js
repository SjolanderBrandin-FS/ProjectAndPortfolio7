import React from "react"
//additional imports
import Golf from '../images/GolfBall.png'
import CsharpLogo from '../images/CsharpLogo.png'
import DesignLogo from '../images/DesginLogo.png'

const MyProjects = props => {
    function proj1Click() {
        window.location.href = '/project1'
    }
    function proj2Click() {
        window.location.href = '/project2'
    }
    function proj3Click() {
        window.location.href = '/project3'
    }
    return (
        <div style={styles.cont}>
            <h1 style={styles.title}>-Project Showcase-</h1>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Golf Data</h1>
                <button style={styles.btn} onClick={proj1Click}><img style={styles.img} src={Golf} alt='Project 1' /></button>
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>C# Work</h1>
                <button style={styles.btn} onClick={proj2Click}><img style={styles.img} src={CsharpLogo} alt='Project 2' /></button>
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Prep and Design</h1>
                <button style={styles.btn} onClick={proj3Click}><img style={styles.img} src={DesignLogo} alt='Project 3' /></button>
            </article >
        </div >

    )
}

export default MyProjects

const styles = {
    cont: {
        margin: '50px'
    },
    ad: {
        border: '1px dashed #60495A',
        background: 'lightgrey',
        padding: '15px',
        marginTop: '25px'
    },
    h1: {
        fontSize: '20px',
    },
    img: {
        cursor: 'pointer',
        height: '230px',
        width: '230px'

    },
    btn: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    title: {
        fontSize: '1.5rem'
    }
}