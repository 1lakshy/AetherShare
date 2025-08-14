import { h } from 'preact';
// You can replace these illustrations with new ones later
// import network from '../../../assets/images/illustrations/network.png';
const network = 'https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg';
import twoDevices from '../../../assets/images/illustrations/two_devices.svg';
import threeDevices from '../../../assets/images/illustrations/three_devices.svg';
import earth from '../../../assets/images/illustrations/earth.svg';
import './Home.scss';

const Home = () => (
  <main class="landing-page">
    
    <section class="hero full-screen">
<img class="network-img" src={network} alt="Devices connected using Flash" style={{top:'5rem',}} />
      <div class="info">
        <h1 class="title">File sharing, reimagined</h1>
        <h2 class="subtitle">Send files instantly to any device—right from your browser.</h2>

        <a href="/app" class="btn">
          Start Sharing
        </a>
      </div>

      

      <svg class="waves" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,160L21.8,160C43.6,160,87,160,131,181.3C174.5,203,218,245,262,234.7C305.5,224,349,160,393,133.3C436.4,107,480,117,524,106.7C567.3,96,611,64,655,80C698.2,96,742,160,785,176C829.1,192,873,160,916,138.7C960,117,1004,107,1047,112C1090.9,117,1135,139,1178,170.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440" stroke-dasharray="1650" stroke-dashoffset="1650">
          <animate
            attributeName="stroke-dashoffset"
            from="1650"
            to="0"
            dur="1.8s"
            fill="freeze"
            keySplines=".42,0,.58,1"
            calcMode="spline"
            keyTimes="0; 1"
          />
        </path>
      </svg>
    </section>

    <section class="features">
      <div class="feature">
        <img src={twoDevices} alt="Laptop and mobile connected together" loading="lazy" style="margin-right: -60px" />
        <h2>Zero setup</h2>
        <p>
          Flash works directly in your browser—no installs, no accounts, no hassle. Open it, drop a file, and send it instantly.
        </p>
      </div>

      <div class="feature">
        <img src={threeDevices} alt="Laptop and two mobiles connected together" loading="lazy" />
        <h2>Multi-device sync</h2>
        <p>
          Easily share files across your phone, laptop, or tablet at the same time. Flash handles it all with seamless connection.
        </p>
      </div>

      <div class="feature">
        <img src={earth} alt="Devices in different parts of the world using Flash to share files" loading="lazy" style="transform: scale(0.9)" />
        <h2>Works worldwide</h2>
        <p>
          Whether across the room or across the globe, Flash uses peer-powered tech to connect devices instantly over the internet.
        </p>
      </div>
    </section>

    {/* <section class="about" id="about">
      <blockquote>
        <span>"</span>Flash was created to make file sharing instant and effortless—no apps, no delays. Just fast, modern transfer for everyone.<span>"</span>

        <footer>
          <a href="https://akashhamirwasia.com" target="_blank" rel="noopener noreferrer">
            <img src="https://github.com/blenderskool.png?size=100" alt="Akash Hamirwasia" />
          </a>
          <cite class="author">Akash Hamirwasia</cite>
          <cite class="position">Creator of Flash</cite>
        </footer>
      </blockquote>
    </section> */}

    {/* <section class="hero final-cta">
      <div>
        <h2 class="title">Start sharing in seconds</h2>
        <h3 class="subtitle">No sign-ups. No limitations. 100% free and secure.</h3>

        <a href="/app" class="btn">
          Launch Flash
        </a>
      </div>
    </section> */}
  </main>
);

export default Home;

