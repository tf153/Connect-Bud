#include <iostream>
using namespace std;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, k;
        cin >> n >> k;
        if (k > 0)
            cout << 1 << ' ';
        else
            cout << 0 << ' ';
        int tem = k * 2;
        cout << ((n - k < tem) ? n - k : tem) << endl;
    }
    return 0;
}