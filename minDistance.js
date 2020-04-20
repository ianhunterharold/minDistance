function minimumDistances(a) {
  let minDistance = a.length; 
  let neverTouched = true;

  for (let i = 0; i <a.length; i++){ 
    for (let j = i + 1; j <a.length ;j++){ // comparing each element 
      if (a[i] === a[j] ){
        neverTouched = false; // not unique arr
        // subtract the difference
        let subtract = j - i;
       
        if (subtract < minDistance){
          minDistance = subtract;
        }
      } 
    }
  } 
  return (neverTouched ? -1 : minDistance);

};
const arr=[1,2,4,5,20,100,19999];
minimumDistances(arr);
// as a human 
  // find the values that match 
// calculate the distance with indicie 
// return the shortest distance 


// as a developer
// turn into key value pairs
// focus on the keys with value of 2
// find the values that match in the array
// calculate distance by subtracting indice 
// assign to shortest. If if new value is longer dont assign 


