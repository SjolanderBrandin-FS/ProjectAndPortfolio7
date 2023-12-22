import React from 'react'
import LFL1 from '../images/LFL1.png'
import LFL2 from '../images/LFL2.png'
import LFL3 from '../images/LFL3.png'
import RM1 from '../images/rm1.png'
import RM2 from '../images/rm2.png'
import RM3 from '../images/rm3.png'
import '../style.css'

function Project2() {

    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>Project 2</h1>
            <h2 style={styles.h2}>"C# Work"</h2>
            <p style={styles.p}>This section is to show my proficiency with C#/OOP.
                In the images below you will see two different projects. The first is a digital library,
                and the other is a data pull for tv series information. The digital library being a local API
                and the other pulling data from an external API.</p>
            <div style={styles.imgCont}>
                <img class="enlarge" style={styles.img} src={LFL1} alt='description' />
                <img class="enlarge" style={styles.img} src={LFL2} alt='description' />
                <img class="enlarge" style={styles.img} src={LFL3} alt='description' />
                <img class="enlarge" style={styles.img} src={RM1} alt='description' />
                <img class="enlarge" style={styles.img} src={RM2} alt='description' />
                <img class="enlarge" style={styles.img} src={RM3} alt='description' />
            </div>


        </section>
    )
}
export default Project2


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