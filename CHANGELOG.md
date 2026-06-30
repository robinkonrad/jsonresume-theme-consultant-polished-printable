# Changelog

All notable changes to `jsonresume-theme-consultant-polished-printable` will be documented in this file.

## 1.0.3

### Fixed

- Matched work, project, and volunteer highlight bullet list text to the surrounding content size.

## 1.0.2

### Fixed

- Styling fix

## 1.0.1

### Changed

- Reduced explicit typography sizes by `6px` while preserving the original `16px` root scale for layout spacing and rhythm.

### Fixed

- Restored styled-components SSR output in the built package by bundling `@jsonresume/core` with the theme.
- Restored original-theme layout proportions after the printable size adjustment.

## 1.0.0

### Added

- Initial printable variant of the Consultant Polished JSON Resume theme.
- Structured single-column resume layout for consulting, strategy, and advisory profiles.
- Styled sections for basics, summary, work, projects, education, certificates, publications, awards, volunteer work, skills, languages, interests, and references.
- Print-focused rendering through `@jsonresume/core/ssr`.
- Markdown rendering support for rich summary and description fields.
