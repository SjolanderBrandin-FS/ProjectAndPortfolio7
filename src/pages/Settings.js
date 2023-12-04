import React, { Component } from 'react'
import UserForm from '../components/UserForm'

// This Settings page is currently being used as Thank You page for my Portfolio
// Normally this page would be showing the settings options for the profile owners information.

class Settings extends Component {

    render() {
        return (
            <section style={styles.container} >
                <h1 style={styles.h1}>Settings Page</h1>
                <UserForm />
            </section >
        )
    }
}
export default Settings

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginBottom: '3rem'
    },
    h1: {
        color: '#548687'
    }
}