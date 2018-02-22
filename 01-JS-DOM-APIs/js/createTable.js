function setTableContent() {
    return [
      ['Row 1, Cell 1','Row 1 Cell 2','Row 1 Cell 3' ,'Row 1 Cell 4'],
      ['Row 2, Cell 1','Row 2 Cell 2','Row 2 Cell 3' ,'Row 2 Cell 4'],
      ['Row 3, Cell 1','Row 3 Cell 2','Row 3 Cell 3' ,'Row 3 Cell 4']
  ];
}

function createTableWithHeaders() {
    const table = document.createElement("table");
    table.className = "blueTable";

    const headers = document.createElement("thead");

    const h1 = document.createElement("th");
    h1.appendChild(document.createTextNode("Header one"));
    headers.appendChild(h1);

    const h2 = document.createElement("th");
    h2.appendChild(document.createTextNode("Header two"));
    headers.appendChild(h2);

    const h3 = document.createElement("th");
    h3.appendChild(document.createTextNode("Header three"));
    headers.appendChild(h3);

    const h4 = document.createElement("th");
    h4.appendChild(document.createTextNode("Header four"));
    headers.appendChild(h4);

    table.appendChild(headers);

    return table;
}

function makeTable() {
    const check = document.getElementById("table");
    if (check.hasChildNodes()) {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").style.display = "block";
    } else {

        const tableContent = setTableContent();
        const tableItself = createTableWithHeaders();
        const tableBody = document.createElement("tbody");
        let row;
        let col;

        tableContent.map(function(subcollection) {
            row = document.createElement("tr");
            subcollection.map(function(rowContent) {
                col = document.createElement("td");
                col.appendChild(document.createTextNode(rowContent));
                row.appendChild(col);
            })
            tableBody.appendChild(row);
        })

        tableItself.appendChild(tableBody);
        document.getElementById("table").appendChild(tableItself);

    }
}