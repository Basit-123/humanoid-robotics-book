---
sidebar_position: 4
title: "Module 4: Forward & Inverse Kinematics for High-DoF Humanoids"
---

# Module 4: Forward & Inverse Kinematics for High-DoF Humanoids

---

## Module Meta

**Module Number**: 4
**Quarter**: 2 (Kinematics & Dynamics)
**Prerequisite**: Modules 1-3, linear algebra
**Estimated Time**: 14-16 hours
**Key Themes**: DH parameters, Jacobians, inverse kinematics, redundancy resolution

---

## Module Overview

Kinematics describes the geometry of motion without considering forces. This module covers forward kinematics (FK: joint angles → end-effector pose) and inverse kinematics (IK: desired pose → joint angles) for humanoid manipulators and full-body systems.

**Why this matters for humanoids**: Kinematics is the foundation for all motion. Whether grasping an object, maintaining balance, or walking, the robot must map between joint space and task space continuously.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Derive forward kinematics** using Denavit-Hartenberg (DH) parameters for serial chains
2. **Compute the Jacobian matrix** relating joint velocities to end-effector velocities
3. **Solve inverse kinematics** analytically (for simple arms) and numerically (for high-DoF systems)
4. **Handle kinematic singularities** and understand their implications for control
5. **Apply redundancy resolution** techniques for humanoids with more DoF than task requirements
6. **Implement FK and IK algorithms** in simulation for a 7-DoF robot arm

---

## Topics and Subtopics

### 1. Forward Kinematics and DH Parameters
- Serial kinematic chains
- DH convention: link frames, parameters ($a, \alpha, d, \theta$)
- Homogeneous transformation matrices
- Example: 7-DoF humanoid arm FK derivation

**Why this matters for humanoids**: FK is the basis for visualization, collision detection, and Jacobian computation.

### 2. The Jacobian Matrix
- Definition: {'$\\dot{\\mathbf{x}} = J(\\mathbf{q}) \\dot{\\mathbf{q}}$'}
- Geometric vs. analytic Jacobians
- Computing Jacobian columns
- Rank and singularities

**Why this matters for humanoids**: The Jacobian enables velocity-level control and is central to inverse kinematics solvers.

### 3. Analytical Inverse Kinematics
- Closed-form IK for 6-DoF arms (Piper, PUMA)
- Geometric IK: Decoupling position and orientation
- Multiple solutions and joint limits

**Why this matters for humanoids**: Analytical IK is fast and exact when available, enabling real-time control.

### 4. Numerical Inverse Kinematics
- Jacobian transpose method
- Jacobian pseudo-inverse
- Damped least squares (DLS)
- Iterative optimization (Newton-Raphson)

**Why this matters for humanoids**: When analytical solutions don't exist (redundant/complex systems), numerical methods provide approximate solutions.

### 5. Redundancy and Null-Space
- Redundant manipulators (DoF > task dimensions)
- Null-space of Jacobian: self-motion
- Secondary objectives: collision avoidance, joint limit avoidance, posture optimization

**Why this matters for humanoids**: Humanoids are highly redundant (30+ DoF). Null-space exploitation enables multi-objective control.

### 6. Singularities and Ill-Conditioning
- Kinematic singularities: Det(J) = 0
- Effects: Loss of degrees of freedom, unbounded joint velocities
- Avoidance strategies

**Why this matters for humanoids**: Singularities cause control failures. Understanding and avoiding them is critical for robust operation.

---

## Teaching and Learning Activities

### 1. DH Parameters Exercise (2 hours)
Assign DH parameters to a 3-DoF planar arm. Derive the FK equation. Verify with geometric reasoning.

### 2. Jacobian Derivation (2.5 hours)
Derive the Jacobian for the 3-DoF arm. Verify by numerical differentiation in PyBullet.

### 3. Analytical IK Implementation (3 hours)
Implement closed-form IK for a 2-DoF planar arm. Test with multiple target positions. Handle multiple solutions.

### 4. Numerical IK Coding Project (4 hours)
Implement pseudo-inverse IK for a 7-DoF arm in PyBullet. Measure convergence rate and accuracy. Compare DLS vs. pseudo-inverse.

**Code scaffold provided**

### 5. Redundancy Exploration (2 hours)
Use null-space projection to add a secondary objective (joint limit centering) while tracking an end-effector trajectory.

### 6. Singularity Visualization (1.5 hours)
Plot manipulability ellipsoid for a 2-DoF arm across workspace. Identify singular configurations.

---

## Assessment Requirements

### Formative
- Self-check quiz on DH parameters and Jacobians
- Code review: Peer feedback on IK implementation

### Summative
- **Problem Set 4**:
  - Derive DH parameters and FK for a given robot
  - Compute Jacobian and check singularities
  - Solve IK analytically for simple arm
- **Coding Project 2** (Part 1): Implement FK and numerical IK for 7-DoF arm (deliverable: code + 3-page report)

---

## Assessment Rubric

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **FK Derivation** | Correct DH params and matrix derivation | Minor errors, correct method | Significant errors | Fundamentally wrong |
| **IK Implementation** | Converges reliably, handles edge cases | Works for most cases | Partial functionality | Non-functional |
| **Analysis** | Insightful discussion of singularities, convergence | Adequate analysis | Superficial | No meaningful analysis |
| **Code Quality** | Clean, documented, modular | Functional with minor issues | Messy but works | Broken or incomprehensible |

---

## Resources and Tools

### Core Readings
- "Robot Kinematics: DH Parameters and Beyond" (textbook chapter)
- "Numerical Methods for Inverse Kinematics" (research paper)

### Video
- Lecture: "Denavit-Hartenberg Convention" (1 hour)
- Tutorial: "Jacobian Computation in Python" (30 min)

### Software
- PyBullet for simulation and validation
- NumPy/SciPy for matrix operations

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 2.5 hours |
| DH parameters exercise | 2 hours |
| Jacobian derivation | 2.5 hours |
| Analytical IK | 3 hours |
| Numerical IK coding | 4 hours |
| Redundancy exploration | 2 hours |
| Singularity visualization | 1.5 hours |
| Problem Set 4 | 3 hours |
| **Total** | **20.5 hours** |

---

## Alignment and Progression Note

### Alignment
- **GLO 2**: Mathematical modeling (kinematics formalism)

### Progression
Module 4 provides the kinematic foundation. Module 5 adds dynamics (forces/torques), and Module 6 applies both to locomotion.

---

**Next**: [Module 5: Dynamics, Balance, and the Physics of Not Falling](../module-05/index.md)
