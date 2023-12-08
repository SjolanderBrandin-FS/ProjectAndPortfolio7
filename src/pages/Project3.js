import React from 'react'
import Prep1 from '../images/Prep1.png'
import Prep2 from '../images/Prep2.png'
import WebAd from '../images/DesignWebAppAd.png'
import Watch from '../images/DesignWatch.png'
import Phone from '../images/DesignPhone.png'
import Ipad from '../images/DesigniPad.png'
import '../style.css'

function Project3() {

    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>Project 3</h1>
            <h2 style={styles.h2}>"Prep and Design"</h2>
            <p style={styles.p}>Below you will see images of my setup and prep workflow
                to include a "Style Tile" and a "Design System". Additionally you will find
                a mock Web Advertisement along with AdobeXD mockups for a project across a
                watch, Ipad, and mobile devices. Understanding what you want a project to look
                before you attempt to build it, is a huge part in creating a complete application
                that will satisfy the client.</p>
            <div style={styles.imgCont}>
                <img class="enlarge" style={styles.img} src={Prep1} alt='description' />
                <img class="enlarge" style={styles.img} src={Prep2} alt='description' />
                <img class="enlarge" style={styles.img} src={WebAd} alt='description' />
                <img class="enlarge" style={styles.img} src={Watch} alt='description' />
                <img class="enlarge" style={styles.img} src={Phone} alt='description' />
                <img class="enlarge" style={styles.img} src={Ipad} alt='description' />
            </div>


        </section>
    )
}
export default Project3


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '100%'

    },
    h1: {
        textAlign: 'center',
        color: '#548687',
        fontSize: '2rem'

    },
    h2: {
        textAlign: 'center',
        color: '#548687',
        fontSize: '1.5rem'
    },
    p: {
        textAlign: 'center',
        color: 'black',
        fontSize: '1.5rem'
    },
    imgCont: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        alignSelf: 'center',
        padding: '0rem'
    },
    img: {
        alignSelf: 'center',
        margin: '1rem',
        border: '.2rem solid #548687',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
}