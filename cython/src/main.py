import numpy as np
import datetime

import sd
import sdo

a = np.arange(100000000)

start = datetime.datetime.now()
result = sd.cyStdDev(a)
end = datetime.datetime.now()

print(result)
print(end-start)



start = datetime.datetime.now()
result = sdo.cyOptStdDev(a)
end = datetime.datetime.now()
print(result)
print(end-start)
