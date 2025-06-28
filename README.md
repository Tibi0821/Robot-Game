# 🤖 Robot Delivery Simulation and Performance Analysis 🚚

This project simulates a robot courier service operating in a small village, delivering parcels from their pickup locations to their destinations. The goal is to explore different robot movement strategies and evaluate their efficiency in completing delivery tasks.

---

## 📋 Project Overview

The village is modeled as a network of locations connected by roads. Robots pick up parcels at various places and deliver them to specified addresses.

This repository contains several robot strategies, including:

- **Random Robot**: Moves randomly to connected locations.  
- **Route Robot**: Follows a fixed, predefined delivery route.  
- **Goal-Oriented Robot**: Plans the shortest route to pick up or deliver a parcel.  
- **Greedy Robot**: Chooses the closest parcel to pick up or deliver next, optimizing the route dynamically.

The system simulates the robot’s actions turn by turn, tracking how many turns it takes to complete all deliveries. It also allows comparing the efficiency of different robot algorithms.

---

## 🛠️ Key Components

- **Village Graph**: Represents village locations and roads as a graph data structure (`roadGraph`).  
- **VillageState Class**: Models the current location of the robot and the parcels to be delivered, with logic for moving and updating parcel states.  
- **Robot Strategies**: Functions implementing different decision-making algorithms for the robot.  
- **Simulation Runner**: Runs the robot step-by-step until all parcels are delivered, tracking and logging progress.  
- **Performance Comparator**: Runs multiple simulations to compare average delivery times between robot strategies.

---

## 📂 Repository Structure

- `robot.js` — Core simulation logic and robot implementations.  
- `persistent_group.js` — Immutable data structure for managing groups (used for more advanced state tracking).  
- `measuring_a_robot.js` — Functions to measure robot efficiency over multiple runs.  
- `robot_efficiency.js` — Utilities to analyze and compare robot performance.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12+ recommended).

### Installation

```bash
git clone https://github.com/Tibi0821/LsTema1.git
cd LsTema1
