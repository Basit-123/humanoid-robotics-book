---
sidebar_position: 8
title: "Module 8: Whole-Body Control and Motion Planning"
---

# Module 8: Whole-Body Control and Motion Planning

---

## Module Meta

**Module Number**: 8
**Quarter**: 3 (Control, Perception & Learning)
**Prerequisite**: Modules 4-7
**Estimated Time**: 15-17 hours
**Key Themes**: Task-space control, MPC, sampling-based planning, optimization

---

## Module Overview

Whole-body control coordinates all degrees of freedom of a humanoid to achieve multiple simultaneous objectives (balance, manipulation, obstacle avoidance). This module covers hierarchical control, optimization-based methods, and motion planning for high-DoF systems.

**Why this matters for humanoids**: Humanoids have 30+ DoF that must be coordinated in real-time. Whole-body methods enable simultaneous balance and manipulation—key to general-purpose capability.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Formulate hierarchical control problems** with task priorities (balance > manipulation > posture)
2. **Implement task-space controllers** using operational-space formulation
3. **Apply Model Predictive Control (MPC)** for trajectory optimization with receding horizon
4. **Use sampling-based planners** (RRT, RRT*) for collision-free motion planning
5. **Integrate planning and control** in a closed-loop system
6. **Evaluate controller performance** (tracking error, computational cost, robustness)

---

## Topics and Subtopics

### 1. Task-Space Control
- Operational space formulation (Khatib)
- Task Jacobian and null-space projection
- Priority-based task stacking
- Inverse dynamics in task space

**Why this matters for humanoids**: Control in task space (end-effector position, CoM, gaze direction) is more intuitive than joint space for many objectives.

### 2. Hierarchical Control Architectures
- Strict hierarchy: Higher-priority tasks preempt lower
- Weighted hierarchy: Soft trade-offs
- Example: Balance (priority 1) + reaching (priority 2) + joint limit avoidance (priority 3)

**Why this matters for humanoids**: Multiple simultaneous objectives require prioritization to avoid conflicting commands.

### 3. Model Predictive Control (MPC)
- Receding horizon optimization
- Cost function: Tracking error, control effort, constraints
- Real-time implementation challenges
- Applications: Bipedal walking, manipulation

**Why this matters for humanoids**: MPC enables optimal, constraint-aware control with preview of future states.

### 4. Sampling-Based Motion Planning
- Rapidly-exploring Random Trees (RRT)
- RRT* (optimal RRT)
- PRM (Probabilistic Roadmap)
- Collision checking in high-dimensional C-space

**Why this matters for humanoids**: Sampling methods scale to high-DoF systems where grid-based planning is infeasible.

### 5. Optimization-Based Planning
- Trajectory optimization as nonlinear programming
- Direct collocation, shooting methods
- Constraints: Dynamics, collisions, joint limits
- Solvers: IPOPT, SNOPT

**Why this matters for humanoids**: Optimization finds smooth, dynamically feasible trajectories that satisfy complex constraints.

### 6. Integration: Planning and Control
- Planning provides reference trajectory
- Control tracks trajectory with feedback
- Replanning on perception updates
- Real-time execution cycles

**Why this matters for humanoids**: Practical systems require tight integration of planning (deliberative) and control (reactive) layers.

---

## Teaching and Learning Activities

### 1. Task-Space Control Implementation (4 hours)
Implement operational-space control for a 7-DoF arm. Track a desired end-effector trajectory while maintaining joint limits. Extend with null-space posture control.

### 2. MPC for Point Mass (2.5 hours)
Implement simple MPC for a 2D point mass with obstacles. Use quadratic programming (CVXPY). Visualize predicted trajectories.

### 3. RRT Path Planning (3 hours)
Implement RRT for a 2D robot in a cluttered environment. Extend to 3D or higher-dimensional C-space. Measure planning time vs. dimensionality.

### 4. Trajectory Optimization with CasADi (3 hours)
Use CasADi to optimize a reaching trajectory for a 3-DoF arm. Minimize energy subject to obstacle avoidance.

### 5. Whole-Body Simulation (4 hours)
Integrate perception (Module 7), planning (RRT), and control (task-space) in PyBullet. Robot detects object, plans path, executes reach.

### 6. Case Study: Valkyrie Whole-Body Controller (1.5 hours)
Read NASA Valkyrie controller architecture paper. Diagram control hierarchy. Identify design choices and trade-offs.

---

## Assessment Requirements

### Formative
- Quiz on task-space control and MPC
- Peer code review: RRT implementation

### Summative
- **Problem Set 8**:
  - Derive task-space control law
  - Formulate MPC problem for simple system
  - Analyze RRT completeness and optimality
- **Coding Project 3 (Part 2)**: Implement planning + control integration (builds on Module 7)

---

## Assessment Rubric

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **Controller Implementation** | Robust, multi-task coordination | Works for single task | Partial functionality | Non-functional |
| **Planning Performance** | Fast, high-quality paths | Slow but correct | Fragile or inefficient | Broken |
| **Integration** | Seamless perception-plan-control loop | Works with delays/issues | Barely functional | Non-integrated |
| **Analysis** | Insightful performance evaluation | Adequate evaluation | Minimal | No evaluation |

---

## Resources and Tools

### Core Readings
- "A Mathematical Introduction to Robotic Manipulation" (textbook, Chapters 8-9)
- "Model Predictive Control for Walking Robots" (research paper)

### Video
- Lecture: "Operational Space Control" (1 hour)
- Tutorial: "RRT Path Planning in Python" (30 min)

### Software
- CasADi or PyDrake for optimization
- CVXPY for MPC
- PyBullet for simulation

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 2.5 hours |
| Task-space control | 4 hours |
| MPC implementation | 2.5 hours |
| RRT planning | 3 hours |
| Trajectory optimization | 3 hours |
| Whole-body simulation | 4 hours |
| Valkyrie case study | 1.5 hours |
| Problem Set 8 | 3 hours |
| **Total** | **23.5 hours** |

---

## Alignment and Progression Note

### Alignment
- **GLO 4**: Whole-body control and motion planning

### Progression
Modules 7-8 cover perception and control. Module 9 adds learning to enable skill acquisition beyond hand-designed behaviors.

---

**Next**: [Module 9: Learning Physical Skills](../module-09/index.md)
