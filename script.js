const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
    // Select all the price elements in the table
    const priceElements = document.querySelectorAll(".price");

    // Initialize the total sum variable
    let totalSum = 0;

    // Loop through all the price elements and add their values
    priceElements.forEach((priceElement) => {
        totalSum += parseFloat(priceElement.textContent);
    });

    // Create a new row for the total
    const totalRow = document.createElement("tr");

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
};
getSumBtn.addEventListener("click", getSum);

