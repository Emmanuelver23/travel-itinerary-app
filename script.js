document.getElementById('preferencesForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;

    const response = await fetch('https://4hwcfytsr6.execute-api.us-east-1.amazonaws.com/prod?destination=' + encodeURIComponent(destination));
    const data = await response.json();

    document.getElementById('results').innerHTML = `
        <h2>Recommended Itinerary</h2>
        <p>Destination: ${data.recommendation.destination}</p>
        <h3>Hotels</h3>
        <ul>${data.hotels.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}</ul>
        <h3>Transport</h3>
        <ul>${data.transport.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}</ul>
    `;
});
