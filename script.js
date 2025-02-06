//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");

  // Initially, display the Loading... row
output.innerHTML = `
  <tr id="loading">
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;


  function createPromise(index) {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time: parseFloat(time) }), time * 1000);
    });
  }

  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  Promise.all(promises).then((results) => {
    // Remove the loading row
    output.innerHTML = "";

    let maxTime = 0;

    results.forEach(({ name, time }) => {
      maxTime = Math.max(maxTime, time);
      const row = document.createElement("tr");
      row.innerHTML = `<td>${name}</td><td>${time.toFixed(3)}</td>`;
      output.appendChild(row);
    });

    // Append total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${maxTime.toFixed(3)}</strong></td>`;
    output.appendChild(totalRow);
  });
});