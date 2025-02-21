document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("hidden");
});

document.getElementById("addProperty").addEventListener("click", function() {
    let name = document.getElementById("propertyName").value;
    let location = document.getElementById("propertyLocation").value;
    let price = document.getElementById("propertyPrice").value;

    if (name && location && price) {
        let table = document.getElementById("propertyTable");
        let row = table.insertRow();
        row.innerHTML = `
            <td class="p-3 border">${name}</td>
            <td class="p-3 border">${location}</td>
            <td class="p-3 border">${price}</td>
            <td class="p-3 border text-red-600 cursor-pointer delete">Delete</td>
        `;
    }
});

document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});