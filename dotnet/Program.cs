using System;
using System.Diagnostics;

namespace dotnet
{
    class Program
    {
        static double sd(int[] arr) {
            // avg
            double avg = 0;
            for(var i=0; i<arr.Length; i++) {
                avg += arr[i];
            }
            avg = avg / arr.Length;

            // sd
            double result = 0;
            for(var i=0; i<arr.Length; i++) {
                result += Math.Pow(arr[i] - avg, 2);
            }
            result = Math.Sqrt(result / arr.Length);

            return result;
        }

        static void Main(string[] args)
        {
            var sw = new Stopwatch();

            var len = 100000000;
            var arr = new int[len];
            for(var i=0; i<len; i++) {
                arr[i] = i;
            }
            
            sw.Start();
            var avg = sd(arr);
            sw.Stop();
            Console.WriteLine(avg);
            Console.WriteLine(sw.ElapsedMilliseconds);
        }
    }
}
