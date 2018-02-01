var arr = [32,3,1,13,43,21,64];
function bubbleSort(arr){
	// console.log("haha");
	var len = arr.length;
	console.time('冒泡排序耗时：');
	for (var i=0; i< len; i++) {
		for (var j = 0; j < len-1-i; j++) {
			if(arr[j]>arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.timeEnd('冒泡排序耗时：');
	return arr;
}
console.log(bubbleSort(arr));
