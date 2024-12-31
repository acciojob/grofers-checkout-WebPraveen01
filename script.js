const getSum = () => {
    // Select all the price elements in the table
    const priceElements = document.querySelectorAll(".price");

    // Initialize the total sum variable
    let totalSum = 0;

    // Loop through all the price elements and add their values
    priceElements.forEach((priceElement) => {
        totalSum += parseFloat(priceElement.textContent);
    });

    // Check if total row already exists
    let totalRow = document.querySelector(".total-row");
    if (!totalRow) {
        // Create a new row for the total
        totalRow = document.createElement("tr");
        totalRow.className = "total-row";

        // Create the cell for "Total" text
        const totalLabelCell = document.createElement("td");
        totalLabelCell.textContent = "Total";
        totalRow.appendChild(totalLabelCell);

        // Append the new total row to the table
        document.querySelector("table").appendChild(totalRow);
    }

    // Create the cell for the total price value
    let totalPriceCell = totalRow.querySelector(".total-price");
    if (!totalPriceCell) {
        totalPriceCell = document.createElement("td");
        totalPriceCell.className = "total-price";
        totalRow.appendChild(totalPriceCell);
    }
    totalPriceCell.textContent = totalSum.toFixed(2); // Display the sum with two decimal points
};
getSumBtn.addEventListener("click", getSum);