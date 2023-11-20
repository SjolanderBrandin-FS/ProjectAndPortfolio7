import React from 'react'

function Contact() {
    return (
        <section style={styles.container}>
            <h1 style={styles.h1}>Contact Me At...</h1>
            <ul style={styles.listCont}>
                <li>Phone(Cell): 541-788-9987</li>
                <li>Email: SjotimeDev@Gmail.com</li>
                <li>Email(Alt): Brandin.Sjolander@Gmail.com</li>
                <li>Mailing Address: 506 W Centennial Blvd, #107
                    Springfield OR, 97477
                </li>
            </ul>
        </section>
    )
}
export default Contact

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    h1: {
        textAlign: 'center',
        color: '#548687'
    },
    listCont: {
        margin: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '2rem',
        fontSize: '1.5rem',
        fontWeight: 'bold'

    }
}