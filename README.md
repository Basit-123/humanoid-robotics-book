# Physical AI, Humanoid Robotics, and Agentic Engineering

An open-access educational book covering the foundations, theory, and practice of building humanoid robots with embodied artificial intelligence.

## About This Book

This comprehensive textbook is designed for senior undergraduate to early graduate students in Computer Science, Electrical Engineering, Mechanical Engineering, Robotics, or AI. The book is structured as a 4-quarter course covering:

- **Quarter 1: Foundations** - History, motivation, and core abstractions
- **Quarter 2: Kinematics & Dynamics** - Movement, balance, and locomotion
- **Quarter 3: Control, Perception & Learning** - Sensing, planning, and learning
- **Quarter 4: Systems, HRI & Capstone** - Integration, ethics, and real-world deployment

## Prerequisites

- Linear algebra, multivariable calculus, probability
- Classical mechanics (Lagrangian/Hamiltonian basics helpful)
- Python programming + basic NumPy/PyTorch
- Introductory machine learning (no deep RL required at start)

## Getting Started

### Installation

Ensure you have [Node.js](https://nodejs.org/) version 18 or higher installed.

```bash
# Clone the repository
git clone https://github.com/your-org/humanoid-robotics-book.git
cd humanoid-robotics-book

# Install dependencies
npm install

# Start local development server
npm run start
```

This will open your browser to `http://localhost:3000` with live reloading.

### Build for Production

```bash
npm run build
```

This generates static content into the `build` directory that can be served by any static hosting service.

## Project Structure

```
humanoid-robotics-book/
├── docs/                    # All book content (Markdown/MDX)
│   ├── index.md            # Course information
│   ├── learning-outcomes.md
│   ├── assessment-strategy.md
│   ├── capstone-guidelines.md
│   ├── academic-integrity.md
│   └── modules/            # 12 course modules
│       ├── module-01/
│       ├── module-02/
│       └── ...
├── src/                    # React components & custom CSS
├── static/                 # Static assets (images, etc.)
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js             # Sidebar navigation structure
└── package.json
```

## Contributing

This book is open source and welcomes contributions! Please see our [contribution guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment

This book is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

## Contact

For questions, issues, or suggestions, please [open an issue](https://github.com/your-org/humanoid-robotics-book/issues) on GitHub.

---

Built with [Docusaurus](https://docusaurus.io/).
