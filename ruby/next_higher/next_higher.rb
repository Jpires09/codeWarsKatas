
def next_higher(num):
    c = num
    c0 = 0
    c1 = 0

    while c & 1 == 0 and c != 0:
        c0 += 1
        c >>= 1

    while c & 1 == 1:
        c1 += 1
        c >>= 1

    if c0 + c1 == 31 or c0 + c1 == 0:
        return -1

    p = c0 + c1

    num |= (1 << p)
    num &= ~((1 << p) - 1)
    num |= (1 << (c1 - 1)) - 1

    return num
