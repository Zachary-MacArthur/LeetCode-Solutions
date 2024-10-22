//Note the main class name must be Solution. Ray, Shiv and Ansh are conducting a survey for a group of people. The survey is only meant for twins but there are certain people who are not twins and wanting to take part in the survey. Write an algorithm to help them identify the person from the given input who is not a twin. Input: The first line of input consists of an integer- inputArr_size, representing the number of entries in the array(N). The next line consists of N space-separated integer elements in the array. Output: Print the smallest value of the person who is not a twin from the given array of elements. Note: if everyone present is a twin, the return -1. Examples 1: Input: 7 1123344 Output: 2
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Solution {

    // Function to find the smallest non-twin
    public static int findNonTwin(int[] arr) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Build frequency map
        for (int number : arr) {
            frequencyMap.put(number, frequencyMap.getOrDefault(number, 0) + 1);
        }

        int smallestNonTwin = Integer.MAX_VALUE;
        boolean foundNonTwin = false;

        // Find the smallest number that has a frequency of 1
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() == 1) {
                smallestNonTwin = Math.min(smallestNonTwin, entry.getKey());
                foundNonTwin = true;
            }
        }

        // If no non-twin is found, return -1
        return foundNonTwin ? smallestNonTwin : -1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input size of the array
        int inputArr_size = scanner.nextInt();
        
        // Input the array elements
        int[] arr = new int[inputArr_size];
        for (int i = 0; i < inputArr_size; i++) {
            arr[i] = scanner.nextInt();
        }

        // Find the smallest non-twin and print it
        int result = findNonTwin(arr);
        System.out.println(result);

        scanner.close();
    }
}