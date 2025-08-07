
import './App.css'

import HomeCard from './combonents/UI/HomeCard';


function App() {
  return (
    <>
      {/*<Header />*/}

      <div className="homehero">
        <HomeCard route="/saa03">Solutions Architect</HomeCard>
        <HomeCard route="/practioner">Cloud Practitioner</HomeCard>
        <HomeCard route="/aipractioner">AI Practitioner</HomeCard>
      </div>
            <span className="hero">Choose a quick test to under take or create an account and log in for more for domain specific questions.</span>
      
    </>
  )
}

export default App
