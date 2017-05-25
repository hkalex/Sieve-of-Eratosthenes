import math
import datetime

def pyStdDev(a):
    mean = sum(a) / len(a)
    return math.sqrt((sum(((x - mean)**2 for x in a)) / len(a)))

if __name__ == '__main__':
    a = range(1, 100000000)
    s = datetime.datetime.now()
    result = pyStdDev(a)
    e = datetime.datetime.now()
    print(result)
    print(e - s)
