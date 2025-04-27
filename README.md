# Verse — Vite + React Starter

A minimal React 19 project scaffolded with **Vite**.  
Follow the steps below to get the app running locally—whether you **clone** with Git _or_ use a **downloaded ZIP**.

---

## 1 . Prerequisites

| Tool    | Version (tested)          | Link                             |
| ------- | ------------------------- | -------------------------------- |
| Node.js | ≥ 18 LTS (20 recommended) | [nodejs.org](https://nodejs.org) |
| npm     | ships with Node           | —                                |

## 2 . Get the code

### Option A - Download the ZIP (via Blackboard)

1. Download the ZIP posted with the assignment on Blackboard
   (it is identical to the latest code on GitHub).

2. Extract the archive (e.g. `verse-main.zip`).

3. Open a terminal inside the extracted folder:

```bash
unzip verse-main.zip        # or use your OS file manager
cd verse-main               # folder name may vary
```

You can also grab the ZIP directly from GitHub if preferred:  
[github.com/nolan-reilly/verse/archive/main.zip](https://github.com/nolan-reilly/verse/archive/refs/heads/main.zip)

### Option B — Clone with Git

```bash
git clone https://github.com/nolan-reilly/verse.git
cd verse
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run the development server

```bash
npm run dev
```

## 5. View the app

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## 6. Test Responsive Layout

For proper mobile testing (~420px width):

### Open Developer Tools:

- Right-click anywhere on the page and select `Inspect`  
  _or_  
  Press `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)

### Set Custom Width:

1. Choose "Responsive" from the device dropdown
2. Enter `420` in the width field
3. Drag the handle to maintain 420px if needed

_The app should now display in a mobile-sized viewport. Refresh if layout appears broken._

## 7. If All Else Fails

If you're having trouble with local setup, a hosted version is available:  
[https://nolan-reilly.github.io/verse](https://nolan-reilly.github.io/verse)

# AI Usage Statement

## Development Assistance

### Draggable Canvas Component

AI was used for the development of the Draggable Canvas Component for the Profile page due to its complexity:

![Draggable Canvas Architecture](https://github.com/user-attachments/assets/1dd25dc2-486b-4cde-8175-be4583a963da)

![Drag Boundary Logic](https://github.com/user-attachments/assets/79d7b6d9-a55b-4965-8987-ad5300b51e85)

![State Management](https://github.com/user-attachments/assets/2bf57ac0-2ecd-4592-b7e0-97c65beabaf7)

![Final Implementation](https://github.com/user-attachments/assets/d2e6c78e-fe74-4b6f-b1fe-ede01c9b057b)

### CSS Optimization

AI was also used to help reorganize the `style.css` file to improve its readability and duplicate styles:

![CSS Refactoring](https://github.com/user-attachments/assets/2412acb1-2721-4824-a79d-1e48273c9d95)
