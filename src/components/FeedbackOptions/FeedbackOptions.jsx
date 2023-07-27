import PropTypes from 'prop-types';
import Button from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onButtonClick }) => {
  <div>
    {options.map(option => (
      <Button
        type="button"
        key={option}
        onClick={() => onButtonClick()}
      ></Button>
    ))}
  </div>;
};

FeedbackOptions.PropTypes = {
  options: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
