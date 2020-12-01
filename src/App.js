import './App.scss';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import RevealBody from './components/RevealBody/RevealBody'
import SimpleCenteredSection from './components/SimpleCenteredSection/SimpleCenteredSection'
import FormSection from './components/FormSection/FormSection'
import navLogo from './assets/images/logo.svg'


import section1Image1 from './assets/images/section1-image1.jpg'
import section1Image2 from './assets/images/section1-image2.jpg'
import section1Image2sm from './assets/images/section1-image2-sm.jpg'
import section2Image1 from './assets/images/section2-image1.jpg'
import section2Image1sm from './assets/images/section2-image1-sm.jpg'
import section2Image2 from './assets/images/section2-image2.jpg'
import section3Image1 from './assets/images/section3-image1.jpg'
import section3Image2 from './assets/images/section3-image2.jpg'
import section3Image2sm from './assets/images/section3-image2-sm.jpg'
import section4Image1 from './assets/images/section4-image1.jpg'
import section4Image2 from './assets/images/section4-image2.jpg'


let section1Image2Let = section1Image2
let section2Image1Let = section2Image1
let section3Image2Let = section3Image2

if (window.innerWidth < 768) {
  section1Image2Let = section1Image2sm
  section2Image1Let = section2Image1sm
  section3Image2Let = section3Image2sm
}


function App() {

  const revealArr = [
    {
      key: '1',
      pcolor: 'color-tan',
      body1: ["You can make a world where ", <br />, " no one digs through trash"],
      img1: section1Image1,
      alt1: '',
      body2: 'for something to eat.',
      img2: section1Image2Let,
      alt2: '',
      dollarHandle: '$60 to feed a starving family for a month',
      readMore: [
        "Imagine digging through scraps of garbage to feed your kids. Thousands of families face daily hunger—whether it’s because a pandemic plunged their refugee camp into lockdown, or an explosion plunged their city into chaos, or economic collapse plunged their entire country into what is now becoming the world’s biggest crisis.",
        <br />, <br />,
        "We are on the ground with food. For refugees in Iraq and Mexico. For our friends in Beirut. For starving families in Venezuela.",
        <br />, <br />,
        "We’re reinventing the way families get the help they need. We’re not like other aid groups—we are fast in a crisis. We don’t stay on the margins. We press in, to the frontlines. And we don’t outsource our work to expats. We lead with local teams who know the people, who know the needs, and who know what works.",
        <br />, <br />,
        "We’re only able to do all this because of you. You’re the reason we can rush food to refugees in quarantine before anyone else. Why we could start feeding	 people within 24 hours of the Beirut blast. You enable us to exhaust every means, even when it means going on foot, to reach starving families in Venezuela.",
        <br />, <br />,
        "You can give food that families can eat now. Food they can grow for themselves. Food as a lifeline when the whole world erupts.",
        <br />, <br />,
        "You can remake our world, one meal at a time."
      ],
    },
    {
      key: '2',
      pcolor: 'color-tan',
      body1: ["You can make a world ", <br />, "where refugees have jobs "],
      img1: section2Image1Let,
      alt1: '',
      body2: ["that put food on the table."],
      img2: section2Image2,
      alt2: '',
      dollarHandle: '$100 to help create digital jobs for refugees',
      readMore: [
        "More than 200 million people will be displaced in the coming years. That’s 200 million people without a way to provide for themselves. Our friends deserve a chance to work, to earn a living—before it’s too late. Before they get recruited into violence, as a means to survive. ",
        <br />, <br />,
        "Nothing reduces that risk like a job. And we are revolutionizing the way refugees work.  ",
        <br />, <br />,
        "Too many of our displaced friends have to settle for worthless training seminars or certificates. We’re different. We give actual jobs through our game-changing digital platform that lets refugees work anywhere, using a smartphone. We’re launching new, refugee-owned businesses in camps and communities recovering from war. We’re bringing farmers back to their land, to plant and harvest a new future.",
        <br />, <br />,
        "You can give jobs that put food on the table today. Jobs that help refugees live and earn, right where they are. Jobs that reduce the risk of war.",
        <br />, <br />,
        "You can remake our world, one job at a time."

      ]
    },
    {
      key: '3',
      pcolor: 'color-blue-black',
      body1: ["You can make a world where ", <br />, "we stop the next crisis "],
      img1: section3Image1,
      alt1: '',
      body2: 'before it starts.',
      img2: section3Image2Let,
      alt2: '',
      dollarHandle: '$35 to provide medical care for war-torn families',
      readMore: [
        "We are fast in a crisis. But what if you could stop the worst—before it happens? The war that doesn’t break out. The families who don’t have to flee.",
        <br />, <br />,
        "You can give help that lasts long enough to prevent the next crisis, not just treat the wounds of the last one.",
        < br />, <br />,
        "It’s the hospital in a bombed - out neighborhood in Syria, where families can get the care they need, without leaving home behind.It’s handmade jewelry crafted in the mountains of southern Mexico by families who won’t become the next wave of migrants at the US - Mexico border, because they already have what they need—right where they are.",
        < br />, <br />,
        "You can give help that changes the future, not just the present.",
        < br />, <br />,
        "You can remake our world, one new future at a time."

      ]
    },
    {
      key: '4',
      pcolor: 'color-blue-black',
      body1: ['You can make a world where we live like'],
      img1: section4Image1,
      alt1: '',
      body2: 'we belong to each other.',
      img2: section4Image2,
      alt2: '',
      dollarHandle: '$250 to help launch gatherings of peacemakers around the world',
      readMore: [
        "The ties that bind all humanity together were pulled almost to breaking this year. But the hardships of 2020 offered a reminder that we belong to each other. Humanity rises together, or it falls together.",
        <br />, <br />,
        "That’s why the work we do is about more than just how much food we can provide, or how many jobs we create. It’s how many lives are transformed. Food, medicine, jobs—these are the building blocks of peace.",
        <br />, <br />,
        "When young women and men of every sect in Iraq work alongside each other at our tech hubs—many of them for the very first time in their lives—that’s when a job is a catalyst for peace with one another.  When Syrian farmers return to their land after years of war, sowing seeds where bombs once fell—that’s when a harvest becomes a catalyst for peace with the earth. And when we sit down in gatherings and workshops with those who are different from us—to listen and learn, to relentlessly humanize each other—that’s when a conversation becomes a catalyst for peace between whole communities.",
        <br />, <br />,
        "You can build a bridge across enemy lines—with every package of food, every new job, every new relationship.",
        <br />, <br />,
        "You can remake our world, one changed life at a time.",
      ]
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

      dollarHandle={body.dollarHandle}
      readMore={body.readMore}

    />
  );

  return (
    <div className="App">

      <Nav img1={navLogo}></Nav>

      <Hero></Hero>

      <div className="reveal-fade">
        {bodyComponents}
      </div>

      <SimpleCenteredSection
        body1={"Remake our world. "}
        body2={["One meal, one job, ", <br />, "one changed life at a time. "]}
        body3={"Make your year-end gift today."}>
      </SimpleCenteredSection>

      <FormSection
        body1={`Make your year-end gift today—or your first monthly gift for the year ahead. We’ll turn your gift into food and medicine now, and jobs for a future filled with hope.`}>
      </FormSection>

    </div>
  );
}

export default App;