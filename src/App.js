import Lottie from 'react-lottie'
import animationData from './assets/underconstruction.json'
import './app.css';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div>
      <Lottie className='forlottie' options={defaultOptions}
              height={350}
              width={350}
              
        />
      <h3>Hi, I'm Shishir Timalsina</h3>
      <h4>A Full-Stack Web Developer</h4>

      <h2>A great portfolio is underconstruction</h2>
      <p>Contact <br/> <a href='mailto:info@shishirtimalsina.com'>info@shishirtimalsina.com</a></p>


    </div>
  );
}

export default App;
