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

def findPath(dists, start):
    '''
    Inputs: Distances: nested Key value pair
    Start: A string indicating the Node to start with
    Returns a tuple with cheapest path and total cost.
    '''
    nodes = dists.keys()
    print(nodes)
    n = len(nodes)
    C = {}

    for k in range(1, n):
        C[(1 << k, k)] = (dists[0][k], 0)

    # Iterate subsets of increasing length and store intermediate results
    # in classic dynamic programming manner
    for subset_size in range(2, n):
        for subset in itertools.combinations(range(1, n), subset_size):
            print(subset)
            # Set bits for all nodes in this subset
            bits = 0
            for bit in subset:
                bits |= 1 << bit

            # Find the lowest cost to get to this subset
            for k in subset:
                prev = bits & ~(1 << k)

                res = []
                for m in subset:
                    if m == 0 or m == k:
                        continue
                    res.append((C[(prev, m)][0] + dists[m][k], m))
                C[(bits, k)] = min(res)

    # We're interested in all bits but the least significant (the start state)
    bits = (2**n - 1) - 1

    # Calculate optimal cost
    res = []
    for k in range(1, n):
        res.append((C[(bits, k)][0] + dists[k][0], k))
    opt, parent = min(res)

    # Backtrack to find full path
    path = []
    for i in range(n - 1):
        path.append(parent)
        new_bits = bits & ~(1 << parent)
        _, parent = C[(bits, parent)]
        bits = new_bits

    # Add implicit start state
    path.append(0)

    return opt, list(reversed(path))


# A dictionary that keeps adjacency information and distances for all nodes.
distances = {
        0:{1:5,2:10, 3:1},
        1:{0:5,2:30,3:20},
        2:{0:10,1:30,3:30},
        3:{0:30,1:5,2:40}
}

print(findPath(distances,0))





