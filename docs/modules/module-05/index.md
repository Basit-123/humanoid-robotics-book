---
sidebar_position: 5
title: "Module 5: Dynamics, Balance, and the Physics of Not Falling"
---

# Module 5: Dynamics, Balance, and the Physics of Not Falling

---

## Module Meta

**Module Number**: 5
**Quarter**: 2 (Kinematics & Dynamics)
**Prerequisite**: Module 4, classical mechanics basics
**Estimated Time**: 14-16 hours
**Key Themes**: Lagrangian/Newton-Euler dynamics, ZMP, balance, contact forces

---

## Module Overview

Dynamics extends kinematics by incorporating forces, torques, mass, and inertia. This module covers forward dynamics (forces → accelerations), inverse dynamics (accelerations → forces), and bipedal balance criteria including the Zero Moment Point (ZMP).

**Why this matters for humanoids**: Unlike wheeled robots, bipedal humanoids must actively maintain balance against gravity. Understanding dynamics is essential for stable locomotion and manipulation.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Formulate robot dynamics** using Lagrangian and Newton-Euler methods
2. **Compute forward and inverse dynamics** for serial manipulators
3. **Explain the Zero Moment Point (ZMP)** criterion for bipedal stability
4. **Analyze static vs. dynamic balance** and identify conditions for tipping
5. **Implement basic balance controllers** using ZMP feedback
6. **Simulate dynamics** in physics engines and validate controller designs

---

## Topics and Subtopics

### 1. Lagrangian Dynamics
- Kinetic and potential energy formulation
- Euler-Lagrange equations: d/dt(∂L/∂q̇) - ∂L/∂q = τ
- Deriving equations of motion
- Mass matrix, Coriolis/centrifugal terms, gravity terms

**Why this matters for humanoids**: Lagrangian formulation provides systematic derivation of dynamics for complex systems.

### 2. Newton-Euler Recursive Dynamics
- Forward recursion: propagate velocities and accelerations
- Backward recursion: propagate forces and torques
- Computational efficiency: O(n) vs. O(n³) for symbolic Lagrangian

**Why this matters for humanoids**: Real-time control requires fast dynamics computation. Recursive Newton-Euler is the practical algorithm.

### 3. Zero Moment Point (ZMP)
- Definition: Point where net moment from ground reaction forces is zero
- ZMP stability criterion: ZMP inside support polygon
- Center of Pressure (CoP) vs. ZMP
- Static stability vs. dynamic walking

**Why this matters for humanoids**: ZMP is the gold standard for bipedal balance. Most walking controllers use ZMP-based planning.

### 4. Contact Modeling
- Point contacts vs. distributed contacts
- Friction cones and force constraints
- Coulomb friction: [Coulomb friction formula]
- Impact dynamics (instantaneous collisions)

**Why this matters for humanoids**: Contact with ground, objects, or obstacles is ubiquitous. Accurate contact modeling enables realistic simulation and control.

### 5. Balance Control Strategies
- PID control on ZMP error
- Model-Predictive Control (MPC) preview
- Linear Inverted Pendulum Model (LIPM) for walking
- Push recovery and disturbance rejection

**Why this matters for humanoids**: Active balance control distinguishes humanoids from passively stable systems. Controllers must react to external pushes and terrain variations.

### 6. Simulation and Validation
- Physics engines: PyBullet, MuJoCo, Isaac Sim
- Numerical integration (Euler, RK4, implicit methods)
- Sim-to-real gap: Why simulations don't perfectly predict reality

**Why this matters for humanoids**: Simulation is the primary tool for development and testing before deploying on expensive hardware.

---

## Teaching and Learning Activities

### 1. Lagrangian Derivation (3 hours)
Derive equations of motion for a double pendulum using Lagrangian mechanics. Compare to textbook solution.

### 2. ZMP Calculation Exercise (2 hours)
Given a humanoid standing on one foot with known forces, calculate ZMP. Is it stable?

### 3. Balance Simulation in PyBullet (4 hours)
Load a humanoid model in PyBullet. Implement a simple ZMP-based balance controller. Apply random pushes and observe recovery.

**Code provided as starting point**

### 4. Contact Force Visualization (1.5 hours)
Simulate a box being pushed on a table with friction. Plot contact forces over time. Vary friction coefficient.

### 5. Walking Gait Analysis (2 hours)
Analyze motion capture data (or video) of human walking. Identify single-support, double-support phases. Estimate ZMP trajectory.

### 6. Case Study: Atlas Push Recovery (1.5 hours)
Watch videos of Boston Dynamics Atlas recovering from pushes. Infer control strategy. What sensors/actuators enable recovery?

---

## Assessment Requirements

### Formative
- Quiz on ZMP and balance criteria
- Peer discussion: Static vs. dynamic stability

### Summative
- **Problem Set 5**:
  - Derive dynamics for simple system using Lagrangian
  - Compute ZMP for given configuration
  - Design PID balance controller gains
- **Coding Project 2 (Part 2)**: Implement balance controller in PyBullet (extends Module 4 work)

---

## Assessment Rubric

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **Dynamics Derivation** | Correct, clear derivation | Minor errors, method correct | Significant errors | Fundamentally wrong |
| **ZMP Analysis** | Accurate calculation and interpretation | Mostly correct | Partial understanding | Incorrect |
| **Balance Controller** | Robust performance, handles disturbances | Works in nominal conditions | Unstable or marginal | Non-functional |
| **Report Quality** | Clear, insightful analysis | Adequate documentation | Minimal documentation | Unclear or missing |

---

## Resources and Tools

### Core Readings
- "Robot Dynamics and Control" (textbook, Chapters 6-7)
- "The Zero Moment Point: Historical Perspective" (survey paper)

### Video
- Lecture: "Lagrangian Mechanics for Robotics" (1 hour)
- Tutorial: "ZMP-Based Bipedal Walking" (45 min)

### Software
- PyBullet with humanoid models (provided)
- NumPy/SciPy for numerical computation

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 2.5 hours |
| Lagrangian derivation | 3 hours |
| ZMP calculation | 2 hours |
| Balance simulation | 4 hours |
| Contact force visualization | 1.5 hours |
| Walking gait analysis | 2 hours |
| Atlas case study | 1.5 hours |
| Problem Set 5 | 3 hours |
| **Total**         | **~19.5 hours** |
|-------------------|-----------------|

---

## Alignment and Progression Note

### Alignment
- **GLO 2**: Mathematical modeling (dynamics)
- **GLO 4**: Whole-body control (balance as foundation)

### Progression
Modules 4-5 complete the kinematic and dynamic foundations. Module 6 applies these to generate locomotion gaits.

---

**Next**: [Module 6: Locomotion: From ZMP to Learning-Based Gaits](../module-06/index.md)
