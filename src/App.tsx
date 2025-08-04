
import './App.css'
import Header from './combonents/Header'

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
    </>
  )
}

export default App
