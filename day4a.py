ans = 0
for pwd in range(171309, 643603+1):
    digits = [int(x) for x in str(pwd)]
    print(pwd.digits)
    has_pair = any([digits[i] == digits[i+1] for i in range(len(digits)-1)])
    has_descend = any([digits[i] > digits[i+1] for i in range(len(digits)-1)])
    if has_pair and not has_descend:
        ans += 1
print(ans)