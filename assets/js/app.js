async function fetchTrackData(apiKey) {
  try {
    const response = await fetch("http://localhost:8000/api/measurements", {
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    if (!response.ok) throw new Error("Erreur API");
    return await response.json();
  } catch (error) {
    console.error("Erreur:", error);
    return [];
  }
}
