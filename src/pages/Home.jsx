import Navbar from '../components/layout/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import CounterSection from '../components/about/CounterSection'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import MySkills from '../components/my_skills/MySkills'
import Testimonials from '../components/testimonials/Testimonials'
import Services from '../components/services/Services'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CounterSection />
      <About />
      <Experience />
      <MySkills />
      <Projects />
      <Testimonials />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Home