def duplicate_count(text)
    text.downcase.chars.uniq.count { |char| text.downcase.count(char) > 1 } 
end