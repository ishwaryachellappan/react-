import React from 'react'
import './App.css'
import Profile from './Profile'
 function App() {
  

  return (
    <div>
      <div className="contacts">
            <Profile 
                img="./src/images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Profile 
                img="./src/images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Profile
                img="./src/images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Profile
                img="./src/images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
      
      
      

    </div>
  )
}

export default App
