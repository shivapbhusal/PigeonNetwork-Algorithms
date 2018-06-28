'''
Python implementation of the famous travelling salesman problem.
This is a dynamic programming solution. 
Complexity: O((N^2)*(2^N))
In this implementation, we just care whether all nodes are traversed.
'''
import math
import itertools
import random
import sys

def findPath(distances, start):
    '''
    Inputs: Distances: nested Key value pair
    Start: A string indicating the Node to start with
    Returns a tuple with cheapest path and total cost.
    '''
    costInfo = dict()
    nodes = distances.keys()
    N = len(nodes)
    C = dict()

    for k in range(1,N):
        C[(1 << k, k)] = (distances[nodes[0]][nodes[k]],0) #Get the kth element from list and look in the distances dictionary.

    for size in range(2,N):
        for subset in itertools.combinations(range(1,n),size):
            bits = 0
            for bit in subset:
                bits |= 1 << bit

        for k in subset:
            prev = bits & ~(1 << k)

            res = []
            for m in subset:
                if m==0 or m==k:
                    continue
                res.append((C[(prev, m)][0]+ distances[m][k],m))
            C[(bits,k)] = min(res)

    bits = (2**n -1) -1

    res = []
    for k in range(1,n):
        res.append((C[bits, k)][0] + distances[k][0],k))

    opt, parent = min(res)

    path = []

    for i in range(n-1):
        path.append(parent)
        newBits = bits & ~(1 <<parent)
        _, parent = C[(bits, parent )]
        bits = newBits

    path.append(0)

    return opt, list(reversed(path))


# A dictionary that keeps adjacency information and distances for all nodes.
distances = {
        "A":{"B":5, "C":10, "D":1,"E":10},
        "B":{"A":5, "C":30,"D":20,"E":3},
        "C":{"A":10,"B":30,"D":30,"E":50},
        "D":{"A":3,"B":5,"C":40,"D":20},
}

start = "A"

print("Path:",findPath(distances,start))





