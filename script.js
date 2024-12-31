// Create the button to get the total price
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");

// Append the button to the body
document.body.appendChild(getSumBtn);

// Function to calculate the total sum
const getSum = () => {
    // Select all the price elements in the table
    const priceElements = document.querySelectorAll(".price");

    // Initialize the total sum variable
    let totalSum = 0;

    // Loop through all the price elements and add their values
    priceElements.forEach((priceElement) => {
        totalSum += parseFloat(priceElement.textContent);
    });

    // Check if the total row already exists
    let totalRow = document.querySelector("#totalRow");

    if (!totalRow) {
        // If the total row does not exist, create it
        totalRow = document.createElement("tr");
        totalRow.id = "totalRow"; // Assign an id to the total row for future reference

        // Create the cell for "Total" text
        const totalLabelCell = document.createElement("td");
        totalLabelCell.textContent = "Total";
        totalRow.appendChild(totalLabelCell);

        // Create the cell for the total price value
        const totalPriceCell = document.createElement("td");
        totalPriceCell.textContent = totalSum.toFixed(2); // Display the sum with two decimal points
        totalRow.appendChild(totalPriceCell);

        // Append the new total row to the table
        document.querySelector("table").appendChild(totalRow);
    } else {
        // If the total row already exists, just update the price value
        const totalPriceCell = totalRow.querySelector("td:nth-child(2)");
        totalPriceCell.textContent = totalSum.toFixed(2); // Update with the new total value
    }
};

// Add event listener to the button for the click event
getSumBtn.addEventListener("click", getSum);
