def NOSHORTWORD(strings):
    AUTSAJFDAODNKJNASKFBADSD = []
    for sigma in strings:
        if len(sigma) > 3:
            AUTSAJFDAODNKJNASKFBADSD.append(sigma)
    return AUTSAJFDAODNKJNASKFBADSD
print(NOSHORTWORD(["cat", "tree", "hi", "banana"]))  
