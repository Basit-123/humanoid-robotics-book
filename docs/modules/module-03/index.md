---
sidebar_position: 3
title: "Module 3: Core Abstractions of Embodied Intelligence"
---

# Module 3: Core Abstractions of Embodied Intelligence

---

## Module Meta

**Module Number**: 3
**Quarter**: 1 (Foundations)
**Prerequisite Knowledge**: Modules 1-2
**Estimated Time**: 12-15 hours
**Key Themes**: Perception-action loops, state estimation, control theory, representations

---

## Module Overview

This module abstracts the biological and historical insights from Modules 1-2 into computational and control-theoretic frameworks that underpin all robot systems. We introduce the sense-think-act paradigm, state representation, feedback control, and the fundamental architectural patterns used across humanoid robotics.

**Why this matters for humanoids**: These abstractions—state spaces, control loops, coordinate frames, optimization formulations—are the conceptual tools you'll use in every subsequent module. Mastering them now enables fluency in kinematics, dynamics, planning, and learning later.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Diagram and explain the perception-action loop** (sense-think-act cycle) and identify its components in humanoid systems
2. **Define state, action, and observation spaces** for robotic systems and represent them mathematically
3. **Apply coordinate frame transformations** to relate sensor measurements, joint angles, and task-space goals
4. **Formulate basic control problems** using block diagrams, transfer functions, and feedback principles
5. **Distinguish between feedforward and feedback control** and analyze stability using Lyapunov concepts (qualitatively)
6. **Identify architectural patterns** in humanoid robotics software (modular pipelines, behavior trees, hybrid deliberative-reactive)

---

## Topics and Subtopics

### 1. The Perception-Action Loop

**Topics**:
- Sense-Think-Act paradigm
- Reactive vs. deliberative control
- Latency and bandwidth trade-offs
- Closing the loop at different frequencies (reflexes at 100Hz, planning at 1Hz)

**Why this matters for humanoids**: All robot behaviors emerge from iterated sensing and acting. Understanding loop structure guides system design and debugging.

### 2. State Representation

**Topics**:
- State vector **x**: joint angles, velocities, positions, orientations
- Configuration space (C-space) vs. task space (end-effector position)
- Observable vs. hidden state
- State estimation: filters (Kalman, particle), sensor fusion

**Why this matters for humanoids**: "You can't control what you can't measure." Accurate state estimates are prerequisite for all downstream computation.

### 3. Coordinate Frames and Transformations

**Topics**:
- World frame, body frame, sensor frame, joint frames
- Homogeneous transformations (rotation + translation as 4x4 matrices)
- Forward vs. inverse transformations
- Practical example: Camera frame → robot base frame

**Why this matters for humanoids**: Humanoids have dozens of coordinate frames. Every sensor reading and control command involves transformations between frames.

### 4. Control Theory Fundamentals

**Topics**:
- Block diagrams: plant, controller, sensor, disturbance
- Open-loop vs. closed-loop control
- PID control: proportional, integral, derivative gains
- Stability: Bounded-input-bounded-output (BIBO), Lyapunov
- Frequency response: Why high-frequency control is hard in physical systems

**Why this matters for humanoids**: Control theory provides formal tools to design controllers that achieve desired behavior (setpoint tracking, disturbance rejection, stability).

### 5. Optimization as a Unifying Framework

**Topics**:
- Formulating problems as optimization: minimize_u J(x, u) subject to constraints
- Cost functions: Quadratic (energy), L1 (sparsity), task-specific
- Constraints: Joint limits, collision avoidance, dynamics feasibility
- Trajectory optimization preview

**Why this matters for humanoids**: Many problems (motion planning, control, learning) can be cast as optimization. This unifying lens simplifies understanding diverse methods.

### 6. Architectural Patterns in Robotics Software

**Topics**:
- **Layered architecture**: Perception → Planning → Control → Actuation
- **Behavior trees**: Hierarchical task decomposition (used in game AI, robotics)
- **Hybrid deliberative-reactive**: Slow planners + fast reflexes
- **ROS 2 computational graph**: Nodes, topics, services, actions

**Why this matters for humanoids**: Real systems need modular, maintainable architectures. Understanding design patterns accelerates development and debugging.

---

## Teaching and Learning Activities

### 1. Diagram the Loop (1 hour)
Draw a perception-action loop diagram for a humanoid picking up a cup. Label: sensors used, state estimated, control decision, actuators commanded. Identify loop frequency.

### 2. State Space Exercise (1.5 hours)
Define the state vector for a 7-DoF robot arm. How many dimensions? What's observable with encoders only? What if you add an IMU?

### 3. Coordinate Frame Transformation Coding (3 hours)
Implement 2D and 3D homogeneous transformations in Python. Given a point in camera frame, transform it to robot base frame. Visualize using matplotlib.

**Starter code**:
```python
import numpy as np

def make_transform(R, t):
    """Create 4x4 homogeneous transformation matrix."""
    T = np.eye(4)
    T[:3, :3] = R
    T[:3, 3] = t
    return T

# Example: Rotate 90 degrees around Z-axis, translate [1, 0, 0]
R = np.array([[0, -1, 0], [1, 0, 0], [0, 0, 1]])
t = np.array([1, 0, 0])
T = make_transform(R, t)
```

### 4. PID Tuning Simulation (2 hours)
Use PyBullet to control a single joint to a target angle. Implement PID control. Experiment with gains: What happens with only P? P+D? P+I+D?

### 5. Optimization Formulation Exercise (1.5 hours)
Formulate "reach a target while minimizing energy" as an optimization problem. Define decision variables, cost function, and constraints. Don't solve—just formulate.

### 6. ROS 2 Architecture Exploration (2 hours)
Install ROS 2 (Humble). Run a demo (turtlesim). Inspect the computational graph using `ros2 node list` and `ros2 topic list`. Sketch the node-topic structure.

---

## Assessment Requirements

### Formative
- Self-check quiz on control theory terminology
- Peer review: Exchange coordinate transformation code and test each other's implementations

### Summative
- **Problem Set 3** (Due end of Week 3/Quarter 1):
  - Derive a 2D transformation chain (3 frames)
  - Analyze a PID controller's stability given gains
  - Formulate a constrained optimization problem for robot motion
- **Coding assignment**: PID controller for joint control in PyBullet (auto-graded based on error metrics)

---

## Assessment Rubric

### Problem Set 3 Rubric (40 points)

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **Transformation Derivation** | Correct derivation with clear steps | Mostly correct with minor errors | Significant errors but understanding shown | Fundamentally incorrect |
| **Control Analysis** | Rigorous stability analysis | Correct analysis with minor gaps | Superficial analysis | No meaningful analysis |
| **Optimization Formulation** | Well-posed with all components | Formulation mostly complete | Missing key components | Incomplete or infeasible |
| **Code Quality** | Clean, documented, correct | Works with minor issues | Partial functionality | Non-functional |

---

## Resources and Tools

### Core Readings
- "Robotic Systems: Mathematical Foundations" (free textbook, Chapters 2-4)
- "Feedback Control Systems" (open resource, intro chapters)
- "ROS 2 Design Patterns" (online documentation)

### Video
- Lecture: "State Estimation for Robotics" (45 min)
- Tutorial: "Coordinate Frames in Robotics" (30 min)

### Software
- **ROS 2 Humble**: Robot Operating System (install guide provided)
- **NumPy/SciPy**: Python scientific computing
- **PyBullet**: For PID simulation

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 2.5 hours |
| Perception-action loop diagram | 1 hour |
| State space exercise | 1.5 hours |
| Coordinate transformation coding | 3 hours |
| PID simulation | 2 hours |
| Optimization formulation | 1.5 hours |
| ROS 2 exploration | 2 hours |
| Problem Set 3 | 3.5 hours |
| Review | 1 hour |
| **Total** | **18 hours** (adjust by skipping optional extensions) |

---

## Alignment and Progression Note

### Alignment
- **GLO 2**: Mathematical modeling (state spaces, transformations, control theory)
- **GLO 4**: Whole-body control foundations

### Progression
Quarter 1 complete! You now have:
- Historical/motivational context (Module 1)
- Biological inspiration (Module 2)
- Core computational abstractions (Module 3)

**Quarter 2** applies these abstractions mathematically to kinematics and dynamics.

### Connections
- Module 4: Coordinate transformations → Forward/inverse kinematics
- Module 5: Control theory → Dynamics-based control
- Module 8: Optimization → Motion planning

---

**Next Quarter**: [Module 4: Forward & Inverse Kinematics for High-DoF Humanoids](../module-04/index.md)

**Quarter 1 Complete!** Take the Quarter 1 self-assessment to consolidate learning before proceeding.
