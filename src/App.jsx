
import React from 'react'
import './App.css'

function App() {
  return (
    <div>



      <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto 40px' }}>
        Welcome to your new React application. Start building your next big idea with a solid foundation and a beautiful interface.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ padding: '12px 24px', fontSize: '18px', background: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Get Started</button>
        <button style={{ padding: '12px 24px', fontSize: '18px', background: '#fff', color: '#646cff', border: '1px solid #646cff', borderRadius: '4px', cursor: 'pointer' }}>Learn More</button>
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
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #eaeaea', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
