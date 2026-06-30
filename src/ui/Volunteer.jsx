import styled from 'styled-components';
import Section from './Section.jsx';
import { marked } from 'marked';

const VolunteerItem = styled.div`
  margin-bottom: 0.875rem;
  break-inside: avoid;
  page-break-inside: avoid;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Position = styled.h3`
  font-size: 0.6875rem;
  color: #0b1f3a;
  margin: 0;
`;

const DateRange = styled.div`
  font-size: 0.525rem;
  color: #666;
`;

const Organization = styled.div`
  font-size: 0.625rem;
  color: #555;
  margin-bottom: 0.25rem;
`;

const Description = styled.div`
  font-size: 0.625rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.25rem;

  p {
    margin-bottom: 0.25rem;
  }
`;

const Highlights = styled.ul`
  margin-top: 0.25rem;
  padding-left: 1.5rem;
  list-style: disc;
  font-size: 0.625rem;

  li {
    margin-bottom: 0.15rem;
    line-height: 1.35;
    color: #444;
  }
`;

const formatDate = (date) => {
  if (!date) return 'Present';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Volunteer = ({ volunteer }) => {
  if (!volunteer || volunteer.length === 0) return null;

  return (
    <Section title="Volunteer Work">
      {volunteer.map((item, i) => (
        <VolunteerItem key={i}>
          <Header>
            <Position>{item.position}</Position>
            <DateRange>
              {formatDate(item.startDate)} - {formatDate(item.endDate)}
            </DateRange>
          </Header>
          <Organization>{item.organization}</Organization>
          {item.summary && (
            <Description
              dangerouslySetInnerHTML={{ __html: marked(item.summary) }}
            />
          )}
          {item.highlights && item.highlights.length > 0 && (
            <Highlights>
              {item.highlights.map((highlight, j) => (
                <li key={j}>{highlight}</li>
              ))}
            </Highlights>
          )}
        </VolunteerItem>
      ))}
    </Section>
  );
};

export default Volunteer;
