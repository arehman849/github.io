function drawTable(data, table){
      var row = table.insertRow(-1);
      row.insertCell(0).appendChild(document.createTextNode(data.id))
      row.insertCell(1).appendChild(document.createTextNode(data.firstName))
      row.insertCell(2).appendChild(document.createTextNode(data.lastName))
      row.insertCell(3).appendChild(document.createTextNode(data.email))
      row.insertCell(4).appendChild(document.createTextNode(data.gender))
      row.insertCell(5).appendChild(document.createTextNode(data.payment))
  }

  function updateTable(currentItems) {
    var table = document.getElementById('customers');
    var numOfRows = table.rows.length -1;
    if (currentItems.length < numOfRows) {
      for (var i = 0; i < numOfRows - currentItems.length; i++)
      table.deleteRow(-1);
    }
    for (var i = 0; i < currentItems.length; i++) {
      if (table.rows[i + 1]) {
        table.rows[i + 1].cells[0].innerText = currentItems[i].id;
        table.rows[i + 1].cells[1].innerText = currentItems[i].firstName;
        table.rows[i + 1].cells[2].innerText = currentItems[i].lastName;
        table.rows[i + 1].cells[3].innerText = currentItems[i].email;
        table.rows[i + 1].cells[4].innerText = currentItems[i].gender;
        table.rows[i + 1].cells[5].innerText = currentItems[i].payment;
      } else {
        drawTable(currentItems[i], table);
      }
    }
  }

  function checkAndUpdateTable(data) {
    var totalItems = data.length;
    var currentPage = 1;
    var maxPages = Math.ceil(data.length / pageSize);
    var pages = paginate(totalItems, currentPage, pageSize, maxPages);
    totalPages = pages.totalPages;
    drawPagination(pages, data);
    updateTable(data.slice(pages.startIndex, pages.endIndex + 1));
}