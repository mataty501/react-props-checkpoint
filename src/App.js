import React from 'react';

import './App.css';
import Profile from './profile/profile'

function App() {
  
  let image_src = 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg'
  return (
    <>
      <Profile fullName='Walid ALIOUA' bio='27 from Algiers' profession='Developper'>
        {image_src}
      </Profile>
      
    </>
  );
}

export default App;
