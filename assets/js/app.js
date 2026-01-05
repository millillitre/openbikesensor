async function fetchTrackData(apiKey) {
  try {
    const response = await fetch(
      "https://lilied-subprofessionally-mafalda.ngrok-free.dev/api/measurements",
      {
        headers: {
          "X-API-KEY": apiKey,
          "ngrok-skip-browser-warning": "true"
        }
      }
    );

    if (!response.ok) throw new Error("Erreur API");
    return await response.json();

  } catch (error) {
    console.error("Erreur:", error);
    return [];
  }
}

function openTab(tabName) {
  document.querySelectorAll(".tab-content")
    .forEach(t => t.style.display = "none");
  document.getElementById(tabName).style.display = "block";
}
