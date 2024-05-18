def get_count(input_str)
    count = 0
    input_str.each_char do |char|
        if char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
            count += 1
        end
    end
    count
end