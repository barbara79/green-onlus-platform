# 🌿 Green Onlus Platform
![Status](https://img.shields.io/badge/status-wip-orange)
> **⚠️ Status: Work In Progress (WIP)** > This project is under active development. Current focus: Building the core full-stack infrastructure and Docker orchestration.

---
![Repo Size](https://img.shields.io/github/repo-size/barbara79/green-onlus-platform?color=brightgreen&label=Digital%20Footprint)

A sustainable, full-stack merchandising platform designed for social impact. Built with a focus on **Green Web Engineering** principles: minimal digital footprint, energy-efficient containers, and optimized routing.

## 🚀 Tech Stack
- **Frontend:** React + TypeScript (Vite)
- **Backend:** PHP 8.2-FPM (Alpine)
- **Proxy:** Nginx (Alpine)
- **Database:** PostgreSQL 15

## 🛠️ Getting Started

### Prerequisites
- Docker and Docker Compose installed.

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/barbara79/green-onlus-platform.git
   cd green-onlus-platform
   ```
2. Start the ecosystem
   ```bash
   docker-compose up --build
   ```
3. Access the platform:
Access the platform:

Frontend: http://localhost:8080

API Data: http://localhost:8080/api/gadgets

## 🌱 How to Help (Green Contributions)
This is a WIP project. We welcome "Green" optimizations:
- **Efficiency:** Suggest ways to reduce Docker image sizes further.
- **Performance:** Optimize React re-renders to save client-side CPU energy.
- **Code:** Help us transition to more eco-friendly libraries.

To contribute: Fork, branch, and send a PR!

## Author
Barbara Palumbo

Backend & Full-Stack Software Developer 
Clean Architecture, Observability & AI Enthusiast

[LinkedIn](https://www.linkedin.com/in/barbara-palumbo-b3356a18b)

## License
This project is licensed under the MIT License.