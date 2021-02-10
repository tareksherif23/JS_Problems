
function calc_water(nums){

    max = 0
    for(let i=0; i<nums.length; i++)
    {
        for (let j=i+1; j<nums.length; j++)
        {
            a = nums[i]
            b = nums[j]
            edge = min(a,b)
            dist = j-i
            area = edge*dist
            if(area > max){ max = area }
        }

    }

    return max

}


// Solved using shifting pointers to optimize the time complexity to O(n)


function calc_waterO(nums){

    max = 0
    for(let i=0, j=nums.length; i<nums.length;)
    {
        area = Math.min(nums[i],nums[j])*(j-1)
        if(area>max){max = area}
        if(nums[i]>nums[j]){i++}
        else{j--}
        if(j===i){break;}

    }

    return max


}