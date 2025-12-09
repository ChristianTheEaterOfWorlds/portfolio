import React, { useState, useEffect } from "react";
import "../Styles/AdviceCard.css";

function AdviceCard() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to fetch advice
  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("Oops! Could not fetch advice. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch advice when component loads
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-card">
      <h2>💡 Random Advice</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <p className="advice-text">"{advice}"</p>
      )}
      <button onClick={fetchAdvice} className="advice-btn">
        Get New Advice
      </button>
    </div>
  );
}

export default AdviceCard;
