import { h } from 'preact';
import { createLocalStorageDispatch } from 'react-localstorage-hooks';
import NicknameInput from '../../../components/NicknameInput/NicknameInput';
import network from '../../../assets/images/illustrations/network.png';
import logo from '../../../assets/images/logo.svg';

import './NewUser.scoped.scss';

// Use the new localStorage key here
const registerUser = createLocalStorageDispatch('flash', (state, e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  return {
    user: {
      name: formData.get('nickname'),
    },
    rooms: [],
  };
});

function NewUser() {
  return (
    <main className="app-container">
      <img src={logo} alt="Flash" class="brand" />

      <img
        class="network-img"
        src={network}
        alt="Devices connected using Flash"
      />

      <div class="register-info">
        <h1>Set your nickname</h1>
        <p>
          Each device in a Flash room must have a unique nickname. This helps you
          easily identify and manage connections during file transfers.
        </p>
      </div>

      <form onSubmit={registerUser} class="register-form">
        <NicknameInput input={{ style: { marginBottom: 40 } }} />
        <button type="submit" class="btn wide">
          Continue
        </button>
      </form>
    </main>
  );
}

export default NewUser;
