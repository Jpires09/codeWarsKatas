def create_phone_number(numbers)
    return "(#{numbers[0..2].join}) #{numbers[3..5].join}-#{numbers[6..9].join}"
end