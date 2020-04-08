function add(...nums: number[]) {
    var total : number = 0;
    for(var i = 0; i < nums.length; i++) { 
        total += nums[i];
    }
    return total;
}