import React from "react"

const MyNav = props => {
    function dashClick() {
        window.location.href = '/mission'
    }
    function newsClick() {
        window.location.href = '/skills'
    }
    function messClick() {
        window.location.href = '/contact'
    }
    return (
        <nav style={styles.navCont}>
            <button style={styles.link} onClick={dashClick}>Mission</button>
            <button style={styles.link} onClick={newsClick}>Skills</button>
            <button style={styles.link} onClick={messClick}>Contact</button >
        </nav>
    )
}

export default MyNav

const styles = {
    navCont: {
        display: 'flex',
        flexDirection: 'column',
        margin: '100px 75px'
    },
    link: {
        fontSize: '20px',
        backgroundColor: '#548687',
        color: 'lightgrey',
        marginTop: '50px',
        borderRadius: 45,
        cursor: 'pointer'
    }
}
