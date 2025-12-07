/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Course Information',
    },
    {
      type: 'doc',
      id: 'learning-outcomes',
      label: 'Global Learning Outcomes',
    },
    {
      type: 'doc',
      id: 'assessment-strategy',
      label: 'Assessment Strategy',
    },
    {
      type: 'doc',
      id: 'capstone-guidelines',
      label: 'Capstone Guidelines',
    },
    {
      type: 'doc',
      id: 'academic-integrity',
      label: 'Academic Integrity',
    },
    {
      type: 'category',
      label: 'Quarter 1: Foundations',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'modules/module-01/index',
          label: 'Module 1: The Quest for Physical AI',
        },
        {
          type: 'doc',
          id: 'modules/module-02/index',
          label: 'Module 2: The Human Body as Engineering Blueprint',
        },
        {
          type: 'doc',
          id: 'modules/module-03/index',
          label: 'Module 3: Core Abstractions of Embodied Intelligence',
        },
      ],
    },
    {
      type: 'category',
      label: 'Quarter 2: Kinematics & Dynamics',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/module-04/index',
          label: 'Module 4: Forward & Inverse Kinematics',
        },
        {
          type: 'doc',
          id: 'modules/module-05/index',
          label: 'Module 5: Dynamics, Balance, and Physics',
        },
        {
          type: 'doc',
          id: 'modules/module-06/index',
          label: 'Module 6: Locomotion Gaits',
        },
      ],
    },
    {
      type: 'category',
      label: 'Quarter 3: Control, Perception & Learning',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/module-07/index',
          label: 'Module 7: Perception Stack',
        },
        {
          type: 'doc',
          id: 'modules/module-08/index',
          label: 'Module 8: Whole-Body Control',
        },
        {
          type: 'doc',
          id: 'modules/module-09/index',
          label: 'Module 9: Learning Physical Skills',
        },
      ],
    },
    {
      type: 'category',
      label: 'Quarter 4: Systems, HRI & Capstone',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/module-10/index',
          label: 'Module 10: Full-Stack Architectures',
        },
        {
          type: 'doc',
          id: 'modules/module-11/index',
          label: 'Module 11: Human–Robot Interaction',
        },
        {
          type: 'doc',
          id: 'modules/module-12/index',
          label: 'Module 12: Integration & Ethics',
        },
      ],
    },
  ],
};

export default sidebars;
