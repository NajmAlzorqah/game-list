# 🎮 Game List – A Modern Video Game Discovery Web App

**Live Demo:** _[Game List](https://najm-gamelist-19.vercel.app/)_    
**Tech Stack:** React 19, Zustand, TanStack Query, TypeScript, Vite, Chakra UI, RAWG Video Games Database API

---

## 📌 Description

**Game List** is a high-performance, responsive web application built as a functional clone of [RAWG.io](https://rawg.io/), the largest open video game database. This project showcases the ability to work with real-world APIs and implement modern frontend best practices to build a scalable and optimized user experience.

---

## 🚀 Key Features

- **API Integration:**  
  Utilizes the RAWG API (free plan) to access data on over 350,000 games across 50+ platforms. Displays rich metadata including genres, tags, ratings, platforms, and store links.

- **Efficient Data Fetching & Caching:**  
  Uses `@tanstack/react-query` to handle asynchronous data fetching, intelligent caching, background updates, and pagination — minimizing API calls and improving performance.

- **State Management:**  
  Uses `zustand` for lightweight and scalable global state handling.

- **Performance Optimizations:**  
  Built with Vite for fast development and highly optimized production builds. Efficient caching reduces redundant data fetching and enhances speed.

- **UI/UX Design:**  
  Built using `Chakra UI` and `framer-motion` to deliver a polished, accessible, and animated user interface. Includes theme switching with `next-themes`.

- **Infinite Scrolling:**  
  Implements seamless infinite scroll for game listings using `react-infinite-scroll-component`.

- **Routing:**  
  Managed with `react-router-dom` (v6) for SPA navigation.

---

## 🛠 Installation

```bash
git clone https://github.com/NajmAlzorqah/game-list.git
cd game-list
bun install
bun run dev
```
