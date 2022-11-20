import React, { useEffect, useState } from 'react';
import CardHeader from './Components/CardHeader';
import styled from 'styled-components';

const All = styled.div`
*{
    margin: 0px;
    padding: 0px;

}
 font-family: "Space Grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 2px;
    color:  hsla(278, 81%, 18%, 1);
`


function App() {

  let [width, checkWidth] = useState(window.innerWidth)

  let resize = () => window.addEventListener('resize', () => {
    checkWidth(window.innerWidth);
  })

  useEffect(() => {
    resize()

  }, [width])



  return (
    <All className="App">
      <CardHeader widths={width} />
    </All>
  );
}

export default App;
