import React, { useState, useEffect } from "react";

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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl shadow-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">💡 Random Advice</h2>
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                <p className="text-white text-lg">Loading wisdom...</p>
              </div>
            ) : (
              <>
                <blockquote className="text-white text-xl italic leading-relaxed mb-8 px-4">
                  "{advice}"
                </blockquote>
                <button onClick={fetchAdvice} className="px-8 py-4 bg-white text-sky-600 rounded-lg hover:bg-sky-50 transition-all font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transform">
                  Get New Advice
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdviceCard;
