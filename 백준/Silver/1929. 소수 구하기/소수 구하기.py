import sys
input = sys.stdin.readline

m, n = map(int, input().split())

# 소수 여부를 저장할 리스트
is_prime = [True] * (n+1)
is_prime[0] = False
is_prime[1] = False

# 2부터 루트n까지 반복하며 배수 지우기
for i in range (2, int(n**0.5) +1):
    if is_prime[i]:
        for j in range(i*i, n+1, i):
            is_prime[j] = False

for i in range(m, n+1):
    if is_prime[i]:
        print(i)
