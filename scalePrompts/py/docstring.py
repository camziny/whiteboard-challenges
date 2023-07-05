"""
merge_position(w, y)

Merges the positions of the given array `w` according to the given order `y`.

Args:
    w: The array to merge.
    y: The order of the positions to merge.

Returns:
    A tuple of two elements:

    * A list of the merged positions.
    * The number of merged positions.
"""


def merge_position(w, y):
    f1 = set([x[0] for x in w])
    f2 = set([x[1] for x in w])
    f3 = set([x[2] for x in w])
    f4 = set([x[3] for x in w])
    zz = (f1, f2, f3, f4)
    fdic = {}
    for i in zz[y[0]]:
        for j in zz[y[1]]:
            for m in zz[y[2]]:
                fdic[(i, j, m)] = [
                    x[y[3]]
                    for x in w
                    if ((x[y[0]] == i) & (x[y[1]] == j) & (x[y[2]] == m))
                ]
    kl = list(fdic.keys())
    kl.sort()
    for k in kl:
        if not fdic[k]:
            del fdic[k]
        else:
            print(k, fdic[k])
    cnt = 0
    fx = []
    for k in fdic:
        cnt += 1
        if y == (0, 1, 2, 3):
            zz = (k[0], k[1], k[2], tuple(fdic[k]))
        elif y == (0, 1, 3, 2):
            zz = (k[0], k[1], tuple(fdic[k]), k[2])
        elif y == (0, 2, 3, 1):
            zz = (k[0], tuple(fdic[k]), k[1], k[2])
        elif y == (1, 2, 3, 0):
            zz = (tuple(fdic[k]), k[0], k[1], k[2])
        print(zz)
        fx.append(zz)
        print(cnt)
        print()
    return fx, cnt
