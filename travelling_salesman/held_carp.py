'''
Python implementation of the famous travelling salesman problem.
In this implementation, we just care whether all nodes are traversed.
'''
def findPath(adj, weights, start):
    C = dict()
    for node in adj:
        if node!=start:
            try:
                C[node] = weights[start][node]
            except KeyError:
                continue
    return C
        


# A dictionary that keeps adjacency information for all nodes.
adj = {
    "A":["B", "C", "D"],
    "B":["A","D"],
    "C":["A", "D","E"],
    "D":["B", "C"],
    "E":["C"]
}

weights = {
        "A":{"B":5, "C":10, "D":1},
        "B":{"A":5, "B":30,"D":20},
        "C":{"A":10,"D":30,"E":50},
        "D":{"B":5, "C":40},
        "E":{"C":8}
}

start = "A"
path = []

print("Path:",findPath(adj, weights, start))





