// you can also use imports, for example:
// import java.util.*;
import java.util.Arrays;
import java.util.Collections;
// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    
    public static void main(String [] arg) {
     Integer[] A = {1, 3, 6, 4, 1, 2};
        int  min = Collections.min(Arrays.asList(A)) ;
		int max =Collections.max(Arrays.asList(A)) ;  
		
		System.out.println(min);
		System.out.println(max);
		// write your code in Java SE 8
    }
    }