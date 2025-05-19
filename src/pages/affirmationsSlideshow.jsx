import React, { useEffect, useState } from "react";

const AffirmationSlideshow = () => {
  const [affirmations, setAffirmations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch affirmations from your database
    const fetchAffirmations = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL || "http://localhost:5000/api/affirmations"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAffirmations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch affirmations:", err);
      }
    };

    fetchAffirmations();
  }, []);

  // Auto-slide through affirmations every 6 seconds
  useEffect(() => {
    if (affirmations.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === affirmations.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [affirmations.length]);

  if (affirmations.length === 0) {
    return (
      <div className="text-white">
        <p>No affirmations available yet.</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  const current = affirmations[currentIndex] || {};

  const renderField = (label, value, fieldKey) => {
    return current.publicFields && !current.publicFields.includes(fieldKey) && value ? (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    ) : null;
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg max-w-xl mx-auto text-black">
      <h3 className="text-xl font-bold mb-2">💬 Words of Affirmation</h3>
      <p className="italic mb-4">"{current.message}"</p>

      <div className="text-sm">
        {renderField("First Name", current.firstName, "firstName")}
        {renderField("Last Name", current.lastName, "lastName")}
        {renderField("Prefix", current.prefix, "prefix")}
        {renderField("Suffix", current.suffix, "suffix")}
        {renderField("City", current.city, "city")}
        {renderField("State", current.state, "state")}
        {renderField("Country", current.country, "country")}
      </div>
    </div>
  );
};

export default AffirmationSlideshow;