def sum_array(arr):
    #your code here
    try:
        arr.remove(max(arr))
        arr.remove(min(arr))
        return sum(arr)
    except:
        return 0