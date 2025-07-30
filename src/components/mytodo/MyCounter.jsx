import { useState, useEffect } from 'react';
import './MyCounter.css';

export function MoodTracker() {
  const [mood, setMood] = useState('😐'); // Pradinė nuotaika
  const [moodHistory, setMoodHistory] = useState([]); // Nuotaikų istorija
  const [color, setColor] = useState('#f0f0f0'); // Fono spalva
  const [quote, setQuote] = useState('Pasirinkite savo nuotaiką'); // Motivacinis citata

  // Citatos priklausomai nuo nuotaikos
  const quotes = {
    '😊': 'Gera nuotaika prasideda nuo šypsenos!',
    '😢': 'Sunkios dienos praeina, laukia šviesesni rytojai.',
    '😡': 'Kvėpuokite giliai - tai praeis.',
    '😐': 'Viskas gerai, toks ir gyvenimas.',
    '🤪': 'Kartais reikia tiesiog pasileisti!'
  };

  // Spalvos priklausomai nuo nuotaikos
  const colors = {
    '😊': '#e3f7d4',
    '😢': '#e3f2fd',
    '😡': '#ffebee',
    '😐': '#fff9c4',
    '🤪': '#f3e5f5'
  };

  // Efektas, vykdomas pasikeitus nuotaikai
  useEffect(() => {
    if (mood in quotes) {
      setQuote(quotes[mood]);
      setColor(colors[mood]);
    }
  }, [mood]);

  // Pridėti naują nuotaiką į istoriją
  const logMood = (selectedMood) => {
    setMood(selectedMood);
    setMoodHistory([...moodHistory, {
      mood: selectedMood,
      date: new Date().toLocaleTimeString()
    }]);
  };

  // Išvalyti istoriją
  const clearHistory = () => {
    setMoodHistory([]);
  };

  return (
    <div className="mood-tracker" style={{ backgroundColor: color }}>
      <h1>Mano Nuotaikos Sekimas</h1>
      
      <div className="current-mood">
        <h2>Dabar jaučiuosi: {mood}</h2>
        <p className="quote">{quote}</p>
      </div>

      <div className="mood-selector">
        <h3>Kaip jaučiatės šiandien?</h3>
        <div className="mood-buttons">
          {['😊', '😐', '😢', '😡', '🤪'].map((emoji) => (
            <button 
              key={emoji} 
              onClick={() => logMood(emoji)}
              className={mood === emoji ? 'active' : ''}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="mood-history">
        <h3>Nuotaikų istorija <button onClick={clearHistory}>Išvalyti</button></h3>
        {moodHistory.length === 0 ? (
          <p>Dar neįrašyta jokių nuotaikų</p>
        ) : (
          <ul>
            {moodHistory.slice().reverse().map((entry, index) => (
              <li key={index}>
                <span className="emoji">{entry.mood}</span>
                <span className="time">{entry.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}