import math

def printMsg(msg):
    print(msg)

def cyStdDev(a):
    m = a.mean()
    w = a - m
    wSq = w**2
    return math.sqrt(wSq.mean())
