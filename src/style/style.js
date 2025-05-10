body {
  font-family: Arial, sans-serif;
  background: #0c1c2c;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
    max-width: 700px;
    padding: 2rem;
}
h1, h2 {
    color: #00d1b2;
}
button {
  padding: 0.7rem 1.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  cursor: pointer;
  background: #00d1b2;
  color: black;
  border: none;
  border-radius: 5px;
}
.question-box {
  background: #142f44;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  animation: fadeIn 0.5s ease-in;
}
.choices button {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
}
.hidden { display: none; }
.correct { background: green; color: white; }
.wrong { background: red; color: white; }
.progress {
  height: 10px;
  background: grey;
  margin: 1rem 0;
  border-radius: 5px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background: #00d1b2;
  width: 0%;
  transition: width 0.3s ease-in-out;
}
.fact-box {
  background: #1d3a4f;
  margin-top: 1rem;
  padding: 1rem;
  border-left: 5px solid #00d1b2;
  border-radius: 5px;
  font-style: italic;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#essay-button {
  background: linear-gradient(135deg, #3e8ef7, #6c5ce7);
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.3s, background 0.3s;
}

#essay-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #5ea0f7, #7e6cf2);
}

#difficulty-selection {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  justify-content: center;
}

#difficulty-selection label {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.2s;
}

#difficulty-selection input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #4caf50; /* Customize the color here */
  cursor: pointer;
}

#difficulty-selection label:hover {
  color: #4caf50;
}
