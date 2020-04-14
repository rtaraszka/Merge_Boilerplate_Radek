import 'src/components/DropdownList/style.less';
import 'node_modules/react-widgets/lib/less/select-list.less';
import SelectList from 'react-widgets/lib/SelectList';

let colors = ['orange', 'red', 'blue', 'purple']

let DropdownList = props => (
      <SelectList {...props}/>
);

DropdownList.propTypes = {
    disabled: PropTypes.bool,
    data: PropTypes.array,
    defaultValue: propTypes.string,
}

DropdownList.defaultProps = {
    disabled: true,
    data: {colors},
    defaultValue: 'blue'
  };

  export { DropdownList as default };