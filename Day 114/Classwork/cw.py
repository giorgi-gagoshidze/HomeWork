subjects = ["Math", "English", "Biology"]
subjects.append("History")
subjects.insert(1, "Art")
last_removed = subjects.pop()
second_removed = subjects.pop(2)
subjects.sort()
smallest = min(subjects)
largest = max(subjects)
print("1)")
print(subjects)
print(last_removed)
print(second_removed)
print(smallest, largest)
print()

vegetables = ("tomato", "cucumber", "carrot", "onion", "pepper")
print("2)")
print(vegetables)
print(len(vegetables))
print(sorted(vegetables))
v1, v2, v3, *rest = vegetables
print(v1, v2, v3)
print(rest)
print()

set_a = {1, 2, 2, 3, 4, 7}
set_b = {3, 3, 4, 5, 6, 8}
set_a.add(10)
set_b.add(10)
if 2 in set_a:
    set_a.remove(2)
if 5 in set_b:
    set_b.remove(5)
print("3)")
print(set_a)
print(set_b)
print(set_a.union(set_b))
print(set_a.intersection(set_b))
print(set_a.difference(set_b))
print()

lst = [1, 2, 3]
tpl = (1, 2, 3)
st = {1, 2, 3}
print(lst)
print(tpl)
print(st)
