#include <bits/stdc++.h>
using namespace std;
int LCA(int *root, int a, int b)
{
    vector<int> a_path, b_path;
    a_path = dfs(root, a);
    b_path = dfs(root, b);
    int i = a_path.size() - 1;
    int j = b_path.size() - 1;
    while (i > 0 && j > 0)
    {
        if (a_path[i] == b_path[j])
        {
            i--;
            j--;
        }
        else
        {
            break;
        }
    }
    return a_path[i + 1];
}