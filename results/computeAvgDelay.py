'''
Python Script to compute average delay.
'''

import os
import sys
import json
import numpy as np
import matplotlib.pyplot as plt

result_file = sys.argv[1]

avgResults = {"rr":0, "prob":0, "det":0, "drr":0}
N = 0

with open(result_file, "r") as jsonData:
    parsedJson = json.load(jsonData)
    for resultId in parsedJson:
        N = N+1
        try:
            result = parsedJson[resultId]
            avgResults["rr"] += float(result["rr"])
            avgResults["prob"] += float(result["prob"])
            avgResults["det"] += float(result["det"])
            avgResults["drr"] += float(result["drr"])
        except KeyError:
            continue

jsonData.close()

for keys in avgResults:
    avgResults[keys] /= N

print(avgResults)

'''
Start the bargraph
'''

avgDelay = [] #Y-axis
algorithm = [] # X-axis

for keys in avgResults:
    algorithm.append(keys)
    avgDelay.append(float(avgResults[keys]))

y_pos = np.arange(len(algorithm))
plt.bar(y_pos, avgDelay, color = ['red','green','blue','cyan'])
plt.xticks(avgDelay, algorithm)
plt.title("Average message delay")

plt.show()




