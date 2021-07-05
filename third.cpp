#include <iostream>
#include <list>
#include <set>
using namespace std;
set<int> st;
class Graph
{
    int V;
    list<int> *adj;
    void printAllPathsUtil(int, int, bool[], int[], int &);

public:
    Graph(int V);
    void addEdge(int u, int v);
    void printAllPaths(int s, int d);
};

Graph::Graph(int V)
{
    this->V = V;
    adj = new list<int>[V];
}

void Graph::addEdge(int u, int v)
{
    adj[u].push_back(v);
}

void Graph::printAllPaths(int s, int d)
{
    bool *visited = new bool[V];

    int *path = new int[V];
    int path_index = 0;

    for (int i = 0; i < V; i++)
        visited[i] = false;

    printAllPathsUtil(s, d, visited, path, path_index);
}

void Graph::printAllPathsUtil(int u, int d, bool visited[],
                              int path[], int &path_index)
{
    visited[u] = true;
    path[path_index] = u;
    path_index++;

    if (u == d)
    {
        int count = 0;
        for (int i = 0; i < path_index; i++)
            count++;
        st.insert(count);
    }
    else
    {
        list<int>::iterator i;
        for (i = adj[u].begin(); i != adj[u].end(); ++i)
            if (!visited[*i])
                printAllPathsUtil(*i, d, visited, path, path_index);
    }

    path_index--;
    visited[u] = false;
}
int calculate(int n, int t, int s)
{
    int ans = (n - 1) * s;
    if (t < s)
    {
        int temp = s % t;
        temp = t - temp;
        ans += (n - 2) * temp;
        return ans;
    }
    else if (t == s)
    {
        ans += 2 * s * (n - 2);
        return ans;
    }
    return -1;
}
int main()
{
    int n, e, t, s, u, v;
    cin >> n >> e >> t >> s;
    Graph g(n);
    for (int i = 0; i < e; i++)
    {
        cin >> u >> v;
        g.addEdge(u, v);
    }
    g.printAllPaths(1, n);
    auto a = st.begin();
    a++;
    if (a == st.end())
    {
        cout << -1;
    }
    int node = *a;
    cout << calculate(node, t, s);

    return 0;
}
