import React from "react";
import "./App.css";

function App() {
  const features = [
    {
      title: "🤖 AI Detection",
      description:
        "Deep learning models analyze crop images and identify possible diseases accurately.",
    },
    {
      title: "🌿 Smart Solutions",
      description:
        "Provides medicines, fertilizers, and preventive farming methods.",
    },
    {
      title: "📊 Crop Monitoring",
      description:
        "Helps farmers maintain healthy crops and improve productivity.",
    },
  ];

  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">🌱 CropCare</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Detection</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>AI-Based Crop Disease Detection System</h1>
          <p>
            Protect your crops with artificial intelligence. Upload crop images
            and get instant disease detection, treatment suggestions,
            preventive measures, and smart farming recommendations.
          </p>
          <a href="#" className="btn">
            Start Detection
          </a>
        </div>

        <div className="upload-box">
          <h2>Upload Crop Image</h2>
          <input type="file" accept="image/*" />
          <br />
          <button className="upload-btn">Analyze Crop</button>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>

        <div className="cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 CropCare AI | AI Powered Agriculture Solution</p>
      </footer>
    </div>
  );
}

export default App;