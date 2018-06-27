'''
Python implementation of the famous travelling salesman problem.
In this implementation,each node has to be visisted only once during the traversal.
'''
import math
import itertools

def getCost(weights, path):
    '''
    Given the weights and Paths, compute the totalCost of traversal.
    '''
    i = 0
    j = 1
    totalCost = 0
    while j < len(path):
        temp = weights[path[i]]
        try:
            totalCost += temp[path[j]]
        except KeyError:
            return math.inf
        i = i+1
        j= j+1
    return totalCost

# A dictionary that keeps information regarding edges and respective weights.

weights = {
        "A":{"B":5, "C":10, "D":3},
        "B":{"A":5, "D":20},
        "C":{"A":10,"D":30,"E":50},
        "D":{"B":5, "C":40},
        "E":{"C":8, "A":30}
}

start = "A"
nodes = []
for node in weights:
    if node!=start:
        nodes.append(node)

# Get all the permutation sequences of the nodes in the form of a list of tuples.
permutations = list(itertools.permutations(nodes))

# Convert tuples to list and append "start" at the beginning and end.
for i in range(0,len(permutations)):
    fullPath = list(permutations[i])
    fullPath.insert(0,"A")
    fullPath.append("A")
    permutations[i]=fullPath

# Calculate the weights and choose the path with the least weight.
bestCost = math.inf
bestPath = None
for candidatePath in permutations:
    if getCost(weights,candidatePath)<bestCost:
        bestCost = getCost(weights,candidatePath)
        bestPath = candidatePath

print(bestCost)
print(bestPath)




