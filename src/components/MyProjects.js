import React from "react"
//additional imports
import Placeholder from '../images/PH200px.jpg'

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
            <h1>- Showcase -</h1>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Project Title</h1>
                <button style={styles.btn} onClick={proj1Click}><img style={styles.img} src={Placeholder} alt='Project 1' /></button>
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Project Title</h1>
                <button style={styles.btn} onClick={proj2Click}><img style={styles.img} src={Placeholder} alt='Project 2' /></button>
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Project Title</h1>
                <button style={styles.btn} onClick={proj3Click}><img style={styles.img} src={Placeholder} alt='Project 3' /></button>
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
        height: '250px',
        width: '230px',
        paddingBottom: '50px',
        marginTop: '25px'
    },
    h1: {
        fontSize: '20px',
    },
    img: {
        cursor: 'pointer',

    },
    btn: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
}