import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import MySkills from '../components/my_skills/MySkills'
import Services from '../components/services/Services'
import Projects from '../components/projects/Projects'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/layout/Footer'
import CounterSection from '../components/about/CounterSection'
import Testimonials from '../components/testimonials/Testimonials'
import Blog from '../components/blog/Blog'
import ContactMe from '../components/contact/ContactMe'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CounterSection />
      <About />
      <MySkills />
      <Services />
      <ContactForm />
      <Projects />
      <Testimonials/>
      <Blog/>
      <ContactMe/>
      <Footer />
    </>
  )
}

export default Home