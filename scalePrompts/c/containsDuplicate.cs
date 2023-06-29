public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        int index = 1;
        foreach(var item in nums){
            if(index != nums.Length)
                break;
            else
                index++;
            for(int i = index; i < nums.Length; i++){
                if(item == nums[i])
                    return true;
                else
                    return false;
            }
        }
    }
}
