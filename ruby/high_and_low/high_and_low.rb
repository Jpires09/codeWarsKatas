def high_and_low(numbers)
    numbers = numbers.split(" ").map(&:to_i)
    high = numbers.max
    low = numbers.min
    "#{high} #{low}"

end