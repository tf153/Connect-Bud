def add(n):
    ans=0
    for i in range(1,n+1):
        num=int(input())
        ans+=num
    print(ans)

def arav():   
    n=int(input("enter the number of values to be added"))
    add(n)

if __name__=="__main__":
    arav()
