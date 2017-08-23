import Draggable from 'react-draggable';

class CustomDraggable extends Draggable {
  componentWillReceiveProps(nextProps) {
    const newState = {
      x: nextProps.start.x,
      y: nextProps.start.y,
    }
    this.setState(newState);
  }
}

export default CustomDraggable;
