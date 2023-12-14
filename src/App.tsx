import headerImage from './assets/header_illustration_11.png'
import classes from './App.module.css'
import TopNav from './components/top-nav/TopNav'
import ProfileNav from './components/profile-nav'
import HeaderText from './components/header-text'

function App() {
  return (
    <>
      <header className={classes.header}>

        <div className={classes.headerRow}>
          <ProfileNav name='T'></ProfileNav>
          <TopNav arr={['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us']}></TopNav>
        </div>

        <div className={classes.headerRow}>
          <HeaderText arr={[
            'Virtual healthcare for you', 
            'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone', 
            'Consult today']}/>
            <div className={classes.imgBox}>
              <img src={headerImage} alt='Header Picture'/>
            </div>
        </div>
      </header>
    </>
  )
}

export default App