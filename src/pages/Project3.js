import React from 'react'
import PH200px from '../images/PH200px.jpg'
import PlaceHolder from '../images/Placeholder.jpg'
import '../style.css'

function Project3() {

    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>Project 3</h1>
            <h2 style={styles.h2}>"Project Name"</h2>
            <p style={styles.p}>Project Description Goes Here...</p>
            <div style={styles.imgCont}>
                <img class="enlarge" style={styles.img} src={PH200px} alt='description' />
                <img class="enlarge" style={styles.img} src={PH200px} alt='description' />
                <img class="enlarge" style={styles.img} src={PH200px} alt='description' />
                <img class="enlarge" style={styles.img} src={PlaceHolder} alt='description' />
                <img class="enlarge" style={styles.img} src={PlaceHolder} alt='description' />
                <img class="enlarge" style={styles.img} src={PlaceHolder} alt='description' />
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
        color: 'black'
    },
    imgCont: {
        width: '50%',
        alignSelf: 'center',
        padding: '0rem'
    },
    img: {
        margin: '1rem',
        border: '.2rem solid #548687',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
}