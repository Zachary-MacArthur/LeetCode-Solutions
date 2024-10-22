//Note: the main class name must be Solution. Given an integer X, write an algorithm to find the number of integers which are less than or equal to X and whose digits add up to Y. Input: the first line of input consists of an integer- inputNum1, representing the given number X. the next line consists of an integer- inputNum2, representing the given number Y. Output: print the count of numbers whose digits add up to Y for the given number X. Note: if no numbers are found whose digits add up to Y for the given number X, then print -1. example: Input 20 5 Output: 2

import java.util.Scanner;

public class Solution {

    // Helper function to calculate the sum of digits of a number
    public static int sumOfDigits(int number) {
        int sum = 0;
        while (number > 0) {
            sum += number % 10; // Add last digit to sum
            number /= 10;       // Remove last digit
        }
        return sum;
    }

    // Function to count numbers whose digits sum up to Y
    public static int countNumbersWithDigitSum(int X, int Y) {
        int count = 0;

        // Iterate over all numbers from 1 to X
        for (int i = 1; i <= X; i++) {
            if (sumOfDigits(i) == Y) {
                count++;
            }
        }

        // Return the count or -1 if no such numbers are found
        return count > 0 ? count : -1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input the number X
        int inputNum1 = scanner.nextInt();

        // Input the number Y
        int inputNum2 = scanner.nextInt();

        // Find and print the count of numbers whose digit sum equals Y
        int result = countNumbersWithDigitSum(inputNum1, inputNum2);
        System.out.println(result);

        scanner.close();
    }
}