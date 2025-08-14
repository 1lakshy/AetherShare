import { h } from 'preact';
import { memo } from 'preact/compat';
import { ArrowDownCircle, Grid, Settings } from 'preact-feather';
import { Link } from 'preact-router/match';
import { useContext } from 'preact/hooks';
import { PWAInstall } from '../../contexts/PWAInstall';

import './AppLanding.scoped.scss';

const Navigation = memo(function Navigation() {
  return (
    <>
      <Link href="/app/" class="nav-item" activeClassName="active">
        <Grid />
        <span class="label">Rooms</span>
      </Link>
      <Link href="/app/settings" class="nav-item" activeClassName="active">
        <Settings />
        <span class="label">Settings</span>
      </Link>
    </>
  );
});

function AppLanding({ children, title, subtitle }) {
  const { installable, deferredPrompt, setInstallable } = useContext(PWAInstall);

  const handleInstall = async () => {
    if (typeof window === 'undefined' || !installable || deferredPrompt === null) return;

    setInstallable(false);
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    // You may want to rename this event to match the new app name
    window.gtag('event', 'pwa-install-prompt', {
      outcome,
      app_name: 'Flash',
    });
  };

  return (
    <div class="app-container app-landing-container">
      <header class="app-header">
        <div class="title-nav-wrapper">
          <h1 class="title">{title}</h1>
          <div class="nav">
            {
              installable && (
                <button class="nav-item install" title="Install Flash" onClick={handleInstall}>
                  <ArrowDownCircle />
                  <span class="label">Install</span>
                </button>
              )
            }
            <Navigation />
          </div>
        </div>
        <p class="subtitle">{subtitle}</p>
      </header>

      {children}

      <div class="tab-links">
        <Navigation />
      </div>
    </div>
  );
}

export default AppLanding;
