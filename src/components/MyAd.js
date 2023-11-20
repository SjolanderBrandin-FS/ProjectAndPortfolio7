import React from "react"
//additional imports
import Placeholder from '../images/PH200px.jpg'

const MyAd = props => {
    return (
        <div style={styles.cont}>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Ad Title</h1>
                <img src={Placeholder} alt='ad 1' />
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Ad Title</h1>
                <img src={Placeholder} alt='ad 2' />
            </article>
            <article style={styles.ad}>
                <h1 style={styles.h1}>Ad Title</h1>
                <img src={Placeholder} alt='ad 3' />
            </article>
        </div>

    )
}

export default MyAd

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
    }
}