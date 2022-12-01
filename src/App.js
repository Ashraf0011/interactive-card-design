import React, { useEffect, useState } from 'react';
import CardHeader from './Components/CardHeader';



function App() {

  let [width, checkWidth] = useState(window.innerWidth)

  let resize = () => window.addEventListener('resize', () => {
    checkWidth(window.innerWidth);
  })

  useEffect(() => {
    resize()

  }, [width])



  return (
    <div className="App">
      <CardHeader widths={width} />
    </div>
  );
}

export default App;
