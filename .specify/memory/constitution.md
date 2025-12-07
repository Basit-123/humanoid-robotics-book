<!--
Sync Impact Report:
Version change: 0.0.0 -> 1.0.0 (MAJOR: Initial comprehensive definition of project principles, standards, constraints, and governance.)
Modified principles:
  - PROJECT_NAME -> AI/spec-driven book — Physical AI, Humanoid Robotics, and Agentic Engineering
  - PRINCIPLE_1_NAME -> 100% Spec-Driven
  - PRINCIPLE_2_NAME -> AI-Native Workflow
  - PRINCIPLE_3_NAME -> Maximum Clarity
  - PRINCIPLE_4_NAME -> Fully Reproducible
  - PRINCIPLE_5_NAME -> Open Source First
Added sections:
  - Key Standards
  - Constraints
Removed sections:
  - None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ Updated (Constitution Check section should refer to the new principles)
  - .specify/templates/spec-template.md: ✅ Updated (Scope/Requirements alignment with new principles)
  - .specify/templates/tasks-template.md: ✅ Updated (Task categorization reflects new principle-driven task types)
  - .specify/templates/commands/sp.constitution.md: ✅ Updated (Placeholder removal)
  - .specify/templates/commands/sp.adr.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.analyze.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.checklist.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.clarify.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.git.commit_pr.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.implement.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.phr.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.plan.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.specify.md: ⚠ Pending (Verify no outdated references)
  - .specify/templates/commands/sp.tasks.md: ⚠ Pending (Verify no outdated references)
Follow-up TODOs:
  - Ensure all command files in `.specify/templates/commands/` are reviewed for alignment with the updated constitution and remove outdated references.
-->
# AI/spec-driven book — Physical AI, Humanoid Robotics, and Agentic Engineering Constitution

## Core Principles

### 100% Spec-Driven
Every chapter, diagram, and code snippet comes from validated specs.

### AI-Native Workflow
Claude Code + Spec-Kit Plus as primary authoring tools.

### Maximum Clarity
Accessible to both engineers and curious non-technical readers.

### Fully Reproducible
Anyone can clone, build, and deploy in <10 minutes.

### Open Source First
MIT license, welcoming contributions.

## Key Standards

- All content in Docusaurus-compatible Markdown/MDX
- Clean, modern Docusaurus theme with dark mode and full-text search
- Every code example tested and runnable
- Specs written and validated in Spec-Kit Plus before any prose or code
- Git commits: atomic, descriptive, signed

## Constraints

- Stack: Docusaurus v3+, GitHub Pages, Node ≥18
- Minimum 10 chapters + intro/conclusion
- Zero untracked dependencies
- All images as SVG or optimized WebP

## Governance

- All outputs must strictly follow user intent.
- Prompt History Records (PHRs) are created automatically and accurately for every user prompt, routed to `history/prompts/constitution/`, `history/prompts/<feature-name>/`, or `history/prompts/general/` based on stage.
- Architectural Decision Record (ADR) suggestions are made intelligently for significant decisions, requiring user consent before creation.
- MCP tools and CLI commands are prioritized for all information gathering and task execution.
- CLI interactions are preferred over manual file creation or reliance on internal knowledge.
- The project aims for a live, custom-domain-ready site on GitHub Pages (zero errors, 100% Lighthouse score ≥90).
- 100% spec coverage is confirmed by Spec-Kit Plus.
- The repository maintains a clean history with zero open issues.
- One-click deploy works for any cloner.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
