---
sidebar_position: 9
title: "Module 9: Learning Physical Skills"
---

# Module 9: Learning Physical Skills: Imitation, RL, and Foundation Models

---

## Module Meta

**Module Number**: 9
**Quarter**: 3 (Control, Perception & Learning)
**Prerequisite**: Modules 1-8, basic ML/RL
**Estimated Time**: 16-18 hours
**Key Themes**: Imitation learning, reinforcement learning, sim-to-real, foundation models

---

## Module Overview

Learning enables robots to acquire new skills from experience rather than manual programming. This module covers imitation learning (learning from demonstrations), reinforcement learning (trial-and-error), and recent advances using foundation models for physical reasoning.

**Why this matters for humanoids**: General-purpose humanoids must learn thousands of tasks. Scalable learning methods are essential for moving beyond narrow, hand-coded behaviors.

---

## Module Learning Outcomes

By the end of this module, learners will be able to:

1. **Implement behavioral cloning** to learn policies from human demonstrations
2. **Formulate RL problems** for physical tasks with appropriate reward functions
3. **Train RL policies** using modern algorithms (PPO, SAC) in simulation
4. **Apply sim-to-real transfer techniques** (domain randomization, system identification)
5. **Leverage foundation models** for language-conditioned manipulation or visual reasoning
6. **Evaluate learning approaches** (sample efficiency, robustness, generalization)

---

## Topics and Subtopics

### 1. Imitation Learning
- Behavioral cloning: Supervised learning from demonstrations
- Dataset aggregation (DAgger)
- Inverse reinforcement learning (IRL)
- Human demonstrations: Teleoperation, motion capture, video

**Why this matters for humanoids**: Imitation learning is sample-efficient and leverages human expertise, making it practical for real robots with limited data.

### 2. Reinforcement Learning for Physical Tasks
- MDP formulation: States, actions, rewards, transitions
- Policy gradient methods: REINFORCE, PPO, TRPO
- Actor-critic methods: A3C, SAC
- Reward shaping for contact-rich tasks
- Sim-to-sim transfer and curriculum learning

**Why this matters for humanoids**: RL can discover behaviors humans can't easily demonstrate (dynamic gaits, contact-rich manipulation).

### 3. Sim-to-Real Transfer
- Reality gap: Why simulation ≠ reality
- Domain randomization: Vary physics parameters during training
- System identification: Fit simulator to real robot
- Robust policy learning
- Case studies: ANYmal, Cassie, industrial manipulators

**Why this matters for humanoids**: Training on real robots is slow and risky. Effective sim-to-real enables safe, fast iteration.

### 4. Foundation Models for Physical AI
- Vision-language models (CLIP, Flamingo) for grounding
- Large-scale robot datasets and pre-training (RT-1, RT-2)
- Language-conditioned policies
- Few-shot adaptation
- Limitations: Physical reasoning, generalization

**Why this matters for humanoids**: Foundation models promise sample-efficient learning by transferring knowledge from internet-scale data.

### 5. Learning Representations for Control
- State representation learning
- Variational autoencoders (VAEs) for compression
- Contrastive learning for visual features
- World models for model-based RL

**Why this matters for humanoids**: Raw sensor data (images, joint angles) is high-dimensional. Learned representations enable efficient control.

### 6. Multi-Task and Lifelong Learning
- Multi-task RL: Learning multiple skills simultaneously
- Catastrophic forgetting and continual learning
- Task transfer and zero-shot generalization
- Open problems: Scaling to hundreds of tasks

**Why this matters for humanoids**: General-purpose robots need diverse repertoires, not just single-task specialists.

---

## Teaching and Learning Activities

### 1. Behavioral Cloning for Reaching (3 hours)
Collect demonstrations (teleoperate robot arm to targets in PyBullet). Train neural network policy. Evaluate generalization to novel targets.

### 2. RL Training with PPO (4 hours)
Train PPO agent for cart-pole or simple manipulation task. Tune reward function. Analyze learning curves (return, entropy, KL divergence).

### 3. Domain Randomization Experiment (3 hours)
Train policy in simulation with randomized mass, friction, latency. Test in nominal sim vs. randomized sim. Compare robustness.

### 4. Foundation Model Integration (3 hours)
Use CLIP to detect objects from language commands ("find the red mug"). Integrate with manipulation pipeline from Module 8.

### 5. Case Study: DeepMind's RT-2 (2 hours)
Read RT-2 paper (vision-language-action models). Summarize approach, datasets used, results. Critique limitations.

### 6. Project: Learn a Manipulation Skill (5 hours)
Choose a task (block stacking, drawer opening). Implement either imitation or RL. Document design decisions, hyperparameters, results.

---

## Assessment Requirements

### Formative
- Quiz on RL terminology and algorithms
- Discussion: When is imitation better than RL?

### Summative
- **Problem Set 9**:
  - Formulate RL problem for a task (state, action, reward)
  - Analyze behavioral cloning failure modes
  - Design domain randomization strategy
- **Coding Project 3 (Final)**: Implement learned policy for manipulation (combines Modules 7-9). Deliverable: Code + 6-page report + video

---

## Assessment Rubric

| Criterion | Exemplary | Proficient | Developing | Inadequate |
|-----------|-----------|-----------|-----------|-----------|
| **Learning Implementation** | Policy learns robustly, generalizes | Learns but limited generalization | Partial learning | No learning or broken |
| **Reward Design** | Well-shaped, enables efficient learning | Adequate reward | Poor reward, slow learning | Reward defeats learning |
| **Experimental Rigor** | Multiple baselines, statistical analysis | Adequate experiments | Minimal experiments | No rigorous evaluation |
| **Integration** | Seamless perception-learning-control | Works with issues | Fragile | Non-integrated |

---

## Resources and Tools

### Core Readings
- "Deep Reinforcement Learning for Robotics" (survey paper)
- "Sim-to-Real Transfer in Robotics" (tutorial)
- RT-2 paper (Brohan et al.)

### Video
- Lecture: "RL for Robotics" (1 hour)
- Tutorial: "Training PPO with Stable-Baselines3" (30 min)

### Software
- Stable-Baselines3 (RL algorithms)
- Isaac Gym or PyBullet for simulation
- CLIP (OpenAI) for vision-language

---

## Workload and Time Planning

| Activity | Est. Time |
|----------|-----------|
| Pre-reading | 3 hours |
| Behavioral cloning | 3 hours |
| PPO training | 4 hours |
| Domain randomization | 3 hours |
| Foundation model integration | 3 hours |
| RT-2 case study | 2 hours |
| Manipulation project | 5 hours |
| Problem Set 9 | 3 hours |
| Coding Project 3 final | 6 hours |
| **Total** | **32 hours** (includes cumulative project) |

---

## Alignment and Progression Note

### Alignment
- **GLO 5**: Learning physical skills

### Progression
**Quarter 3 Complete!** Perception, control, and learning mastered. Quarter 4 integrates everything into full-stack systems and addresses deployment challenges.

---

**Next Quarter**: [Module 10: Full-Stack Humanoid Software Architectures](../module-10/index.md)
