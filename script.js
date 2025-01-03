document.getElementById('calculateTotalButton').addEventListener('click', function() {
    // Get all elements with the class 'price'
    let prices = document.querySelectorAll('.price');

    // Initialize total price to 0
    let total = 0;

    // Loop through each price, convert to number and add to total
    prices.forEach(function(priceElement) {
        total += parseFloat(priceElement.textContent);
    });

    // Check if a total row already exists, if so remove it to prevent duplication
    let existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    let totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');  // Add a class to easily target this row

    // Create a new cell for the label "Total" and append it to the row
    let totalLabel = document.createElement('td');
    totalLabel.textContent = 'Total';
    totalRow.appendChild(totalLabel);

    // Create a new cell for the total price and append it to the row
    let totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total.toFixed(2);  // Formatting to two decimal places
    totalRow.appendChild(totalPriceCell);

    // Append the total row to the table
    document.querySelector('table').appendChild(totalRow);
});
