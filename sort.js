function showAndSort(context, caret, field) {
    sortContent(caret, field);
    if (caret === 'upperCaret') {
      context.style.display = 'none'
      context.nextElementSibling.style.display = 'block'
    } else if (caret === 'lowerCaret') {
      context.style.display = 'none'
      context.previousElementSibling.style.display = 'block'
    }
}

function sortContent(direction, field) {
    var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("customers");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[field];
            y = rows[i + 1].getElementsByTagName("TD")[field];
            if (field === 0 || field === 5) {
                var num1 = x.innerHTML.indexOf('$') > -1 ? Number(x.innerHTML.slice(1)) : Number(x.innerHTML);
                var num2 = y.innerHTML.indexOf('$') > -1 ? Number(y.innerHTML.slice(1)) : Number(y.innerHTML);
                if (direction === 'lowerCaret') {
                  if (num1 > num2) {
                    shouldSwitch = true;
                    break;
                  }
                } else if (direction === 'upperCaret') {
                  if (num1 < num2) {
                    shouldSwitch = true;
                    break;
                  }
                }
            } else {
              if (direction === 'lowerCaret') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  shouldSwitch = true;
                  break;
                }
              } else if (direction === 'upperCaret') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  shouldSwitch = true;
                  break;
                }
              }
            }
          }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }