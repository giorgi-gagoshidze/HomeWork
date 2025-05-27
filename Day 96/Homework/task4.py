list = []
for hi in range(3): 
    name = input("enter student name")
    list2 = []
    for i in range(3):  
        listbutfloat = float(input(f"{name} give {i+1} grade: "))
        list2.append(listbutfloat)
    sashualo = sum(list2) / len(list2)
    list.append((name, sashualo))
print("student name and average grade")
for name, HALO in list:
    print(f"{name}: {HALO}") #got it from gogle
    