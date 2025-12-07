---
sidebar_position: 4
title: Capstone Project Guidelines
---

# Capstone Project Guidelines

The **Capstone Project** is the culminating experience of this course, providing an opportunity to synthesize knowledge from all 12 modules into a substantial, integrated project that demonstrates mastery of physical AI and humanoid robotics.

## Overview

**Weight**: 20% of final grade
**Timeline**: Quarter 4 (Weeks 10-12)
**Team size**: Individual or teams of 2-3 students
**Deliverables**: Proposal, progress update, code/demo, technical report, oral presentation

---

## Learning Objectives

Through the capstone project, you will:

1. **Integrate knowledge** across perception, planning, control, and learning
2. **Design and implement** a complete humanoid system addressing a real-world challenge
3. **Conduct experiments** to validate your approach and analyze results
4. **Communicate findings** through professional-quality documentation and presentation
5. **Reflect critically** on design decisions, limitations, and future work

---

## Project Scope

A successful capstone project should:

- **Build on course material**: Integrate concepts from at least 3 different modules
- **Demonstrate technical depth**: Go beyond trivial applications; show mastery
- **Be feasible**: Completable within 3 weeks with available tools and resources
- **Be original**: Your own work, not a direct replication of existing tutorials
- **Address a clear problem**: Articulate motivation, challenges, and success criteria

---

## Project Topic Selection

### Option 1: Choose from Suggested Topics

We provide a curated list of capstone topics across different technical areas:

#### Perception & State Estimation
- Multi-modal sensor fusion for humanoid localization in GPS-denied environments
- Real-time object pose estimation for manipulation using vision and touch
- Failure detection and recovery for perceptual systems in adverse conditions

#### Planning & Control
- Whole-body motion planning for bimanual manipulation in cluttered spaces
- Model-predictive control for dynamic locomotion over rough terrain
- Contact-rich manipulation with compliance control and force feedback

#### Learning & Adaptation
- Imitation learning for multi-step assembly tasks from human demonstrations
- Sim-to-real transfer for locomotion policies trained in Isaac Gym
- Foundation model integration for language-conditioned robot behaviors

#### Systems Integration
- Full-stack ROS 2 architecture for autonomous mobile manipulation
- Teleoperation interface with VR for intuitive humanoid control
- Multi-robot collaboration for cooperative object transport

#### Human-Robot Interaction & Safety
- Socially-aware navigation in crowded human environments
- Safe physical human-robot interaction with admittance control
- Natural language grounding for instruction following

### Option 2: Propose Your Own Topic

If you have a specific interest not covered in the suggested topics:

1. **Draft a 1-page proposal** describing:
   - Problem statement and motivation
   - Technical approach and methods
   - Required resources (simulators, datasets, etc.)
   - Expected outcomes and success criteria
2. **Submit for approval** by the end of Week 9 (before Quarter 4 begins)
3. **Iterate based on feedback** to ensure feasibility and scope

---

## Deliverables

### 1. Project Proposal (Due Week 10, Day 1)

**Format**: 2-page PDF
**Weight**: 5% of capstone grade

**Required sections**:
- **Title and team members**
- **Problem statement**: What challenge are you addressing? Why does it matter?
- **Background**: Relevant prior work and course concepts
- **Approach**: High-level technical strategy (algorithms, tools, architecture)
- **Evaluation plan**: How will you validate success? What metrics?
- **Timeline**: Milestones for Weeks 10, 11, 12

**Evaluation criteria**:
- Clarity and specificity of problem (30%)
- Technical feasibility (40%)
- Alignment with learning outcomes (30%)

---

### 2. Progress Update (Presentation Week 11)

**Format**: 10-minute presentation + 5 minutes Q&A
**Weight**: 10% of capstone grade

**Required content**:
- Summary of project goals
- Progress to date (what's working, what's not)
- Preliminary results (screenshots, videos, plots)
- Challenges encountered and mitigation strategies
- Updated plan for final week

**Evaluation criteria**:
- Progress against timeline (40%)
- Quality of preliminary results (30%)
- Clarity of presentation (30%)

---

### 3. Final Implementation (Due Week 12, End)

**Format**: GitHub repository (public or private with instructor access)
**Weight**: 30% of capstone grade

**Required contents**:
- **Source code**: Well-documented, organized, runnable
- **README**: Setup instructions, dependencies, how to run
- **Demo**: Video (2-3 minutes) or live demonstration
- **Data**: Simulation logs, experimental results, trained models (if applicable)

**Evaluation criteria**:
- Correctness and functionality (50%)
- Code quality and documentation (25%)
- Reproducibility (25%)

---

### 4. Technical Report (Due Week 12, End)

**Format**: 10-15 page PDF (ACM or IEEE conference template)
**Weight**: 40% of capstone grade

**Required sections**:
1. **Abstract** (150-200 words)
2. **Introduction**: Motivation, problem statement, contributions
3. **Related Work**: Survey of 5-10 relevant papers/systems
4. **Approach**: Detailed technical description with diagrams
5. **Implementation**: Software architecture, tools, design decisions
6. **Experiments**: Setup, metrics, results, analysis
7. **Discussion**: Limitations, failure cases, lessons learned
8. **Conclusion**: Summary and future work
9. **References**: Properly cited in academic format

**Evaluation criteria**:
- Technical depth and correctness (35%)
- Experimental rigor and analysis (30%)
- Writing quality and clarity (20%)
- Integration of course concepts (15%)

---

### 5. Oral Presentation (Week 12, Final Days)

**Format**: 15-minute presentation + 5 minutes Q&A
**Weight**: 15% of capstone grade

**Required content**:
- Motivation and problem statement (2 min)
- Technical approach (5 min)
- Results and demo (5 min)
- Conclusions and reflections (3 min)

**Evaluation criteria**:
- Clarity and organization (40%)
- Technical content and depth (35%)
- Quality of demo/visuals (25%)

---

## Technical Requirements

### Tools and Platforms

All projects must use **open-source, freely-available tools**:

**Simulators**:
- PyBullet (recommended for beginners)
- MuJoCo (free version)
- Isaac Gym/Sim (free tier, requires NVIDIA GPU)
- Gazebo with ROS 2

**Programming**:
- Python 3.8+
- C++ (optional, for performance-critical components)

**Frameworks**:
- ROS 2 (Humble or later)
- PyTorch or JAX for learning-based approaches

**Visualization**:
- Matplotlib, Plotly for plots
- MeshCat, RViz for 3D visualization

### Hardware (Optional)

If you have access to physical robots:
- Low-cost hardware platforms (e.g., open-source manipulators, mobile bases) are acceptable
- Validate in simulation first, then transfer to hardware as a bonus
- Hardware demos are not required but can enhance your project

### Compute Resources

- Simulation and training can be done on standard laptops for most projects
- GPU-intensive RL training: Use free cloud resources (Google Colab, Kaggle) or lab machines if available
- Contact instructor if compute requirements exceed free tier availability

---

## Collaboration Expectations

### Team Projects (2-3 students)

**Division of work**:
- Each team member must contribute substantially to all deliverables
- Clearly document individual contributions in the report (appendix)
- All members present during oral presentation (divide speaking time)

**Grading**:
- Default: All team members receive the same grade
- Exception: If contribution imbalance is documented and egregious, individual adjustments may be made
- Peer evaluations collected confidentially after project completion

### Individual Projects

- Solo work demonstrates ability to independently manage a complex project
- Scope expectations are adjusted downward compared to team projects
- Seek feedback early and often through office hours

---

## Evaluation Rubric Summary

| Component | Weight | Key Criteria |
|-----------|--------|--------------|
| Proposal | 5% | Clarity, feasibility, alignment |
| Progress Update | 10% | Progress, preliminary results, presentation |
| Implementation | 30% | Correctness, code quality, reproducibility |
| Technical Report | 40% | Depth, rigor, writing, integration |
| Oral Presentation | 15% | Clarity, content, demo quality |
| **Total** | **100%** | |

Detailed rubrics for each deliverable will be provided with assignment specifications.

---

## Timeline and Milestones

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| Week 9 (end) | Topic selection | Proposal draft (if custom topic) |
| Week 10, Day 1 | Proposal submission | 2-page proposal PDF |
| Week 10, Day 3 | Proposal feedback | Instructor comments and approval |
| Week 10-11 | Core implementation | Code, experiments, analysis |
| Week 11 | Progress update | 10-min presentation |
| Week 11-12 | Finalization | Polish code, write report, prepare presentation |
| Week 12 (end) | Final submission | GitHub repo + technical report |
| Week 12 (final days) | Presentations | 15-min presentation + Q&A |

---

## Tips for Success

1. **Start early**: Don't underestimate report writing and debugging time
2. **Scope appropriately**: Better to do one thing excellently than three things poorly
3. **Validate incrementally**: Test each component before integrating
4. **Document as you go**: Don't leave all writing for the last day
5. **Use version control**: Commit frequently to avoid losing work
6. **Seek feedback**: Come to office hours with specific questions
7. **Practice your presentation**: Rehearse timing and transitions
8. **Have a backup plan**: If your primary approach fails, what's Plan B?

---

## Example Capstone Projects (Inspiration)

### Example 1: "Safe Bimanual Handover for Assistive Robotics"

**Problem**: Assistive robots must hand objects to humans safely, accounting for varying grip strengths and object fragilities.

**Approach**:
- Implement force-controlled bimanual grasping in PyBullet
- Use tactile sensors to detect human grasp and release contact
- Design a finite-state machine for handover phases (approach, contact, transfer, release)

**Results**: Demonstrated 95% success rate in simulation across 100 trials with objects of varying mass and geometry. Identified failure modes (very slippery objects) and proposed solutions.

### Example 2: "Sim-to-Real Transfer for Quadrupedal Locomotion"

**Problem**: Policies trained in simulation often fail on real hardware due to dynamics mismatch.

**Approach**:
- Train a policy for trotting gait in Isaac Gym using PPO
- Apply domain randomization (friction, mass, latency)
- Validate in simulation with realistic sensor noise

**Results**: Policy achieved stable locomotion across randomized terrain types. Analyzed sensitivity to domain randomization parameters. Discussed deployment strategy for real hardware (not implemented but planned).

### Example 3: "Language-Conditioned Manipulation with Foundation Models"

**Problem**: Robots should understand natural language instructions for manipulation tasks.

**Approach**:
- Fine-tune a vision-language model (e.g., CLIP) for object identification
- Map language commands to motion primitives (pick, place, push)
- Integrate with motion planner in PyBullet

**Results**: System successfully executed 10 different instructions ("Pick up the red block and place it on the blue block") with 85% success. Error analysis revealed challenges with spatial prepositions ("next to" vs. "on top of").

---

## Frequently Asked Questions

**Q: Can I continue work from a previous project or research?**
A: Yes, if you significantly extend it with new contributions. Clearly delineate prior work vs. new capstone contributions.

**Q: Can I collaborate with students from other courses/institutions?**
A: Teams must consist only of students enrolled in this course. External consultation is fine but must be acknowledged.

**Q: What if my project doesn't work by the deadline?**
A: Projects are evaluated on effort, rigor, and learning—not just success. Document what you tried, why it failed, and what you learned. Negative results, well-analyzed, can earn full credit.

**Q: Can I use proprietary tools (MATLAB, Unity, etc.)?**
A: No. All tools must be free and open-source to ensure accessibility and reproducibility.

---

## Resources

- **Project brainstorming**: Office hours, Week 9
- **Literature search**: Google Scholar, arXiv, robotics conferences (ICRA, IROS, RSS, CoRL)
- **Technical support**: Discussion forum, TA office hours
- **Writing resources**: Technical writing guides linked in course website

---

**Ready to begin?** Review the [Academic Integrity Policy](./academic-integrity.md) to ensure you understand collaboration expectations, then start brainstorming your capstone project idea!
