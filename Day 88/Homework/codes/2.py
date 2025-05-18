def fake_bin(x):
    finish = ""
    for numba in x:
        if int(numba) < 5:
            finish = finish + "0"
        else:
            finish = finish + "1"
    return finish
