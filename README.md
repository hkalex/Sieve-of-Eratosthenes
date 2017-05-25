# Sieve-of-Eratosthenes
Implement Sieve of Eratosthenes in different language for performance testing


[Sieve of Eratosthenes in Wiki](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)


Here is the graphical demo


![Sieve of Eratosthenes](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

## Result of Sieve of Eratosthenes
TBD


# Standard Deviation
Standard Deviation (SD) is widely used as performance benchmark.

## Result of Standard Deviation
| Language | Number of Elements  | Time(ms)  | Remarks |
| ---------- |:-------------:| -----:| ---:|
| C# | 100M | 4862 ||
| JS | 100M | 900 | node4 |
| JS | 100M | 700 | node7 |
| NodeAddOn | 100M | 13000 | NodeV7 + Nan + C++, not optimized |
| Python2 | 100M | 19245 ||
| Python3 | 100M | 22985 ||
| Cython | 100M | 1349 | Not optimized |
| Cython | 100M | 220 | Optimzed |
| GoLang | 10M | 400 | 100M caused stackoverflow |

