# 🚀 React Portfolio Website

A modern and responsive portfolio website built using **React**, **TypeScript**, and **Vite**. This project showcases personal projects, skills, and achievements with clean UI and fast performance.

The site is currently deployed on **Firebase Hosting** and will soon be integrated with a backend (e.g., for contact forms, dynamic content, etc.).

---

## 🛠️ Tech Stack

| Tool             | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| React            | Frontend library for building UI                                                      |
| TypeScript       | Superset of JavaScript with type safety                                               |
| Vite             | Build tool for faster development                                                     |
| Firebase Hosting | Static site hosting with CDN support                                                  |
| Node.js          | Required runtime for development                                                      |
| pnpm             | Fast, disk-efficient alternative to npm and yarn, used to manage project dependencies |

### 🔧 Node.js Version Required

- `Node.js >= 18.x`

---

## 🌐 Live Demo

👉 **[View Deployed Site](https://danilo-alingasa.web.app)**

---

## 🚀 Deployment (Firebase Hosting)

### 1. 🔧 Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. 🔑 Login to Firebase

```bash
firebase login
```

### 3. 🏗️ Initialize Firebase Project

Run this command in your project root:

```bash
firebase init
```

Choose the following options:

- Hosting: Configure files for Firebase Hosting
- Select your Firebase project or create a new one
- Set `dist` (or `build`) as your public directory (for Vite it's usually `dist`)
- Choose `Yes` for single-page app rewrite if using React Router
- Choose `No` to not overwrite `index.html`

### 4. ⚒️ Build Your Project

```bash
pnpm run deploy-build
```

This will generate the production-ready site in the `dist` folder.

### 5. 🚀 Deploy to Firebase

```bash
firebase deploy
```

You will get a Firebase Hosting URL after successful deployment.

---

## 📦 Installation (For Local Development)

```bash
git clone https://github.com/nadnad121021/dynamic-portfolio-v2.git
cd your-repo
pnpm install
pnpm run dev
```

---

## 📬 Coming Soon: Backend Integration

We will soon add support for:

- `About`, `Contact`, and other dynamic sections
- Contextual content stored in a backend database
- APIs to send and store contact form submissions
- Admin dashboard for content management

Stay tuned!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### 👤 Author

Created by **Danilo Alingasa** – [LinkedIn](https://www.linkedin.com/in/danilo-alingasa-a727241a2/) | [GitHub](https://github.com/nadnad121021)
