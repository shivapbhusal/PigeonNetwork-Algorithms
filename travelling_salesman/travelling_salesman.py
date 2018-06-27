'''
Python implementation of the famous travelling salesman problem.
'''

# A dictionary that keeps adjacency information for all nodes.
adj = {
    "A":["B", "C", "D"],
    "B":["A","D"],
    "C":["A", "D"],
    "E":["C"]
}

weights = {
        "A":{"B":5, "C":10, "D":3},
        "B":{"A":5, "D":20},
        "C":{"A":10,"D":30},
        "E":{"C":8}
}

path = []
start = "A"
adjList = adj[start]
path.append(start)
for current in adjList:
    print(current)






