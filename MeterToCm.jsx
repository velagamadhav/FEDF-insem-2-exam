import { useState } from "react";

export default function MeterToCm() {

  const [meters, setMeters] = useState("");

  const centimeters = Number.isNaN(num)
    ? ""
    : Math.round(num * 100 * 1e6) / 1e6;

  return (
    <div style={{ maxWidth: 360, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Meters to Centimeters</h2>

      <label>
        Length (meters):
        <input
          type="number"
          step="any"
          value={meters}
          onChange={(e) => setMeters(e.target.value)} // updates state on every keystroke
          placeholder="e.g. 1.75"
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
        />
      </label>

      <p style={{ fontSize: 20, marginTop: 20 }}>
        {meters === "" ? "Type a value to convert" : `${centimeters} cm`}
      </p>
    </div>
  );
}


