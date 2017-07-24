function Reverse(arr){
	var a=1;
	var b=0;
	while (arr[b] < arr[arr.length-a]){
		var Temp = arr[b];
		arr[b] = arr[arr.length-a];
		arr[arr.length-a] = temp;	
	}
	console.log(arr);
}

Reverse([1,2,3,4]);