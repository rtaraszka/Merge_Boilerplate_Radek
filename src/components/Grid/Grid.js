import GridLayout from 'react-grid-layout';
import PropTypes from 'prop-types';
import React from 'react';

class Grid extends React.Component {
  render() {
    return (
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
        <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
      </GridLayout>
    )
  }
}

Grid.propTypes = {
    // This allows setting the initial width on the server side.
// This is required unless using the HOC <WidthProvider> or similar
width: PropTypes.number,

// If true, the container height swells and contracts to fit contents
autoSize: PropTypes.bool,

// Number of columns in this layout.
cols: PropTypes.number,

// A CSS selector for tags that will not be draggable.
// For example: draggableCancel:'.MyNonDraggableAreaClassName'
// If you forget the leading . it will not work.
draggableCancel: PropTypes.string,

// A CSS selector for tags that will act as the draggable handle.
// For example: draggableHandle:'.MyDragHandleClassName'
// If you forget the leading . it will not work.
draggableHandle: PropTypes.string,

// If true, the layout will compact vertically
verticalCompact: PropTypes.bool,

// Compaction type.
compactType: PropTypes.oneOfType(['vertical' | 'horizontal']),

// Layout is an array of object with the format:
// {x: number, y: number, w: number, h: number}
// The index into the layout must match the key used on each item component.
// If you choose to use custom keys, you can specify that key in the layout
// array objects like so:
// {i: string, x: number, y: number, w: number, h: number}
layout: PropTypes.node, // If not provided, use data-grid props on children

// Margin between items [x, y] in px.
margin: PropTypes.number,

// Padding inside the container [x, y] in px
containerPadding: PropTypes.number,

// Rows have a static height, but you can change this based on breakpoints
// if you like.
rowHeight: PropTypes.number,

// Configuration of a dropping element. Dropping element is a "virtual" element
// which appears when you drag over some element from outside.
// It can be changed by passing specific parameters:
//  i - id of an element
//  w - width of an element
//  h - height of an element
droppingItem: PropTypes.node,

//
// Flags
//
isDraggable: PropTypes.bool,
isResizable: PropTypes.bool,
// Uses CSS3 translate() instead of position top/left.
// This makes about 6x faster paint performance
useCSSTransforms: PropTypes.bool,
// If parent DOM node of ResponsiveReactGridLayout or ReactGridLayout has "transform: scale(n)" css property,
// we should set scale coefficient to avoid render artefacts while dragging.
transformScale: PropTypes.number,

// If true, grid items won't change position when being
// dragged over.
preventCollision: PropTypes.bool,

// If true, droppable elements (with `draggable={true}` attribute)
// can be dropped on the grid. It triggers "onDrop" callback
// with position and event object as parameters.
// It can be useful for dropping an element in a specific position
//
// NOTE: In case of using Firefox you should add
// `onDragStart={e => e.dataTransfer.setData('text/plain', '')}` attribute
// along with `draggable={true}` otherwise this feature will work incorrect.
// onDragStart attribute is required for Firefox for a dragging initialization
// @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
isDroppable: PropTypes.bool,
}

export default Grid;