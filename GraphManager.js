class GraphManager {
  constructor() {
    this.edges = new Set();
    this.nodes = new Map();
  }
  /**
   * Function that adds nodes with their description to the list of nodes
   *
   * @param {string} node the node that represent a function
   * @param {string} description the signature with or without body of the function
   */
  addNode(node, description) {
    this.nodes.set(node, description);
  }
  /**
   * Function that created the edges between nodes
   *
   * @param {string} sourceNode the function that is calling another function
   * @param {string} targetNode the function that is being called
   */
  addEdge(sourceNode, targetNode) {
    const edge = `${sourceNode}-${targetNode}`;
    if (!this.edges.has(edge)) {
      this.edges.add(edge);
    }
  }

  /**
   * Function that uses the nodes description and edges to generate a properly formatted digraph command
   *
   * @param {string} graphName name of the resulting graph
   * @returns digraph's dot data
   */
  generateDotData(graphName) {
    let dotContent = `digraph ${graphName} \n{\n `;
    for (const [node, description] of this.nodes) {
      dotContent += `${node} ${description}\n`;
    }

    for (const edge of this.edges) {
      const [sourceNode, targetNode] = edge.split("-");
      dotContent += `${sourceNode} -> ${targetNode};\n`;
    }

    dotContent += `}`;

    return dotContent;
  }
}

module.exports = GraphManager;
