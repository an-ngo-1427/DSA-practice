def decode():

    file = open('coding_qual_input.txt','r')

    message = file.readlines()

    file.close()
    keys = {}
    for string in message:
        strArr = string.split()
        keys[int(strArr[0])] = strArr[1]


    counter = 3
    step = 2
    decodedMessage = keys[1]

    while(counter <=len(message)):

        decodedMessage += ' '+ keys[counter]
        step += 1
        counter += step

    return decodedMessage

print(decode())
