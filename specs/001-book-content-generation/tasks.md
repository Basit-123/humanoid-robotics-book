---
description: "Task list for Physical AI, Humanoid Robotics, and Agentic Engineering Book content generation"
---

# Tasks: Physical AI, Humanoid Robotics, and Agentic Engineering Book

**Input**: Design documents from `/specs/001-book-content-generation/`
**Prerequisites**: spec.md, data-model.md, quickstart.md

**Tests**: Not required for this content generation project

**Organization**: Tasks are grouped by user story (quarters) to enable independent content generation and validation of each section.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

This is a Docusaurus v3+ documentation project:
- Content files: `docs/` at repository root
- Configuration: `docusaurus.config.js`, `sidebars.js`
- Static assets: `static/`
- Book-level sections in `docs/` root
- Module content in `docs/modules/`

---

## Phase 1: Setup (Docusaurus Infrastructure)

**Purpose**: Initialize Docusaurus project and establish book structure

- [X] T001 Initialize Docusaurus v3 project with required dependencies in package.json
- [X] T002 Configure docusaurus.config.js with book metadata, navigation, and GitHub Pages deployment
- [X] T003 [P] Create sidebars.js structure for 4 quarters and 12 modules
- [X] T004 [P] Create docs/ directory structure with book-level sections and modules/ subdirectory
- [X] T005 [P] Setup GitHub Actions workflow for automated deployment to GitHub Pages in .github/workflows/deploy.yml
- [X] T006 [P] Create README.md at repository root with project overview and development instructions

---

## Phase 2: Foundational (Book-Level Sections)

**Purpose**: Core book-level content that MUST be complete before module content generation

**⚠️ CRITICAL**: All 5 book-level sections must exist before modules can reference them

- [X] T007 Create docs/index.md with Course/Book Information section
- [X] T008 Create docs/learning-outcomes.md with 6-8 Global Learning Outcomes
- [X] T009 Create docs/assessment-strategy.md with Overall Assessment Strategy
- [X] T010 Create docs/capstone-guidelines.md with Capstone Project Guidelines
- [X] T011 Create docs/academic-integrity.md with Academic Integrity & Collaboration Policy
- [ ] T012 Validate all book-level sections follow Docusaurus MDX format and link correctly

**Checkpoint**: Book foundation ready - module content generation can now begin in parallel

---

## Phase 3: User Story 1 - Learning Foundations of Physical AI (Priority: P1) 🎯 MVP

**Goal**: Generate complete content for Quarter 1 modules (1-3) covering foundations of physical AI and humanoid robotics

**Independent Test**: A learner can articulate the historical context, motivations, and core challenges of physical AI and humanoid robotics, and identify the key abstractions of embodied intelligence after completing these three modules.

### Module 1: The Quest for Physical AI

- [ ] T013 [P] [US1] Create docs/modules/module-01/index.md with Module Meta section
- [ ] T014 [US1] Write Module Overview in docs/modules/module-01/index.md
- [ ] T015 [US1] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-01/index.md
- [ ] T016 [US1] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-01/index.md
- [ ] T017 [US1] Write Teaching and Learning Activities in docs/modules/module-01/index.md
- [ ] T018 [US1] Write Assessment Requirements in docs/modules/module-01/index.md
- [ ] T019 [US1] Write Assessment Rubric in docs/modules/module-01/index.md
- [ ] T020 [US1] Write Resources and Tools (generic descriptions only) in docs/modules/module-01/index.md
- [ ] T021 [US1] Write Workload and Time Planning in docs/modules/module-01/index.md
- [ ] T022 [US1] Write Alignment and Progression Note in docs/modules/module-01/index.md

### Module 2: The Human Body as Engineering Blueprint

- [ ] T023 [P] [US1] Create docs/modules/module-02/index.md with Module Meta section
- [ ] T024 [US1] Write Module Overview in docs/modules/module-02/index.md
- [ ] T025 [US1] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-02/index.md
- [ ] T026 [US1] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-02/index.md
- [ ] T027 [US1] Write Teaching and Learning Activities in docs/modules/module-02/index.md
- [ ] T028 [US1] Write Assessment Requirements in docs/modules/module-02/index.md
- [ ] T029 [US1] Write Assessment Rubric in docs/modules/module-02/index.md
- [ ] T030 [US1] Write Resources and Tools (generic descriptions only) in docs/modules/module-02/index.md
- [ ] T031 [US1] Write Workload and Time Planning in docs/modules/module-02/index.md
- [ ] T032 [US1] Write Alignment and Progression Note in docs/modules/module-02/index.md

### Module 3: Core Abstractions of Embodied Intelligence

- [ ] T033 [P] [US1] Create docs/modules/module-03/index.md with Module Meta section
- [ ] T034 [US1] Write Module Overview in docs/modules/module-03/index.md
- [ ] T035 [US1] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-03/index.md
- [ ] T036 [US1] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-03/index.md
- [ ] T037 [US1] Write Teaching and Learning Activities in docs/modules/module-03/index.md
- [ ] T038 [US1] Write Assessment Requirements in docs/modules/module-03/index.md
- [ ] T039 [US1] Write Assessment Rubric in docs/modules/module-03/index.md
- [ ] T040 [US1] Write Resources and Tools (generic descriptions only) in docs/modules/module-03/index.md
- [ ] T041 [US1] Write Workload and Time Planning in docs/modules/module-03/index.md
- [ ] T042 [US1] Write Alignment and Progression Note in docs/modules/module-03/index.md

### Quarter 1 Validation

- [ ] T043 [US1] Validate all Quarter 1 modules follow the exact 10-part template
- [ ] T044 [US1] Validate all learning outcomes start with required phrase
- [ ] T045 [US1] Validate all topics include "why this matters for humanoids" sentences
- [ ] T046 [US1] Test Docusaurus build and local preview for Quarter 1 content

**Checkpoint**: Quarter 1 (Modules 1-3) should be complete, follow all formatting requirements, and be independently viewable in Docusaurus

---

## Phase 4: User Story 2 - Mastering Kinematics and Dynamics (Priority: P1)

**Goal**: Generate complete content for Quarter 2 modules (4-6) covering kinematics and dynamics for humanoid robots

**Independent Test**: A learner can apply forward and inverse kinematics to high-DoF humanoids, analyze their dynamics and balance, and understand different locomotion gaits after completing these three modules.

### Module 4: Forward & Inverse Kinematics for High-DoF Humanoids

- [ ] T047 [P] [US2] Create docs/modules/module-04/index.md with Module Meta section
- [ ] T048 [US2] Write Module Overview in docs/modules/module-04/index.md
- [ ] T049 [US2] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-04/index.md
- [ ] T050 [US2] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-04/index.md
- [ ] T051 [US2] Write Teaching and Learning Activities with runnable code snippets (PyBullet, MuJoCo free, etc.) in docs/modules/module-04/index.md
- [ ] T052 [US2] Write Assessment Requirements in docs/modules/module-04/index.md
- [ ] T053 [US2] Write Assessment Rubric in docs/modules/module-04/index.md
- [ ] T054 [US2] Write Resources and Tools (generic descriptions only) in docs/modules/module-04/index.md
- [ ] T055 [US2] Write Workload and Time Planning in docs/modules/module-04/index.md
- [ ] T056 [US2] Write Alignment and Progression Note in docs/modules/module-04/index.md

### Module 5: Dynamics, Balance, and the Physics of Not Falling

- [ ] T057 [P] [US2] Create docs/modules/module-05/index.md with Module Meta section
- [ ] T058 [US2] Write Module Overview in docs/modules/module-05/index.md
- [ ] T059 [US2] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-05/index.md
- [ ] T060 [US2] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-05/index.md
- [ ] T061 [US2] Write Teaching and Learning Activities with runnable code snippets (PyBullet, MuJoCo free, etc.) in docs/modules/module-05/index.md
- [ ] T062 [US2] Write Assessment Requirements in docs/modules/module-05/index.md
- [ ] T063 [US2] Write Assessment Rubric in docs/modules/module-05/index.md
- [ ] T064 [US2] Write Resources and Tools (generic descriptions only) in docs/modules/module-05/index.md
- [ ] T065 [US2] Write Workload and Time Planning in docs/modules/module-05/index.md
- [ ] T066 [US2] Write Alignment and Progression Note in docs/modules/module-05/index.md

### Module 6: Locomotion: From ZMP to Learning-Based Gaits

- [ ] T067 [P] [US2] Create docs/modules/module-06/index.md with Module Meta section
- [ ] T068 [US2] Write Module Overview in docs/modules/module-06/index.md
- [ ] T069 [US2] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-06/index.md
- [ ] T070 [US2] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-06/index.md
- [ ] T071 [US2] Write Teaching and Learning Activities with runnable code snippets (PyBullet, MuJoCo free, etc.) in docs/modules/module-06/index.md
- [ ] T072 [US2] Write Assessment Requirements in docs/modules/module-06/index.md
- [ ] T073 [US2] Write Assessment Rubric in docs/modules/module-06/index.md
- [ ] T074 [US2] Write Resources and Tools (generic descriptions only) in docs/modules/module-06/index.md
- [ ] T075 [US2] Write Workload and Time Planning in docs/modules/module-06/index.md
- [ ] T076 [US2] Write Alignment and Progression Note in docs/modules/module-06/index.md

### Quarter 2 Validation

- [ ] T077 [US2] Validate all Quarter 2 modules follow the exact 10-part template
- [ ] T078 [US2] Validate all learning outcomes start with required phrase
- [ ] T079 [US2] Validate all topics include "why this matters for humanoids" sentences
- [ ] T080 [US2] Validate all code snippets use free/open-source tools
- [ ] T081 [US2] Test Docusaurus build and local preview for Quarter 2 content

**Checkpoint**: Quarter 2 (Modules 4-6) should be complete, follow all formatting requirements, and be independently viewable in Docusaurus

---

## Phase 5: User Story 3 - Developing Control, Perception & Learning Skills (Priority: P2)

**Goal**: Generate complete content for Quarter 3 modules (7-9) covering control, perception, and learning for humanoid robots

**Independent Test**: A learner can describe the components of a humanoid perception stack, explain whole-body control and motion planning principles, and understand learning physical skills through imitation and reinforcement learning after completing these three modules.

### Module 7: Perception Stack for Humanoids: Vision, Touch, and Proprioception

- [ ] T082 [P] [US3] Create docs/modules/module-07/index.md with Module Meta section
- [ ] T083 [US3] Write Module Overview in docs/modules/module-07/index.md
- [ ] T084 [US3] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-07/index.md
- [ ] T085 [US3] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-07/index.md
- [ ] T086 [US3] Write Teaching and Learning Activities with runnable code snippets (PyBullet, MuJoCo free, etc.) in docs/modules/module-07/index.md
- [ ] T087 [US3] Write Assessment Requirements in docs/modules/module-07/index.md
- [ ] T088 [US3] Write Assessment Rubric in docs/modules/module-07/index.md
- [ ] T089 [US3] Write Resources and Tools (generic descriptions only) in docs/modules/module-07/index.md
- [ ] T090 [US3] Write Workload and Time Planning in docs/modules/module-07/index.md
- [ ] T091 [US3] Write Alignment and Progression Note in docs/modules/module-07/index.md

### Module 8: Whole-Body Control and Motion Planning

- [ ] T092 [P] [US3] Create docs/modules/module-08/index.md with Module Meta section
- [ ] T093 [US3] Write Module Overview in docs/modules/module-08/index.md
- [ ] T094 [US3] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-08/index.md
- [ ] T095 [US3] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-08/index.md
- [ ] T096 [US3] Write Teaching and Learning Activities with runnable code snippets (PyBullet, MuJoCo free, etc.) in docs/modules/module-08/index.md
- [ ] T097 [US3] Write Assessment Requirements in docs/modules/module-08/index.md
- [ ] T098 [US3] Write Assessment Rubric in docs/modules/module-08/index.md
- [ ] T099 [US3] Write Resources and Tools (generic descriptions only) in docs/modules/module-08/index.md
- [ ] T100 [US3] Write Workload and Time Planning in docs/modules/module-08/index.md
- [ ] T101 [US3] Write Alignment and Progression Note in docs/modules/module-08/index.md

### Module 9: Learning Physical Skills: Imitation, RL, and Foundation Models

- [ ] T102 [P] [US3] Create docs/modules/module-09/index.md with Module Meta section
- [ ] T103 [US3] Write Module Overview in docs/modules/module-09/index.md
- [ ] T104 [US3] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-09/index.md
- [ ] T105 [US3] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-09/index.md
- [ ] T106 [US3] Write Teaching and Learning Activities with runnable code snippets (PyBullet, Isaac Gym free tier, etc.) in docs/modules/module-09/index.md
- [ ] T107 [US3] Write Assessment Requirements in docs/modules/module-09/index.md
- [ ] T108 [US3] Write Assessment Rubric in docs/modules/module-09/index.md
- [ ] T109 [US3] Write Resources and Tools (generic descriptions only) in docs/modules/module-09/index.md
- [ ] T110 [US3] Write Workload and Time Planning in docs/modules/module-09/index.md
- [ ] T111 [US3] Write Alignment and Progression Note in docs/modules/module-09/index.md

### Quarter 3 Validation

- [ ] T112 [US3] Validate all Quarter 3 modules follow the exact 10-part template
- [ ] T113 [US3] Validate all learning outcomes start with required phrase
- [ ] T114 [US3] Validate all topics include "why this matters for humanoids" sentences
- [ ] T115 [US3] Validate all code snippets use free/open-source tools
- [ ] T116 [US3] Test Docusaurus build and local preview for Quarter 3 content

**Checkpoint**: Quarter 3 (Modules 7-9) should be complete, follow all formatting requirements, and be independently viewable in Docusaurus

---

## Phase 6: User Story 4 - Integrating Systems, HRI & Capstone (Priority: P3)

**Goal**: Generate complete content for Quarter 4 modules (10-12) covering systems integration, human-robot interaction, and capstone projects

**Independent Test**: A learner can outline a full-stack humanoid software architecture, discuss human-robot interaction and safety, and integrate various components into a capstone project after completing these three modules.

### Module 10: Full-Stack Humanoid Software Architectures

- [ ] T117 [P] [US4] Create docs/modules/module-10/index.md with Module Meta section
- [ ] T118 [US4] Write Module Overview in docs/modules/module-10/index.md
- [ ] T119 [US4] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-10/index.md
- [ ] T120 [US4] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-10/index.md
- [ ] T121 [US4] Write Teaching and Learning Activities with ROS 2 conceptual examples in docs/modules/module-10/index.md
- [ ] T122 [US4] Write Assessment Requirements in docs/modules/module-10/index.md
- [ ] T123 [US4] Write Assessment Rubric in docs/modules/module-10/index.md
- [ ] T124 [US4] Write Resources and Tools (generic descriptions only) in docs/modules/module-10/index.md
- [ ] T125 [US4] Write Workload and Time Planning in docs/modules/module-10/index.md
- [ ] T126 [US4] Write Alignment and Progression Note in docs/modules/module-10/index.md

### Module 11: Human–Robot Interaction, Safety, and Social Intelligence

- [ ] T127 [P] [US4] Create docs/modules/module-11/index.md with Module Meta section
- [ ] T128 [US4] Write Module Overview in docs/modules/module-11/index.md
- [ ] T129 [US4] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-11/index.md
- [ ] T130 [US4] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-11/index.md
- [ ] T131 [US4] Write Teaching and Learning Activities in docs/modules/module-11/index.md
- [ ] T132 [US4] Write Assessment Requirements in docs/modules/module-11/index.md
- [ ] T133 [US4] Write Assessment Rubric in docs/modules/module-11/index.md
- [ ] T134 [US4] Write Resources and Tools (generic descriptions only) in docs/modules/module-11/index.md
- [ ] T135 [US4] Write Workload and Time Planning in docs/modules/module-11/index.md
- [ ] T136 [US4] Write Alignment and Progression Note in docs/modules/module-11/index.md

### Module 12: Building General-Purpose Humanoids: Integration, Ethics, and Capstone

- [ ] T137 [P] [US4] Create docs/modules/module-12/index.md with Module Meta section
- [ ] T138 [US4] Write Module Overview in docs/modules/module-12/index.md
- [ ] T139 [US4] Write Module Learning Outcomes (must start with "By the end of this module, learners will be able to…") in docs/modules/module-12/index.md
- [ ] T140 [US4] Write Topics and Subtopics with "why this matters for humanoids" sentences in docs/modules/module-12/index.md
- [ ] T141 [US4] Write Teaching and Learning Activities with capstone project scaffolding in docs/modules/module-12/index.md
- [ ] T142 [US4] Write Assessment Requirements in docs/modules/module-12/index.md
- [ ] T143 [US4] Write Assessment Rubric in docs/modules/module-12/index.md
- [ ] T144 [US4] Write Resources and Tools (generic descriptions only) in docs/modules/module-12/index.md
- [ ] T145 [US4] Write Workload and Time Planning in docs/modules/module-12/index.md
- [ ] T146 [US4] Write Alignment and Progression Note in docs/modules/module-12/index.md

### Quarter 4 Validation

- [ ] T147 [US4] Validate all Quarter 4 modules follow the exact 10-part template
- [ ] T148 [US4] Validate all learning outcomes start with required phrase
- [ ] T149 [US4] Validate all topics include "why this matters for humanoids" sentences
- [ ] T150 [US4] Validate capstone integration across all 12 modules
- [ ] T151 [US4] Test Docusaurus build and local preview for Quarter 4 content

**Checkpoint**: Quarter 4 (Modules 10-12) should be complete, follow all formatting requirements, and be independently viewable in Docusaurus. All 12 modules now exist.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, cross-module consistency, and deployment preparation

- [ ] T152 [P] Comprehensive validation: all 5 book-level sections + all 12 modules exist and are complete
- [ ] T153 [P] Validate 100% of learning outcomes start with "By the end of this module, learners will be able to…"
- [ ] T154 [P] Validate 100% of main topics include "why this matters for humanoids" sentences
- [ ] T155 [P] Validate all resources and tools are described generically (no copyrighted titles or links)
- [ ] T156 Cross-module consistency check: terminology, notation, progressive difficulty
- [ ] T157 Validate tone throughout book is rigorous but accessible, exciting but grounded
- [ ] T158 [P] Full Docusaurus production build test: npm run build
- [ ] T159 [P] Validate zero copyrighted text, figures, or institution-specific policies
- [ ] T160 Test navigation and links across all modules and book-level sections
- [ ] T161 Final review against all success criteria from spec.md
- [ ] T162 Update README.md with final book statistics and contribution guidelines

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all module generation
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - User Story 1 (Quarter 1, Modules 1-3): P1 priority - Foundation content
  - User Story 2 (Quarter 2, Modules 4-6): P1 priority - Kinematics & Dynamics (can work in parallel with US1 if staffed)
  - User Story 3 (Quarter 3, Modules 7-9): P2 priority - Advanced topics (builds on Q1-Q2 concepts)
  - User Story 4 (Quarter 4, Modules 10-12): P3 priority - Integration & Capstone (requires all prior content)
- **Polish (Phase 7)**: Depends on all user stories (all 12 modules) being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Can work in parallel with US1
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Conceptually builds on US1/US2 but independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - References all prior modules for capstone integration

### Within Each Module

- Module Meta section first (provides structure)
- Overview → Learning Outcomes → Topics
- Teaching Activities → Assessment Requirements → Rubric
- Resources → Workload → Alignment Note
- Each module is independent and can be worked on in parallel within a quarter

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003-T006)
- All Foundational book-level sections can be written in parallel once structure exists (T007-T011)
- Once Foundational phase completes:
  - Module 1, 2, 3 creation tasks (T013, T023, T033) can start simultaneously
  - Module 4, 5, 6 creation tasks (T047, T057, T067) can start simultaneously
  - Module 7, 8, 9 creation tasks (T082, T092, T102) can start simultaneously
  - Module 10, 11, 12 creation tasks (T117, T127, T137) can start simultaneously
- All validation tasks in Polish phase marked [P] can run in parallel

---

## Parallel Example: Quarter 1 (User Story 1)

```bash
# Launch all three module creation tasks together:
Task: "Create docs/modules/module-01/index.md with Module Meta section" [T013]
Task: "Create docs/modules/module-02/index.md with Module Meta section" [T023]
Task: "Create docs/modules/module-03/index.md with Module Meta section" [T033]

# Within each module, sequential work on sections follows
# Once all Quarter 1 modules complete, launch validation tasks together:
Task: "Validate all Quarter 1 modules follow the exact 10-part template" [T043]
Task: "Validate all learning outcomes start with required phrase" [T044]
Task: "Validate all topics include 'why this matters' sentences" [T045]
```

---

## Implementation Strategy

### MVP First (User Story 1 Only - Quarter 1)

1. Complete Phase 1: Setup (Docusaurus infrastructure)
2. Complete Phase 2: Foundational (5 book-level sections) - CRITICAL
3. Complete Phase 3: User Story 1 (Modules 1-3)
4. **STOP and VALIDATE**: Test Quarter 1 independently in Docusaurus
5. Deploy preview if ready

**MVP Deliverable**: A working Docusaurus site with book-level sections + complete Quarter 1 (3 modules) that learners can use to understand Physical AI foundations.

### Incremental Delivery

1. Complete Setup + Foundational → Book structure ready
2. Add Quarter 1 (US1) → Test independently → Deploy/Demo (MVP!)
3. Add Quarter 2 (US2) → Test independently → Deploy/Demo (First semester complete)
4. Add Quarter 3 (US3) → Test independently → Deploy/Demo (Advanced content added)
5. Add Quarter 4 (US4) → Test independently → Deploy/Demo (Complete 4-quarter course)
6. Each quarter adds educational value without breaking previous content

### Parallel Team Strategy

With multiple content creators:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Creator A: Quarter 1 (Modules 1-3)
   - Creator B: Quarter 2 (Modules 4-6)
   - Creator C: Quarter 3 (Modules 7-9)
   - Creator D: Quarter 4 (Modules 10-12)
3. Quarters complete and integrate independently
4. Final team polish pass for consistency

---

## Notes

- [P] tasks = different files, no dependencies, can run simultaneously
- [Story] label maps task to specific user story (quarter) for traceability
- Each user story (quarter) represents 3 complete modules
- Each module follows strict 10-part template - no exceptions
- All content must be Docusaurus-ready (clean MDX, proper headings)
- Commit after each module or logical group
- Stop at any checkpoint to validate quarter/module independently
- Total: 162 tasks covering full book generation (5 sections + 12 modules)
- Estimated scope: ~150+ pages of rigorous educational content
