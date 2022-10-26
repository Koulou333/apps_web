// Import des éléments de style
import '../styles/stylePages/About.css'
import Accordion from '../components/Accordion'
import { accordionData } from '../data/accordion'

// Import des assets
import img from '../assets/bannerAboutXL.png'

export default function About () {
  return (
    <main>
      <div className='about-intro'>
        {' '}
        <img className='background-img' src={img} alt='paysage' />
      </div>
      <div className='accordion'>
        {accordionData.map(({ title, content, index }) => (
          <li key={index}>
            <Accordion title={title} content={content} />
          </li>
        ))}
      </div>
    </main>
  )
}
