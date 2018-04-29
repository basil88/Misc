
main();

function main() {
    try {

        var list = SortedList();

        for (var i = 0; i < 10000; i++) {
            add(list, i);
        }

        assert("Validating collection count", sortedListGetCount(list), 10000);

        var valueToFind = 999;
        var actualIndex = sortedListSearch(list, valueToFind);
        var arr = sortedListGetRawArray(list);
        var expectedIndex = arr.indexOf(valueToFind);
        assert("Validating search", actualIndex, expectedIndex);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

function assert(message, actual, expected) {
    if (actual !== expected) {
        throw new Error(message);
    }
}

function SortedList() {
    var list = [];
    return list;
}

function sortedListSearch(list, valueToFind) {
    var minIndex = 0;
    var maxIndex = list.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = list[currentIndex];

        if (currentElement < valueToFind) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > valueToFind) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

function add(list, value) {
    list.push(value);
    list.sort(function(a, b) {
        return a - b;
    })
}

function sortedListGetCount(list) {
    return list.length;

}

function sortedListGetRawArray(list){
    return list;
}
