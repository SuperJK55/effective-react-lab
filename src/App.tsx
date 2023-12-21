import headerImage from './assets/header_illustration_1.png'
import classes from './App.module.css'
import TopNav from './components/top-nav/TopNav'
import LogoDiv from './components/logo-div'
import HeaderText from './components/header-text'
import OurServices from './components/our-services'
import CardElement from './components/card-element/CardElement'

import search_img from './assets/svg_cards/search.svg'
import pharmacy_img from './assets/svg_cards/pharmacy.svg'
import consultation_img from './assets/svg_cards/consultation.svg'
import details_img from './assets/svg_cards/details.svg'
import emergency_img from './assets/svg_cards/emergency.svg'
import tracking_img from './assets/svg_cards/tracking.svg'
import Footer from './components/footer'



function App() {
  return (
    <>
      <header className={classes.header}>

        <div className={classes.headerRow}>
          <LogoDiv name='T'/>
          <TopNav arr={['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us']}/>
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

      <OurServices>
        <CardElement title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={search_img}/>
        <CardElement title='Online pharmacy' subtitle="Buy  your medicines with our mobile application with a simple delivery system" logo={pharmacy_img}/>
        <CardElement title='Consultation' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={consultation_img}/>
        <CardElement title='Details info' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={details_img}/>
        <CardElement title='Emergency care' subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family" logo={emergency_img}/>
        <CardElement title='Tracking' subtitle="Track and save your medical history and health data " logo={tracking_img}/>
      </OurServices>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App