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
// import ContactMe from '../components/contact/Contact'
import Experience from '../components/experience/Experience'
import Certifications from '../components/certifications/Certifications'
import TechStack from '../components/tech_stack/TechStack'
import Education from '../components/education/Education'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CounterSection />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <MySkills />
      <TechStack />
      <Services />
      <ContactForm />
      <Projects />
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer />
    </>
  )
}

export default Home