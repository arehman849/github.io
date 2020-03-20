var debounceTimer, resetRequired;
function search(context) {
    if (context.value.length >= 3) {
        resetRequired = true;
        debounceTimer = setTimeout(function(){
            var searchItems = items.filter(function find(item) {
                if (item[context.name].toLowerCase().indexOf(context.value.toLowerCase()) > -1) {
                    return item;
                }
            });
            checkAndUpdateTable(searchItems);
        }, 500)
    } else {
        if (resetRequired) {
            resetRequired = false;
            checkAndUpdateTable(items);
            if (debounceTimer) {
                clearTimeout(debounceTimer);
                debounceTimer = null;
            }
        }
    }
}

function resetField(context) {

}