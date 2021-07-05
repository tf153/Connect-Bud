vector<int> s;
vector<int> g[n];
bool visited[n];
void dfs(int baap)
{
    if (baap == destination)
    {
        for (int i = 0; i < s.size(); i++)
            printf("%d ", s[i]);
        printf("%d\n", destination);
        return;
    }

    visited[baap] = true;
    s.push_back(baap);

    for (int i = 0; i < g[baap].size(); i++)
    {
        int beta = g[baap][i];
        if (!visited[beta])
        {
            dfs(beta);
        }
    }
    visited[baap] = false;
    s.pop_back();
}