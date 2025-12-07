---
sidebar_position: 6
title: "Module 6: Locomotion: From ZMP to Learning-Based Gaits"
---

# Module 6: Locomotion: From ZMP to Learning-Based Gaits

---

## Module Meta

**Module Number**: 6
**Quarter**: 2 (Kinematics & Dynamics)
**Prerequisite**: Modules 4-5
**Estimated Time**: 14-16 hours
**Key Themes**: Walking gaits, trajectory optimization, CPGs, learning-based locomotion

---

## Module Overview

Locomotion is the ability to move through an environment. This module covers bipedal walking from classical ZMP-based approaches through modern learning-based methods, including trajectory optimization, central pattern generators (CPGs), and reinforcement learning for gaits.

**Why this matters for humanoids**: Locomotion is a defining capability. Without robust walking, humanoids are confined to fixed locations, severely limiting utility.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Design ZMP-based walking gaits** using footstep planning and ZMP preview control
2. **Apply trajectory optimization** to generate dynamically feasible walking motions
3. **Implement Central Pattern Generators (CPGs)** for rhythmic locomotion
4. **Train reinforcement learning policies** for bipedal walking in simulation
5. **Compare classical vs. learning-based locomotion** in terms of robustness, efficiency, and generalization
6. **Evaluate locomotion performance** using metrics (speed, energy, stability margin)

---

## Topics and Subtopics

### 1. Classical ZMP-Based Walking
- Footstep planning: Discrete foot placements
- ZMP trajectory generation: Preview control
- Linear Inverted Pendulum Model (LIPM)
- Single vs. double support phases

**Why this matters for humanoids**: ZMP methods are well-understood, analyzable, and widely deployed (Honda ASIMO, many research platforms).

### 2. Trajectory Optimization for Locomotion
- Formulation: Minimize energy subject to dynamics, ZMP, collision constraints
- Direct vs. indirect methods
- Contact scheduling and mode transitions
- Example: TOWR (Trajectory Optimizer for Walking Robots)

**Why this matters for humanoids**: Optimization provides globally optimal solutions accounting for complex constraints that analytic methods can't handle.

### 3. Central Pattern Generators (CPGs)
- Biological inspiration: Spinal cord rhythmic circuits
- Mathematical models: Kuramoto oscillators, Hopf oscillators
- Entrainment and frequency adaptation
- CPG networks for quadrupeds and bipeds

**Why this matters for humanoids**: CPGs offer adaptive, robust rhythmic motion generation with minimal computational cost.

### 4. Learning-Based Locomotion (RL)
- Reinforcement learning formulation for walking
- Reward shaping: Forward velocity, energy, stability
- Algorithms: PPO, SAC, TRPO
- Sim-to-real transfer challenges

**Why this matters for humanoids**: Learning-based methods can discover gaits that outperform hand-designed controllers, especially on complex terrain.

### 5. Gait Analysis and Metrics
- Gait cycle: Stance, swing, heel-strike, toe-off
- Metrics: Speed, stride length, energy cost of transport
- Stability metrics: Gait sensitivity norm, Floquet multipliers
- Human vs. robot gait comparison

**Why this matters for humanoids**: Quantitative metrics enable objective evaluation and comparison of locomotion controllers.

### 6. Rough Terrain and Adaptation
- Blind vs. vision-based terrain adaptation
- Foothold selection and replanning
- Proprioceptive feedback for unmodeled contacts
- Recovery from stumbles

**Why this matters for humanoids**: Real-world deployment requires handling uneven, unpredictable surfaces beyond lab floors.

---

## Teaching and Learning Activities

### 1. Footstep Planner Implementation (3 hours)
Implement a simple footstep planner for straight-line walking. Generate a sequence of foot placements with safety margins.

### 2. ZMP Preview Control (3 hours)
Implement ZMP preview control using LIPM. Generate CoM trajectory for given footsteps. Simulate in PyBullet.

### 3. CPG Simulation (2.5 hours)
Implement a Hopf oscillator CPG for a single joint. Extend to coupled oscillators for multi-joint coordination. Visualize phase portraits.

### 4. RL Walking Training (4 hours)
Train a PPO policy for bipedal walking in Isaac Gym (or PyBullet if no GPU). Start with flat terrain. Analyze learning curves.

**Code scaffold provided**

### 5. Gait Analysis from Motion Capture (2 hours)
Analyze human walking mocap data. Extract gait parameters (stride length, cadence, duty factor). Compare to robot data.

### 6. Case Study: Cassie vs. Atlas (1.5 hours)
Compare locomotion approaches of Cassie (point-foot robot, aggressive dynamics) and Atlas (flat-foot, conservative). Read papers, watch videos, discuss trade-offs.

---

## Assessment Requirements

### Formative
- Quiz on gait terminology and ZMP planning
- Peer review: Exchange trained RL policies and evaluate

### Summative
- **Problem Set 6**:
  - Design footstep sequence for turning
  - Derive LIPM dynamics and ZMP trajectory
  - Analyze RL reward function design
- **Coding Project 2 (Final)**: Implement and compare two locomotion methods (ZMP-based + RL or CPG). Deliverable: Code + 5-page report + video demo.

---

## Assessment Rubric

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **Locomotion Implementation** | Both methods work robustly | One method robust, one marginal | Partial functionality | Non-functional |
| **Comparative Analysis** | Insightful comparison with data | Reasonable comparison | Superficial comparison | No meaningful comparison |
| **Experimental Design** | Rigorous evaluation with multiple metrics | Adequate evaluation | Minimal evaluation | No evaluation |
| **Documentation** | Clear, professional, reproducible | Adequate documentation | Minimal documentation | Unclear |

---

## Resources and Tools

### Core Readings
- "Bipedal Locomotion: From Humans to Humanoids" (textbook chapter)
- "Learning to Walk in Minutes Using Massively Parallel Deep RL" (research paper)

### Video
- Lecture: "ZMP-Based Walking Control" (1 hour)
- Tutorial: "Training RL Policies for Locomotion" (45 min)

### Software
- PyBullet or Isaac Gym for simulation
- Stable-Baselines3 for RL (PPO, SAC)

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 2.5 hours |
| Footstep planner | 3 hours |
| ZMP preview control | 3 hours |
| CPG simulation | 2.5 hours |
| RL training | 4 hours |
| Gait analysis | 2 hours |
| Case study | 1.5 hours |
| Coding Project 2 final | 6 hours |
| **Total** | **24.5 hours** (includes cumulative project) |

---

## Alignment and Progression Note

### Alignment
- **GLO 2**: Mathematical modeling (gait dynamics)
- **GLO 5**: Learning (RL for locomotion)

### Progression
**Quarter 2 Complete!** Kinematics, dynamics, and locomotion mastered. Quarter 3 adds perception, control, and learning for manipulation and adaptation.

---

**Next Quarter**: [Module 7: Perception Stack for Humanoids](../module-07/index.md)
