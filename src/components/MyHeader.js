import React from "react"
//Import Images and Icons:
import ImageUrl from '../images/ProIcon.png'
import MyIcons from './MyIcons'
import { FaEnvelope, FaBell } from 'react-icons/fa'

//header component
const MyHeader = props => {
    function setClick() {
        window.location.href = '/settings'
    }
    return (
        <header style={styles.header}>
            <h1 style={styles.left}>Sjotime Development</h1>
            <section style={styles.rightSide}>
                <button style={styles.icon}><FaEnvelope /></button>
                <button style={styles.icon}><FaBell /></button>
                <button onClick={setClick} style={styles.icon}><MyIcons IconImg={ImageUrl} /></button>
            </section>
        </header>
    )
}
export default MyHeader

//Css in Js:

const styles = {
    header: {
        padding: '1%',
        backgroundColor: '#548687',
        color: 'Black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid lightgrey'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10px',
        cursor: 'default'
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%',
        justifyContent: 'center'
    },
    inputIcon: {
        background: '#ddd',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        width: 'auto'
    },
    inputwithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px'
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
        marginLeft: '3%'
    },
    icon: {
        margin: '5px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#548687',
        cursor: 'pointer'
    }
}