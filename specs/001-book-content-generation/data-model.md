# Data Model: Physical AI, Humanoid Robotics, and Agentic Engineering Book

**Date**: 2025-12-06
**Feature**: [D:/Hackathon GIAIC/humanoid-robotics-book/specs/001-book-content-generation/spec.md](D:/Hackathon GIAIC/humanoid-robotics-book/specs/001-book-content-generation/spec.md)

## Key Entities

### Book
- Represents the entire collection of educational content.
- Attributes: Title, Author, Target Audience, Prerequisites, Structure (Quarters, Modules).
- Relationships: Contains 12 Modules, composed of multiple Book-level Sections.

### Module
- A self-contained unit of learning within the book.
- Attributes: Title, Overview, Learning Outcomes, Topics/Subtopics, Activities, Assessments, Resources, Workload.
- Relationships: Belongs to a Quarter, contains Code Snippets.

### Learner
- The target individual consuming the book's content.
- Attributes: Academic Level (Undergraduate, Graduate), Background (CS, EE, Mech Eng, Robotics, AI).
- Relationships: Interacts with Modules and Code Snippets.

### Code Snippet
- Runnable code examples embedded within modules.
- Attributes: Language (Python), Tools (PyBullet, MuJoCo free, Isaac Gym/Sim free tier, ROS 2 conceptual).
- Relationships: Contained within a Module.
