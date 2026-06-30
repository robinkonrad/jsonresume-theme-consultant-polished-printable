import styled from 'styled-components';
import Section from './Section.jsx';
import { marked } from 'marked';

const ProjectItem = styled.div`
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

const ProjectName = styled.h3`
  font-size: 0.6875rem;
  color: #0b1f3a;
  margin: 0;
`;

const DateRange = styled.div`
  font-size: 0.525rem;
  color: #666;
`;

const Entity = styled.div`
  font-size: 0.575rem;
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
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <Section title="Projects">
      {projects.map((project, i) => (
        <ProjectItem key={i}>
          <Header>
            <ProjectName>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </ProjectName>
            {(project.startDate || project.endDate) && (
              <DateRange>
                {formatDate(project.startDate)}
                {project.endDate && ` - ${formatDate(project.endDate)}`}
              </DateRange>
            )}
          </Header>
          {project.entity && <Entity>{project.entity}</Entity>}
          {project.description && (
            <Description
              dangerouslySetInnerHTML={{ __html: marked(project.description) }}
            />
          )}
          {project.highlights && project.highlights.length > 0 && (
            <Highlights>
              {project.highlights.map((highlight, j) => (
                <li key={j}>{highlight}</li>
              ))}
            </Highlights>
          )}
        </ProjectItem>
      ))}
    </Section>
  );
};

export default Projects;
