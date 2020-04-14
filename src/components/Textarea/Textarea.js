import TextareaAutosize from 'react-textarea-autosize';
import * as PropTypes from 'prop-types';;

const Textarea = (props) => (
    <TextareaAutosize  {...props}/>
  );

Textarea.propTypes = {
    maxRows: PropTypes.number,
    minRows: PropTypes.number,
}

Textarea.defaultProps = {
    maxRows: 6,
    minRows: 2,
};

export { Textarea as default };