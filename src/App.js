import React from 'react'
// Addition Imports ========================================|
import { Routes, Route } from 'react-router-dom'
import MyHeader from './components/MyHeader'
import MyNav from './components/MyNav'
import MyAd from './components/MyAd'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Mission from './pages/Mission'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <div style={styles.container} >
      <MyHeader pgTitle='Sjotime Dev Portfolio' />
      <main style={styles.main}>
        <MyNav />
        <div style={styles.midCont}>
          <Routes>
            <Route path="/" element={<Mission />} />
            <Route path="mission" element={<Mission />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Skills />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <MyAd />
      </main>
    </div>
  )



}

export default App

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    height: 'auto',
    fontSize: '1rem',
    borderRadius: '2%',
  },
  main: {
    margin: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  midCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginLeft: '25px',
    marginRight: '25px',
    backgroundColor: 'darkgrey',
    borderRadius: '5%',
    border: '1px dashed #355834'
  }
}