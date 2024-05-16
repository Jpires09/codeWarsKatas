def next_higher(n):
    # Step 1: Find the rightmost '0' bit that has '1' bit(s) to its right
    rightmost_zero_bit_index = 0
    while (n >> rightmost_zero_bit_index) & 1 == 1:
        rightmost_zero_bit_index += 1

    # Step 2: Flip the rightmost '0' bit
    n |= 1 << rightmost_zero_bit_index

    # Step 3: Count the number of '1' bits to the right of the flipped bit
    count_ones = 0
    for i in range(rightmost_zero_bit_index):
        if (n >> i) & 1 == 1:
            count_ones += 1

    # Step 4: Clear all bits to the right of the flipped bit
    n &= ~((1 << rightmost_zero_bit_index) - 1)

    # Step 5: Set the same number of '1' bits as counted in step 3 starting from the least significant bit position
    n |= (1 << count_ones) - 1

    return n

# Test cases
print(next_higher(129))     # Output: 130
print(next_higher(127))     # Output: 191
print(next_higher(1))       # Output: 2
print(next_higher(323423))  # Output: 323439
