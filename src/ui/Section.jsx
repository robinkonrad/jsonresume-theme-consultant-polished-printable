import styled from 'styled-components';

const SectionContainer = styled.section`
  margin-bottom: 1.25rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.125rem;
  color: #0b1f3a;
  margin-bottom: 0.625rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Section = ({ title, children }) => {
  if (!children) return null;

  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionContainer>
  );
};

export default Section;
