import React from 'react'

// This UserForm component is currently being used as Thank You page for my Portfolio
// Normally this component would be showing the use of randomized API data, and displaying it.


const UserForm = props => {
    return (
        <article style={styles.article}>
            <div style={styles.textCont}>
                <h1 style={styles.h1}>Thanks</h1>
                <p style={styles.p}>I want to take the time to thank my family and friends that
                    that supported myself and my wife during the struggles we
                    endured over the past three years. I feel lucky to have such
                    a great support system that surrounds me and never fails.
                </p>
                <h2 style={styles.h2}>Special Thanks</h2>
                <p style={styles.p}>To my wife, you are the best partner and teammate in this crazy
                    world. Having you in my life helps to slow down the time and
                    enjoy the little things life has to offer. You make me a better
                    person.
                </p>
            </div>
        </article>
    )
}

export default UserForm

const styles = {
    article: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        width: '50%',
        height: '90%',
        border: '3px solid #548687',
        borderRadius: '10px',
        padding: '1rem'
    },
    textCont: {
        justifySelf: 'center',
        padding: '.2rem'
    },
    h1: {
        fontSize: '1.75rem',
        color: '#548687'
    },
    h2: {
        fontSize: '1.5rem',
        color: '#548687'
    },
    p: {
        margin: '1rem'
    }
}