package main

import (
	"fmt"
	"math"
	"time"
)

func sd(arr []float64) float64 {
	sum := 0.0
	for _, n := range arr {
		sum += n
	}

	mean := sum / float64(len(arr))

	total := 0.0
	for _, n := range arr {
		total += math.Pow(n-mean, 2)
	}
	variance := total / float64(len(arr)-1)
	return math.Sqrt(variance)
}

func main() {
	arr := make([]float64, 1e8)

	for i := range arr {
		arr[i] = float64(i)
	}

	stime := time.Now()
	result := sd(arr)
	etime := time.Now()
	fmt.Printf("%v\n", result)
	fmt.Printf("%v\n", etime.Sub(stime))
	fmt.Printf("%v\n", stime.Format(time.RFC3339Nano))
	fmt.Printf("%v\n", etime.Format(time.RFC3339Nano))
}
