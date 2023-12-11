import React from 'react'
import '../style.css'
import api1 from '../images/api1.png'
import api2 from '../images/api2.png'
import api3 from '../images/api3.png'
import api4 from '../images/api4.png'
import api5 from '../images/api5.png'
import api6 from '../images/api6.png'

function Project1() {
    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>Project 1</h1>
            <h2 style={styles.h2}>Golf Rankings</h2>
            <p style={styles.p}>This project was designed to showcase my overall knowledge and skill.
                The build is for golf lovers to track the 'live' PGA Tour rankings of professional golfers.
                Additionally it has a "Favorites" feature allowing you to store specific golfers on a seperate
                page and list. Below are images of the application to show the basic design and function of the site.
                Since this project is very backend intensive, there is a minimalist approach in design,
                which helps lend to the future option of creating this as a phone application. This project
                consist of HTML, SCSS/CSS, JavaScript, using React.</p>
            <div style={styles.imgCont}>
                <img class="enlarge" style={styles.img} src={api1} alt='description' />
                <img class="enlarge" style={styles.img} src={api2} alt='description' />
                <img class="enlarge" style={styles.img} src={api3} alt='description' />
                <img class="enlarge" style={styles.img} src={api4} alt='description' />
                <img class="enlarge" style={styles.img} src={api5} alt='description' />
                <img class="enlarge" style={styles.img} src={api6} alt='description' />
            </div>


        </section>
    )
}
export default Project1


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