'''
Python implementation of the famous travelling salesman problem.
In this implementation, we just care whether all nodes are traversed.
'''
def areAllNodesVisited(path, adj):
    ans = True
    for keys in adj.keys():
        if keys not in path:
            ans = False
    return ans

def getCost(weights, path):
    i = 0
    j = 1
    totalCost = 0
    while j < len(path):
        temp = weights[path[i]]
        totalCost += temp[path[j]]
        i = i+1
        j= j+1
    return totalCost


def findPath(adj,start, path):
    while not (areAllNodesVisited(path, adj)):
        if start not in path:
            path.append(start)
        adjList = adj[start]
        for current in adjList:
            if current not in path:
                path.append(current)
                findPath(adj, current, path)
    return path
    

# A dictionary that keeps adjacency information for all nodes.
adj = {
    "A":["B", "C", "D"],
    "B":["A","D"],
    "C":["A", "D","E"],
    "D":["B", "C"],
    "E":["C"]
}

weights = {
        "A":{"B":5, "C":10, "D":3},
        "B":{"A":5, "D":20},
        "C":{"A":10,"D":30,"E":50},
        "D":{"B":5, "C":40},
        "E":{"C":8}
}

start = "A"
path = []

print("Path:",findPath(adj, start, path))
print("Cost:", getCost(weights, path))





