


import './App.scss';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import RevealBody from './components/RevealBody/RevealBody'
import SimpleCenteredSection from './components/SimpleCenteredSection/SimpleCenteredSection'
import FormSection from './components/FormSection/FormSection'
import navLogo from './assets/images/logo.svg'

import section1Image1 from './assets/images/section1-image1.jpg'
import section1Image2 from './assets/images/section1-image2.jpg'
import section2Image1 from './assets/images/section2-image1.jpg'
import section2Image2 from './assets/images/section2-image2.jpg'
import section3Image1 from './assets/images/section3-image1.jpg'
import section3Image2 from './assets/images/section3-image2.jpg'



function App() {

  const revealArr = [
    {
      key: '1',
      pcolor: 'color-tan',
      body1: ["A world where  ", <br />, " violence and disease"],
      img1: section1Image1,
      alt1: '',
      body2: 'do not get the last word.',
      img2: section1Image2,
      alt2: '',

    },

    {
      key: '2',
      pcolor: 'color-tan',
      body1: 'A world where ',
      img1: section2Image1,
      alt1: '',
      body2: ["no one digs  ", <br />, " through trash ", <br />, "for food."],
      img2: section2Image2,
      alt2: '',
    },
    {
      key: '3',
      pcolor: 'color-blue-black',
      body1: 'A world where refugees have jobs that put food on the table, wherever they are',
      img1: section3Image1,
      alt1: '',
      body2: 'using nothing more than a smartphone.',
      img2: section3Image2,
      alt2: '',
    },
  ]





  const bodyComponents = revealArr.map((body, index) =>
    <RevealBody
      key={body.key}

      pcolor={body.pcolor}

      index={index}

      body1={body.body1}
      img1={body.img1}
      alt1={body.alt1}

      body2={body.body2}
      img2={body.img2}
      alt2={body.alt2}

      body3={body.body3}
      img3={body.img3}
      alt3={body.alt3} />
  );


  return (
    <div className="App">
      <Nav
        img1={navLogo}></Nav>
      <Hero></Hero>

      <div className="reveal-fade">
        {bodyComponents}
      </div>




      <SimpleCenteredSection
        body1={["A world where we belong to each other ", <br />, "Where we can stop the next war, before it starts."]}>
      </SimpleCenteredSection>

      <FormSection
        body1={`Make your year-end gift today—or your first monthly gift for the year ahead. We’ll turn your gift into food and medicine now, and jobs for a future filled with hope.`}>
      </FormSection>

    </div>
  );
}

export default App;
