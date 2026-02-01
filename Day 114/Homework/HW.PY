def manual_index(lst, element):
    for i in range(len(lst)):
        if lst[i] == element:
            return i
    return -1

def manual_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count

def print_unique_counts(lst):
    seen = set()
    for item in lst:
        if item not in seen:
            seen.add(item)
            print(f"{item} - {lst.count(item)}")

def tuple_info(tpl):
    length = len(tpl)
    first = tpl[0] if length > 0 else None
    last = tpl[-1] if length > 0 else None
    print(f"length: {length}")
    print(f"first: {first}")
    print(f"last: {last}")

def tweak_set(s):
    s.add("X")
    s.add("Y")
    s.add("Z")
    if "X" in s:
        s.remove("X")
    return s

if __name__ == "__main__":
    nums = [10, 20, 30, 20, 40]
    print("2) manual_index")
    print(manual_index(nums, 20))
    print(manual_index(nums, 999))
    print()

    print("3) manual_count")
    print(manual_count(nums, 20))
    print(manual_count(nums, 999))
    print()

    fruits = ["apple", "banana", "apple", "cherry"]
    colors = ["red", "blue", "green", "blue"]
    numbers = [5, 2, 9, 2, 7]

    print("4)")
    print(fruits.index("apple"))
    print(fruits.count("apple"))
    colors_copy = colors[:]
    colors_copy.sort()
    print(colors_copy)
    print(sorted(numbers))
    print(numbers)
    print(min(numbers))
    print(max(numbers))
    print()

    print("5)")
    print_unique_counts(fruits)
    print()

    animals = ("dog", "cat", "bird", "cat", "dog", "dog")
    print("6)")
    print(animals.count("dog"))
    print(animals.index("cat"))
    print()

    print("7)")
    tuple_info(animals)
    print()

    print("8)")
    person = ("Gio", 14, "Georgia")
    name, age, country = person
    print(name)
    print(age)
    print(country)
    print()

    print("9)")
    base_list = [1, 2, 3]
    print(base_list)
    as_tuple = tuple(base_list)
    print(as_tuple)
    back_to_list = list(as_tuple)
    print(back_to_list)
    print()

    print("10)")
    numbers_set = {1, 2, 3}
    numbers_set.add(4)
    numbers_set.add(5)
    numbers_set.remove(2)
    numbers_set.remove(3)
    print(numbers_set)
    even_numbers = {2, 4, 6, 8}
    print(numbers_set.union(even_numbers))
    print(numbers_set.intersection(even_numbers))
    print(numbers_set.difference(even_numbers))
    print(even_numbers.difference(numbers_set))
    print()

    print("11)")
    s = {"A"}
    print("before:", s)
    print("after:", tweak_set(s))
