def to_csv_text(array)
    array.map { |item| item.join(",") }.join("\n")
end