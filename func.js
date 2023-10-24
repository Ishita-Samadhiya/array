//declare array for testing
var array = [1,2,3,4,5,6,7,8,9];
console.log("Original: ", array);

function push(arr, add){
    /**
     * @param arr: arr to manipulate
     * @param add: elem to add to end
     * desc: adds add to end of arr
     */
    arr[arr.length]= add;
    return arr;
}
array = push(array, 5);//test with push 5
console.log("Pushed with ", 5, ": ", array);


function pop(arr){
    /**
     * @param arr: arr to manipulate
     * desc: removes last element from arr
     */
    var temp =[];
    for(var i = 0; i < arr.length-1; i++){//stores arr copy in temp till last elem to make a copy without it
        temp[i] = arr[i];
    }
    arr = temp; //set arr as temp to change arr to last elem deleted copy
    return arr;
}
array = pop(array);//test
console.log("Popped: ", array);

function toString(arr){
    /**
     * @param arr: arr to manipulate
     * desc: makes a str with arr elements separated with ,
     */
    var str = "";
    for(var i =0; i< arr.length; i++){
        if(i === arr.length-1){
            str = str +arr[i];
        }else{
            str = str + arr[i] + ", ";
        }
    }
    return str;
}
var str = toString(array);//test
console.log("toStringed: ", str);

function join(arr, sym){
    /**
     * @param arr: arr to manipulate
     * @param sym: symbol to join with
     * desc: makes a str with arr elements separated with sym
     */
    var str = "";
    for(var i =0; i< arr.length; i++){
        if(i === arr.length-1){
            str = str +arr[i];
        }else{
            str = str + arr[i] + sym;
        }
    }
    return str;
}
str = join(array, "/");//test with / join
console.log("Joined with \"/\": ", str);

function concat(arr, add){
    /**
     * @param arr: array to add to
     * @param add: array to be added 
     * desc: creates a new array that joins add to the end of arr
     */
    var con = arr;
    for(var i = 0; i < add.length; i++){
        push(con, add[i]);
    }
    return con;
}
var mini = ["mini", "kitty", "puppy", "baby"];//test arr to be concatted
con = concat(array, mini);//test with new mini array
console.log("Concatted with ", mini, ": ", con);