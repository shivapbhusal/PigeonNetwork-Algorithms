'''
Python script to calculate average delay from a given json file of results.

Example, given json file can be like this: 
{"1":{"rr": 10, "prob": 20,"det":10,"drr": 30},
"2":{"rr": 10, "prob": 20,"det":30,"drr": 30}, 
"3":{"rr": 10, "prob": 20,"det":30,"drr": 30}
}

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
    for resultId in parsedJson: #Get all the keys from parseJson.
        N = N+1
        try: #Gets the sum of all the results.
            result = parsedJson[resultId]
            avgResults["rr"] += float(result["rr"])
            avgResults["prob"] += float(result["prob"])
            avgResults["det"] += float(result["det"])
            avgResults["drr"] += float(result["drr"])
        except KeyError:
            continue

jsonData.close()

for keys in avgResults:
    avgResults[keys] /= N #Calculates average.

print(avgResults)


'''
Start the Bargraph.
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




