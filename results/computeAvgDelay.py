'''
Python Script to compute average delay.
'''

import os
import sys
import json

result_file = sys.argv[1]

avgResults = {"rr":0, "drr": 0, "prob":0, "det":0}
with open(result_file) as jsonData:
    parsedJson = json.load(jsonData)
    print(parsedJson)
    for resultId in parsedJson:
        try:
            result = parsedJson[resultId]
            avgResults["rr"] += result["rr"]
            avgResults["drr"] += results["drr"]
            avgresults["prob"] += results["prob"]
            avgResults["det"] += results["det"]
        except KeyError:
            continue

jsonData.close()

print(avgResults)




