public class AStar
{
    private readonly IList<Node> openNodes;
    private readonly IList<Node> closedNodes;
    private readonly Func<Node, double> heuristic;

    public AStar(Func<Node, double> heuristic)
    {
        this.openNodes = new List<Node>();
        this.closedNodes = new List<Node>();
        this.heuristic = heuristic;
    }

    public IEnumerable<Node> FindPath(Node start, Node goal)
    {
        openNodes.Add(start);

        while (openNodes.Count > 0)
        {
            Node currentNode = openNodes.MinBy(node => node.TotalCost);
            openNodes.Remove(currentNode);
            closedNodes.Add(currentNode);

            if (currentNode == goal)
            {
                return currentNode.GetPath();
            }

            foreach (Node neighbor in currentNode.GetNeighbors())
            {
                if (closedNodes.Contains(neighbor))
                {
                    continue;
                }

                double newCost = currentNode.TotalCost + neighbor.Cost;
                if (!openNodes.Contains(neighbor) || newCost < neighbor.TotalCost)
                {
                    neighbor.TotalCost = newCost;
                    neighbor.Parent = currentNode;
                    openNodes.Add(neighbor);
                }
            }
        }

        return Enumerable.Empty<Node>();
    }
}
