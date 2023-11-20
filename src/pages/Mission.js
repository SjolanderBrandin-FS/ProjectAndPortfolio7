import React from 'react'
import BSjolanderHike from '../images/BSjolanderHike.png'

function Mission() {

    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>The Objective</h1>
            <div style={styles.imgCont}>
                <img style={styles.img} src={BSjolanderHike} alt='map of outdoor library locations' />
            </div>
            <div style={styles.stateCont}>
                <p>As a new developer in the industry I have built this portfolio as a way to showcase my skills and potential.
                    Through the portfolio itself and the additional projects I aim to please someone that is looking for new, but
                    moldable and efficient skills. I enjoy backend work and function over form. I have substantial prior experience
                    with team based environments, and the confidence to lead or speakup when needed. I'm a great communicator and
                    take pride in my ability to absorb critisism and grow from the experience. I completed my
                    bachelors degree at an accelerated rate, at an age of 31+ years
                    of age with zero coding experience before starting school. I'm not afraid of the unknown, instead I am eager
                    to vault forward into tomorrow with the confidence that I am capable rising to the challenge.
                </p>
            </div>
        </section>
    )
}
export default Mission

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '100%'

    },
    h1: {
        textAlign: 'center',
        color: '#548687'
    },
    img: {
        height: '75%',
        width: '75%'
    },
    imgCont: {
        margin: '1rem'
    },
    stateCont: {
        alignSelf: 'center',
        margin: '3rem',
        fontSize: '1.25rem',
        fontWeight: 'Bold'
    }
}