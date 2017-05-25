package main

import (
	"fmt"
	"math"
	"time"
)

func sd(arr [10000000]float64) float64 {
	sum, l := float64(0), len(arr)
	for i := 0; i < l; i++ {
		sum += arr[i]
	}
	avg := float64(sum) / float64(l)

	result, sum2 := float64(0), float64(0)
	for i := 0; i < l; i++ {
		sum2 += math.Pow(arr[i]-avg, 2)
	}
	result = (sum2) / float64(l)
	result = math.Sqrt(result)

	return result
}

func main() {
	cnt := 10000000
	var arr [10000000]float64

	for i := 0; i < cnt; i++ {
		arr[i] = float64(i)
	}

	stime := time.Now()
	result := sd(arr)
	etime := time.Now()
	fmt.Printf("%v\n", result)
	fmt.Printf("%v\n", stime.Format(time.RFC3339Nano))
	fmt.Printf("%v\n", etime.Format(time.RFC3339Nano))
}
