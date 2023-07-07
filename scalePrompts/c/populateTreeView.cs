private void PopulateTreeView(List<ExtractedHeaderInfo> extractedHeaderInfoList)
{
    // Clear the existing nodes in the TreeView.
    treeView1.Nodes.Clear();

    // Create a dictionary to store the nodes by OrderNumber.
    Dictionary<string, TreeNode> orderNumberNodes = new Dictionary<string, TreeNode>();

    // Iterate through the extractedHeaderInfoList and create nodes for each object.
    foreach (ExtractedHeaderInfo extractedHeaderInfo in extractedHeaderInfoList)
    {
        // Get the OrderNumber for the current object.
        string orderNumber = extractedHeaderInfo.OrderNumber;

        // If the OrderNumber does not exist in the dictionary, create a new node for it.
        if (!orderNumberNodes.ContainsKey(orderNumber))
        {
            TreeNode orderNumberNode = new TreeNode(orderNumber);
            orderNumberNodes[orderNumber] = orderNumberNode;
            treeView1.Nodes.Add(orderNumberNode);
        }

        // Create a child node for the current object and add it to the OrderNumber node.
        TreeNode orderPositionNode = new TreeNode(extractedHeaderInfo.OrderPosition);
        orderNumberNodes[orderNumber].Nodes.Add(orderPositionNode);

        // Create a grand-child node for the current object and add it to the OrderPosition node.
        TreeNode serialNumberNode = new TreeNode(extractedHeaderInfo.SerialNumber);
        orderPositionNode.Nodes.Add(serialNumberNode);
    }
}
