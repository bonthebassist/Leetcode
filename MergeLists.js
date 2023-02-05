let list1 = [1, 2, 4] // test 1
let list2 = [1, 3, 4] // test 1
// let s = "()[]{}" // test 2
// let s = "(]" // test 3

//This solution doesn't use linked lists as per the problems parameters.
//Study linked lists
var mergeTwoLists = function(list1, list2) {
    concatList = list1.concat(list2)
    sortList = concatList.sort()
    return sortList
};

console.log(mergeTwoLists(list1, list2))