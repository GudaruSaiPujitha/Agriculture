import React from "react";
import "./App.css";

function App() {
  const crops = [
    { name: "Rice", season: "Kharif", status: "Growing" },
    { name: "Wheat", season: "Rabi", status: "Ready for Harvest" },
    { name: "Corn", season: "Summer", status: "Planted" }
  ];

  return (
    <div className="app">
      <header>
        <h1>🌾 Smart Agriculture Dashboard</h1>
        <p>Technology for modern farming</p>
      </header>

      <section className="cards">
        <div className="card">
          <h2>🌱 Crops</h2>
          <p>Total Crops: {crops.length}</p>
        </div>

        <div className="card">
          <h2>🌦 Weather</h2>
          <p>Temperature: 28°C</p>
          <p>Rainfall: 70%</p>
        </div>

        <div className="card">
          <h2>💧 Irrigation</h2>
          <p>Water Level: Normal</p>
        </div>
      </section>

      <section>
        <h2>Crop Details</h2>

        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Season</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {crops.map((crop, index) => (
              <tr key={index}>
                <td>{crop.name}</td>
                <td>{crop.season}</td>
                <td>{crop.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="tips">
        <h2>🌿 Farming Tips</h2>
        <ul>
          <li>Use organic fertilizers for healthy crops.</li>
          <li>Monitor soil moisture regularly.</li>
          <li>Use drip irrigation to save water.</li>
        </ul>
      </section>

      <footer>
        <p>© 2026 Smart Agriculture</p>
      </footer>
    </div>
  );
}

export default App;