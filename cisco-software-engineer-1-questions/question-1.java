//the arithmetic mean of N numbers is the sum of all the numbers, divided by N. the mode of N numbers is the most frequently occurring number. write an algorithm to find the mean and the mode of a set of given numbers.
 //Input The first line of input consists of an integer- inputNum, representing the number of elements in the set (N). The next line consists of N space-separated integers representing the elements of the given set. 
 //Output: Print K space-separated integers where the first number is the mean of the input numbers and the second number is the mode (where K=2). Note, if mean calculated is in decimal, print its floor value (Floor is the greatest integer less than or equal to that number, example input 5 12732 output 32

 import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MeanModeCalculator {

    // Function to calculate the floored mean
    public static int calculateMean(int[] numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        // Returning the floor of the mean
        return sum / numbers.length;
    }

    // Function to calculate the mode
    public static int calculateMode(int[] numbers) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        int mode = numbers[0];
        int maxFrequency = 1;

        // Build frequency map
        for (int number : numbers) {
            int frequency = frequencyMap.getOrDefault(number, 0) + 1;
            frequencyMap.put(number, frequency);

            // Update mode if we find a higher frequency
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                mode = number;
            }
        }
        return mode;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input the number of elements
        int inputNum = scanner.nextInt();
        
        // Create an array to hold the numbers
        int[] numbers = new int[inputNum];

        // Input the space-separated elements
        for (int i = 0; i < inputNum; i++) {
            numbers[i] = scanner.nextInt();
        }

        // Calculate floored mean and mode
        int mean = calculateMean(numbers);
        int mode = calculateMode(numbers);

        // Output the results as space-separated integers
        System.out.println(mean + " " + mode);

        scanner.close();
    }
}