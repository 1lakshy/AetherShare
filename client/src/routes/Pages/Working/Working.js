import { h } from 'preact';
import { Share2, Zap } from 'preact-feather';
import joinRoom from '../../../assets/images/working/join-room.png';
import sendFile from '../../../assets/images/working/send-file.png';
import install from '../../../assets/images/working/install.png';
import chrome from '../../../assets/images/browser-icons/chrome.svg';
import firefox from '../../../assets/images/browser-icons/firefox.svg';
import edge from '../../../assets/images/browser-icons/edge.svg';
import safari from '../../../assets/images/browser-icons/safari.svg';

import './Working.scss';

const Working = () => (
  <main class="how-it-works">
    <section class="hero">
      <div>
        <h1 class="title">How Flash Works</h1>
        <h2 class="subtitle">Fast, seamless file sharing across all your devices</h2>
      </div>
    </section>

    <div class="body-wrapper">
      <section class="step">
        <div class="info">
          <h2>Join a Room to Get Started</h2>
          <p>
            Rooms in Flash are private spaces where users can send and receive files
            instantly. Think of them like secure, temporary group chats.
            Every user in a room must have a unique name to join.
          </p>
          <p>
            Previously joined rooms will appear on the
            <a href="/app/"> Recent Rooms </a>
            page for easy re-entry. These rooms are never saved on a server — they disappear
            when everyone leaves, ensuring complete privacy.
          </p>
        </div>
        <img src={joinRoom} alt="Joining a room in Flash" />
      </section>

      <section class="step">
        <img src={sendFile} alt="Sending files in Flash" loading="lazy" />
        <div class="info">
          <h2>
            Send Files Instantly
            <Zap size={28} style="margin: 0 0 8px 4px" />
          </h2>
          <p>
            Flash makes file sharing effortless. Click the "Send File" button,
            pick the files you want to share, and they’ll be transferred directly
            to all users in your room.
          </p>
          <p>
            Flash uses
            <a href="http://webtorrent.io/" target="_blank" rel="noreferrer">
              {' '}WebTorrent{' '}
            </a>
            or WebSockets depending on your browser’s WebRTC support. This
            enables real-time, peer-to-peer file transfers with no server in between.
          </p>
          <p>
            Remember, files are never stored online. If the sender leaves before
            the file is delivered, the transfer will be cancelled.
          </p>
        </div>
      </section>

      <section class="step">
        <div class="info">
          <h2>Take Flash to the Next Level</h2>
          <p>
            Love using Flash? You can install it to your home screen for
            faster access. It also appears in your device’s share tray when
            sharing from other apps using the <Share2 size={20} /> button.
          </p>
          <p>
            Flash is open source. We welcome you to check out the source code,
            contribute improvements, or suggest new features.
            If you find Flash useful, consider
            <a
              href="https://github.com/blenderskool/blaze"
              target="_blank"
              rel="noreferrer"
            >
              {' '}starring the repo
            </a>{' '}
            or{' '}
            <a
              href="https://github.com/sponsors/blenderskool/"
              target="_blank"
              rel="noreferrer"
            >
              sponsoring the project
            </a>{' '}
            on GitHub 💚
          </p>
          <p>
            Flash works great on:
            <ul class="browsers">
              <li>
                <img src={chrome} />
                <span>Google Chrome</span>
              </li>
              <li>
                <img src={edge} />
                <span>Microsoft Edge</span>
              </li>
              <li>
                <img src={firefox} />
                <span>Firefox Browser</span>
              </li>
              <li>
                <img src={safari} />
                <span>Safari</span>
              </li>
            </ul>
          </p>
        </div>
        <img src={install} alt="Adding Flash to home screen" loading="lazy" />
      </section>

      <section class="callout">
        <h2>Ready to start sharing?</h2>
        <a class="btn" href="/app">
          Launch Flash Now
        </a>
      </section>
    </div>
  </main>
);

export default Working;
