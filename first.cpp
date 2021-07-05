#include <bits/stdc++.h>
using namespace std;
vector<int> v[1005];
vector<int> dist(1005);
vector<bool> vis(1005);
vector<int> x;
void go(int n, int k)
{
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, 1});
    for (int i = 1; i <= n; i++)
        dist[i] = 1e9;
    dist[1] = 0;
    while (pq.empty() == false)
    {
        pair<int, int> cur = pq.top();
        pq.pop();
        int u = cur.second, d = cur.first;
        vis[u] = true;
        for (auto i : v[u])
        {
            if (vis[i])
                continue;
            if (dist[i] > k + d)
            {
                dist[i] = k + d;
                if (i != n)
                    pq.push({*lower_bound(x.begin(), x.end(), dist[i]), i});
            }
        }
    }
    cout << dist[n] << endl;
}
void solve()
{
    int n, m, c, k;
    cin >> n >> m >> c >> k;
    int p = c;
    for (int i = 0; i < n; i++)
    {
        x.push_back(p);
        p += c;
    }
    for (int i = 0; i < m; i++)
    {
        int a, b;
        cin >> a >> b;
        v[a].push_back(b);
        v[b].push_back(a);
    }
    go(n, k);
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t = 1;
    //cin >> t;
    while (t--)
    {
        solve();
    }
}