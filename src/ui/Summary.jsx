import styled from 'styled-components';
import Section from './Section.jsx';

const SummaryText = styled.p`
  font-size: 0.6875rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
`;

const Summary = ({ basics }) => {
  if (!basics?.summary) return null;

  return (
    <Section title="Profile">
      <SummaryText>{basics.summary}</SummaryText>
    </Section>
  );
};

export default Summary;
