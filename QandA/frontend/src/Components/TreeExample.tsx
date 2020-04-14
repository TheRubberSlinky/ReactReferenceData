import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Tree } from 'antd';

// const { TreeNode } = Tree;
// const initTreeDate = [
//   {
//     title: 'Expand to load',
//     key: '0',
//   },
//   {
//     title: 'Expand to load',
//     key: '1',
//   },
//   {
//     title: 'Tree Node',
//     key: '2',
//     isLeaf: true,
//   },
// ]; // It's just a simple demo. You can use tree map to optimize update perf.

// function updateTreeData(list, key, children) {
//   return list.map(node => {
//     if (node.key === key) {
//       return { ...node, children };
//     }
//     if (node.children) {
//       return {
//         ...node,
//         children: updateTreeData(node.children, key, children),
//       };
//     }

//     return node;
//   });
// }

// export const Demo = () => {
//   const [treeData, setTreeData] = useState(initTreeDate);

//   function onLoadData({ key, children }) {
//     return new Promise(resolve => {
//       if (children) {
//         resolve();
//         return;
//       }

//       setTimeout(() => {
//         setTreeData(origin =>
//           updateTreeData(origin, key, [
//             {
//               title: 'Child Node',
//               key: `${key}-0`,
//             },
//             {
//               title: 'Child Node',
//               key: `${key}-1`,
//             },
//           ]),
//         );
//         resolve();
//       }, 1000);
//     });
//   }

//   return <Tree loadData={onLoadData} treeData={treeData} />;
// };

// class Demo1 extends React.Component {
//   state = {
//     treeData: [
//       {
//         title: 'Expand to load',
//         key: '0',
//       },
//       {
//         title: 'Expand to load',
//         key: '1',
//       },
//       {
//         title: 'Tree Node',
//         key: '2',
//         isLeaf: true,
//       },
//     ],
//   };

//   onLoadData = treeNode => {
//     const { treeData } = this.state;
//     return new Promise(resolve => {
//       const { props } = treeNode;

//       if (treeNode.children) {
//         resolve();
//         return;
//       }

//       setTimeout(() => {
//         treeNode.children = [
//           {
//             title: 'Child Node',
//             key: `${treeNode.eventKey}-0`,
//           },
//           {
//             title: 'Child Node',
//             key: `${treeNode.eventKey}-1`,
//           },
//         ];
//         this.setState({
//           treeData: [...this.state.treeData],
//         });
//         resolve();
//       }, 1000);
//     });
//   };

//   render() {
//     return <Tree loadData={this.onLoadData} treeData={this.state.treeData} />;
//   }
// }

// ReactDOM.render(<Demo />, document.getElementById('container'));
