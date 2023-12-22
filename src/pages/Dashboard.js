import React from 'react'

function Dashboard() {

    return (
        <section style={styles.container}>
            <p style={styles.h1}>Hello and thank you for tanking the time to look over my portfolio.
                This site and collection of work is for the purpose of showcasing my
                skills and knowledge of web design and development. Hope you Enjoy!
            </p>
        </section>
    )
}
export default Dashboard

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
    }
}