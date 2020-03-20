var pagination = document.getElementById('pagination');
var currentPageCount = 1;
function drawPagination(pages, data) {
    pagination.children[1].innerHTML = ''
    var maxPageNums = pages.endPage > 10 ? 10 : pages.endPage;
    for (var i = pages.startPage; i <= maxPageNums; i++) {
      var aTag = document.createElement('a');
      aTag.innerText = i;
      if (i === 1) {
        aTag.className = 'active';
      }
      aTag.onclick = function() {
        var aTags = this.parentNode.children;
        for (var i = 0; i < aTags.length; i++) {
          aTags[i].className = '';
        }
        this.className = 'active';
        currentPage = Number(this.innerText);
        var pageData = paginate(pages.totalItems, Number(this.innerText), pageSize);
        updateTable(data.slice(pageData.startIndex, pageData.endIndex + 1));
      };
      pagination.children[1].appendChild(aTag);
  }
}

  function changePageNumbers(direction) {
    var paginationPages = paginate(totalPages, currentPageCount, 10, Math.ceil(totalPages / 10));
    var aTags = pagination.children[1].children;
    for (var i = 0; i < aTags.length; i++) {
      aTags[i].className = '';
    }
    if (direction === 'down') {
      currentPageCount = currentPageCount === 1 ? 1 : currentPageCount -= 1;
      var pages = paginate(totalPages, currentPageCount, 10, Math.ceil(totalPages / 10));
      updatePageNumbers(pages.startIndex + 1, pages.endIndex + 1);
    } else if (direction === 'up') {
      currentPageCount = currentPageCount === paginationPages.totalPages ? currentPageCount : currentPageCount += 1;
      var pages = paginate(totalPages, currentPageCount, 10, Math.ceil(totalPages / 10));
      updatePageNumbers(pages.startIndex + 1, pages.endIndex + 1);
    }
  }

  function updatePageNumbers(start, end) {
    for (var i = start; i <= end; i++) {
      var j = i%10;
      j = j === 0 ? 10 : j;
      pagination.children[1].children[j - 1].innerText = i
    }
  }