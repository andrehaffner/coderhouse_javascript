document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("data-container");

    const relativePath = "data.json";

    fetch(relativePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
            dataContainer.textContent = "An error occurred while fetching data.";
        });

    function displayData(data) {
        const dataItems = data.map(item => `<p>${item.name}: ${item.value}</p>`).join("");
        dataContainer.innerHTML = dataItems;
    }
});
