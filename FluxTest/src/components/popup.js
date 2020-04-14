import React, { useState } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import { Popover, Button } from "antd";

// export function popup(props) {
//   const getNodeTreeRightClickMenu = () => {
//     const { pageX, pageY, id, categoryName } = {
//       ...rightClickNodeTreeItem
//     };
//     const tmpStyle = {
//       position: "absolute",
//       left: `${pageX - 220}px`,
//       top: `${pageY - 102}px`
//     };
//     const menu = (
//       <div style={tmpStyle} className="self-right-menu">
//         <a> new lower sector </a>
//         <a> modify </a>
//         <a> delete the directory </a>
//       </div>
//     );
//     return this.state.rightClickNodeTreeItem == null ? "" : menu;
//   };

//   return { getNodeTreeRightClickMenu };
// }

// popup.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   Key: PropTypes.string.isRequired,
//   isAddable: PropTypes.bool.isRequired
// };
