import PropTypes from 'prop-types';
import { Title, Container } from './SectionStyles';

const Section = ({ title, children }) => {
  <Container>
    <Title>{title}</Title>
    <>{children}</>
  </Container>;
};

Section.PropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
