import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeftRight,
  BadgeCheck,
  Check,
  Clipboard,
  Copy,
  ExternalLink,
  Gamepad2,
  Globe2,
  Network,
  Rocket,
  ShieldCheck,
  Wallet,
  Zap,
} from 'lucide-react'
import './App.css'

const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'How to buy', href: '#how-to-buy' },
  { label: 'Token', href: '#token' },
  { label: 'Links', href: '#links' },
]

const buySteps = [
  {
    title: 'Download Rabby Wallet',
    icon: Wallet,
    body: 'Install the Rabby Wallet browser extension. It is the recommended wallet for Robinhood Chain.',
    href: 'https://rabby.io/',
    linkLabel: 'Get Rabby',
  },
  {
    title: 'Fund your Rabby wallet with ETH',
    icon: BadgeCheck,
    body: 'Send Ethereum from an exchange or another wallet. You will use ETH before bridging into the chain.',
  },
  {
    title: 'Add Robinhood Chain RPC',
    icon: Network,
    body: 'Add a custom network in Rabby with the RPC settings listed below, then confirm the chain is active.',
  },
  {
    title: 'Bridge ETH to RBH-ETH',
    icon: ArrowLeftRight,
    body: 'Use the official Arbitrum bridge portal to move ETH into the route you need before swapping on Robinhood Chain.',
    href: 'https://portal.arbitrum.io/bridge',
    linkLabel: 'Open bridge',
  },
  {
    title: 'Buy on Noxa.fi',
    icon: Rocket,
    body: 'Noxa.fi is the launchpad, think pump.fun for Robinhood Chain.',
    href: 'https://noxa.fi/',
    linkLabel: 'Open Noxa',
  },
  {
    title: 'Buy $HOODRAT',
    icon: Zap,
    body: 'Paste the $HOODRAT contract address, connect Rabby, and swap RBH-ETH for $HOODRAT.',
  },
]

const rpcSettings = [
  ['RPC', 'https://poptye-always-win.poptyedev.com/'],
  ['Chain ID', '4663'],
  ['Symbol', 'ETH'],
  ['Explorer', 'https://so-explorer.poptyedev.com/'],
]

const tokenFacts = [
  ['Token name', 'Hoodrat'],
  ['Ticker', '$HOODRAT'],
  ['Network', 'Robinhood Chain'],
  ['Contract', 'Placeholder zeros'],
  ['Launchpad', 'Noxa.fi'],
  ['Tax', '0/0'],
]

const resourceLinks = [
  ['Rabby Wallet', 'https://rabby.io/'],
  ['Official Arbitrum bridge', 'https://portal.arbitrum.io/bridge'],
  ['Noxa.fi', 'https://noxa.fi/'],
  ['Robinhood Chain explorer', 'https://so-explorer.poptyedev.com/'],
]

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', 'true')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyToClipboard(CONTRACT_ADDRESS)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hoodrat home">
          <img src="/assets/hoodrat-token.png" alt="" />
          <span>
            Hoodrat
            <small>$HOODRAT</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#how-to-buy">
          <Rocket size={18} aria-hidden="true" />
          Buy
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>
            Hoodrat
            <span>$HOODRAT</span>
          </h1>
          <p className="hero-line">The Pepe of Robinhood Chain.</p>
          <p className="hero-body">
            Inspired by Hoodrat, a Matt Furie character from The Night Riders,
            this is a cave-born meme coin built for green-chain chaos.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#how-to-buy">
              <Rocket size={20} aria-hidden="true" />
              How to buy
            </a>
            <button className="ghost-button" type="button" onClick={handleCopy}>
              {copied ? <Check size={20} aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy CA'}
            </button>
          </div>

          <div className="signal-row" aria-label="Project highlights">
            <span>
              <Gamepad2 size={18} aria-hidden="true" />
              Meme fueled
            </span>
            <span>
              <ShieldCheck size={18} aria-hidden="true" />
              DYOR first
            </span>
            <span>
              <Zap size={18} aria-hidden="true" />
              Robinhood Chain
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Hoodrat mascot artwork">
          <img src="/assets/hoodrat-hero.png" alt="Hoodrat mascot riding a green chain wave in a cave" />
        </div>
      </section>

      <section className="contract-band" aria-labelledby="contract-title">
        <div>
          <p id="contract-title">Contract address</p>
          <code>{CONTRACT_ADDRESS}</code>
        </div>
        <button type="button" onClick={handleCopy}>
          {copied ? <Check size={20} aria-hidden="true" /> : <Clipboard size={20} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy contract'}
        </button>
      </section>

      <section id="story" className="story-section">
        <div className="story-image">
          <img src="/assets/hoodrat-token.png" alt="Hoodrat token badge" />
        </div>
        <div className="section-copy">
          <p className="section-label">Meet the night rider</p>
          <h2>From cave lore to Robinhood Chain.</h2>
          <p>
            Hoodrat is the orange, big-eared wild card from Matt Furie's world.
            $HOODRAT turns that underground energy into the Robinhood Chain mascot:
            a funny, feral, no-promises token for meme culture.
          </p>
          <p>
            No official affiliation, no financial promises, no polished banker
            cosplay. Just green candles, cave noise, and a contract you can swap
            when the real CA lands.
          </p>
        </div>
      </section>

      <section id="how-to-buy" className="buy-section">
        <div className="section-heading">
          <p className="section-label">How to purchase</p>
          <h2>Six steps to $HOODRAT.</h2>
        </div>

        <div className="steps-grid">
          {buySteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="step-card" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <Icon className="step-icon" size={28} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.href ? (
                  <a href={step.href} target="_blank" rel="noreferrer">
                    {step.linkLabel}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            )
          })}
        </div>

        <div className="rpc-panel">
          <div>
            <h3>Robinhood Chain RPC</h3>
            <p>Add this custom network in Rabby before using Noxa.fi.</p>
          </div>
          <dl>
            {rpcSettings.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="token" className="token-section">
        <div className="section-heading">
          <p className="section-label">Token status</p>
          <h2>Ready for the real CA.</h2>
        </div>

        <div className="token-layout">
          <div className="facts-panel">
            <dl>
              {tokenFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="token-badge">
            <img src="/assets/hoodrat-token.png" alt="Hoodrat token logo" />
          </div>
          <div className="disclaimer-panel">
            <h3>Always DYOR</h3>
            <p>
              $HOODRAT is a meme coin for entertainment. It has no intrinsic
              value, no promise of return, and no endorsement from Robinhood
              Markets, Inc. Replace the placeholder contract once the final token
              address is live.
            </p>
          </div>
        </div>
      </section>

      <section id="links" className="links-section">
        <div className="section-heading">
          <p className="section-label">Launch links</p>
          <h2>Everything in one place.</h2>
        </div>

        <div className="resource-list">
          {resourceLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Globe2 size={20} aria-hidden="true" />
              <span>{label}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top" aria-label="Hoodrat home">
          <img src="/assets/hoodrat-token.png" alt="" />
          <span>
            Hoodrat
            <small>The Pepe of Robinhood Chain</small>
          </span>
        </a>
        <p>
          Fan-made meme coin page inspired by Hoodrat. Character inspiration is
          associated with Matt Furie and The Night Riders.
        </p>
      </footer>
    </main>
  )
}

export default App
