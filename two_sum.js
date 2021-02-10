
// Time complexity of O(N^2) and space complexity of O(1)
// @params : [3,5,2,1,12] 6

function twoSum(arr,target)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
            if (arr[i]+arr[j] === target)
            {
                return [i,j]
            }
        }
    }

    return null
}



// Big gap between time and space, consume more space to bring down time
// Always try to merge loops (or code pieces) to escape quadratic time 
// @params : [3,5,2,1,12] 6

function twoSumO(nums,target)
{
    const numsMap = {}

    for(let p = 0; p < nums.length; p++){

    const currentMapVal = numsMap[nums[p]]

    if (currentMapVal >= 0){ return [currentMapVal,p] }

    numsMap[target - nums[p]] = p
}

return null

}