"use client";

import { useEffect, useState } from "react";

function getViennaTime() {
  console.log("Fetching current time for Vienna");
  // Vienna is in Europe/Vienna timezone (CET/CEST)
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Vienna",
    timeZoneName: "short",
  });
}

// Returns GMT offset string for Vienna (e.g., GMT+2)
function getViennaGMTOffset() {
  const viennaString = new Date().toLocaleString("en", {
    timeZone: "Europe/Vienna",
    timeZoneName: "short",
  });
  const match = viennaString.match(/GMT[+-]\d+/);
  return match ? match[0] : "";
}

export default function LocationLiveStatus() {
  const [time, setTime] = useState(getViennaTime());
  const [gmt, setGmt] = useState(getViennaGMTOffset());
  const [temperature, setTemperature] = useState<number | null>(null);

  console.log(new Date().toLocaleString("en", { timeZone: "Europe/Vienna", timeZoneName: "short" }));

  useEffect(() => {
    // Update time every 10 seconds
    const interval = setInterval(() => {
      setTime(getViennaTime());
      setGmt(getViennaGMTOffset());
    }, 1000 * 10); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch temperature from Open-Meteo
    async function fetchTemperature() {
      // Vienna: lat=48.2082, lon=16.3738
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=48.2082&longitude=16.3738&current_weather=true"
      );
      const data = await res.json();

      setTemperature(data.current_weather?.temperature ?? null);
    }

    fetchTemperature();

    // Refresh temperature every 10 minutes
    const interval = setInterval(fetchTemperature, 1000 * 60 * 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-sm font-semibold">
        Based in Vienna, Austria <span>🇦🇹</span>
      </p>
      <p className="text-xs text-end font-space-grotesk text-secondary">
        {time} {gmt}, {temperature !== null ? `${temperature > 0 ? "+" : ""}${temperature}°C` : "Loading..."}
      </p>
    </div>
  );
}
