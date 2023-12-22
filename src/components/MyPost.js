import React from 'react'
// Additional imports
import DeleteButton from './DeleteButton'
import ImageUrl from '../images/ProIcon.png'
import PostUrl from '../images/Img Placeholder.jpg'
import MyIcons from './MyIcons'

const MyPost = props => {
    return (
        <article style={styles.postCont}>
            <header style={styles.headCont}>
                <div style={styles.iconCont}>
                    <MyIcons IconImg={ImageUrl} style={styles.icon} />
                    <p style={styles.p}>Associated Profile Name</p>
                </div>
                <DeleteButton btnText='Remove' style={styles.btn} />
            </header>
            <p style={styles.p}>Description of post that was captured by the FORM INPUT above</p>
            <MyIcons IconImg={PostUrl} style={styles.img} />
        </article>
    )
}
export default MyPost

const styles = {
    postCont: {
        disply: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        width: '100%',
        marginTop: '50px',
        backgroundColor: 'darkgrey'
    },
    headCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px'
    },
    iconCont: {
        display: 'flex',
        flexDirection: 'row'
    },
    img: {
        height: '500px',
        width: '500px',
        flex: '3',
    },
    p: {
        marginTop: '10px'
    }

}