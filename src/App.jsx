import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#333' }}>
      {/* Navigation Bar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#646cff' }}>MyBrand</div>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#features" style={{ textDecoration: 'none', color: '#333' }}>Features</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
          <button style={{ padding: '8px 16px', background: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
        </nav>
      </header>

      return (
    <>
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
            {/* Hero Section */}
            <main style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
              <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>Build Something Amazing</h1>
              <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto 40px' }}>
                Welcome to your new React application. Start building your next big idea with a solid foundation and a beautiful interface.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button style={{ padding: '12px 24px', fontSize: '18px', background: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Get Started</button>
                <button style={{ padding: '12px 24px', fontSize: '18px', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer' }}>Learn More</button>
              </div>
              <div>
                <h1>Get started</h1>
                <p>
                  Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                </p>
              </div>
              <button
                type="button"
                className="counter"
                onClick={() => setCount((count) => count + 1)}
              >
                Count is {count}
              </button>
            </section>
          </main>

          <div className="ticks"></div>

          <section id="next-steps">
            <div id="docs">
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
              </svg>
              <h2>Documentation</h2>
              <p>Your questions, answered</p>
              <ul>
                <li>
                  <a href="https://vite.dev/" target="_blank">
                    <img className="logo" src={viteLogo} alt="" />
                    Explore Vite
                  </a>
                </li>
                <li>
                  <a href="https://react.dev/" target="_blank">
                    <img className="button-icon" src={reactLogo} alt="" />
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
            <div id="social">
              <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              <h2>Connect with us</h2>
              <p>Join the Vite community</p>
              <ul>
                <li>
                  <a href="https://github.com/vitejs/vite" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://chat.vite.dev/" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#discord-icon"></use>
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://x.com/vite_js" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#x-icon"></use>
                    </svg>
                    X.com
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/vite.dev" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#bluesky-icon"></use>
                    </svg>
                    Bluesky
                  </a>
                </li>
              </ul>
            </div>
            {/* Features Section */}
            <section id="features" style={{ padding: '80px 40px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { title: 'Lightning Fast', desc: 'Optimized for speed and performance right out of the box.' },
                { title: 'Responsive Design', desc: 'Looks great on desktops, tablets, and mobile devices.' },
                { title: 'Highly Customizable', desc: 'Simple code structure makes it a breeze to modify.' }
              ].map((feature, idx) => (
                <div key={idx} style={{ flex: '1', minWidth: '250px', maxWidth: '350px', padding: '30px', border: '1px solid #eaeaea', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>{feature.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
          </>
          {/* Footer */}
          <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #eaeaea', color: '#888' }}>
            <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          </footer>
        </div>
        )
}

        export default App
