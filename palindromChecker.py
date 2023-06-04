

def palindromeChecker(s, startIndex, endIndex, subs):
    result = ''
    for i in range(len(startIndex)):
        substring = s[startIndex[i]:endIndex[i] + 1]
        char_count = [0] * 26
        
        for char in substring:
            char_count[ord(char) - ord('a')] += 1
        
        odd_chars = sum([1 for count in char_count if count % 2 != 0])
        
        if odd_chars // 2 <= subs[i]:
            result += '1'
        else:
            result += '0'
    
    return result


    s = input()

    startIndex_count = int(input().strip())

    startIndex = []

    for _ in range(startIndex_count):
        startIndex_item = int(input().strip())
        startIndex.append(startIndex_item)

    endIndex_count = int(input().strip())

    endIndex = []

    for _ in range(endIndex_count):
        endIndex_item = int(input().strip())
        endIndex.append(endIndex_item)

    subs_count = int(input().strip())

    subs = []

    for _ in range(subs_count):
        subs_item = int(input().strip())
        subs.append(subs_item)

    result = palindromeChecker(s, startIndex, endIndex, subs)
