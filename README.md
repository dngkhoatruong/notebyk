# 📝 Note App

A simple and elegant **React Native** app for managing categorized notes offline.

---

## 🎬 Quick Preview

Here’s a quick look at the app in action 👇  
https://drive.google.com/file/d/1fLj-CwU6OuZrDKjxZ7JFEdk0xBHCow17/view?usp=sharing

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/dngkhoatruong/notebyk.git
cd note-app

# 2. Install dependencies
yarn install

# 3. iOS setup
cd ios && pod install && cd ..

# 4. Run app
yarn android
# or
yarn ios
```

---

## 🚀 Features

- **Category-based note organization**
  - Work and Study
  - Home Life
  - Health and Wellness
- **AppInitializer** for first-load setup (fetch categories & notes)
- **Offline data persistence** using SQLite
- **Redux + Thunk** for state management and async actions
- **Data Mapper Layer** DTO → Domain Model
- **Custom Toast UI** for success & error notifications
- **Create / Delete Notes**
- **Delete All Notes** (with SQLite sync)
- **Custom hooks** for logic separation:
  - `useHome` – handles list data, and note deletion
  - `useNewNote` – handles adding notes, reset state, and showing toast
  - ...

---

## 🧩 Tech Stack

| Layer            | Technology                                                       |
| ---------------- | ---------------------------------------------------------------- |
| Frontend         | React Native                                                     |
| State Management | Redux + Thunk                                                    |
| Data Mapping     | Mapper Pattern (DTO → Domain Model)                              |
| Database         | SQLite (react-native-sqlite-storage)                             |
| UI               | React Native + LinearGradient + Bottom Sheet + Custom components |
| Utils            | Toast Message                                                    |
| TypeScript       | Yes ✅                                                           |

---

## 📦 Project structure

```bash
src/
├── assets/                         # Static assets (icons, images, fonts, etc.)
│   └── icons/
│
├── components/                     # Reusable UI components (Button, Input, Header, etc.)
│
├── config/                         # Global configuration (Toast, Env, etc.)
│   └── toastConfig.ts
│
├── constants/                      # App constants (colors, style, screen keys, etc.)
│   ├── colors.ts
│   ├── globalStyles.ts
│   └── screenKeys.ts
│
├── database/                       # SQLite database layer
│   ├── Note/
│   │   ├── noteRepository.ts       # CRUD queries for notes (get, insert, delete)
│   │   └── schema.ts               # SQL schema definition (CREATE TABLE statements)
│   └── index.ts                    # DB connection setup (getDBConnection)
│
├── dtos/                           # DTOs (Data Transfer Objects) for mapping database → model
│   └── note/
│       ├── NoteDTO.ts              # Data type for note records in DB
│       └── NoteMapper.ts           # Mapper to convert DTO <-> Model
│
├── locales/                        # Localization (i18n) files if used
│
├── models/                         # Domain models (business-level data structures)
│   └── NoteModels.ts
│
├── navigation/                     # App navigation system
│   ├── AppHeader.tsx               # Common header UI
│   ├── AppInitializer.tsx          # Initialize app (load DB, config, categories, notes)
│   ├── AppNavigator.tsx            # Root navigation container
│   ├── AppRouter.ts                # Router helper (goBack, navigate)
│   ├── BottomTabNavigator.tsx      # Tab navigation config
│   └── types.ts                    # Navigation types
│
├── redux/                          # State management (Redux)
│   ├── modules/
│   │   └── notes/                  # Notes-related state, actions, thunks
│   │       ├── actions.ts
│   │       ├── thunks.ts
│   │       ├── reducer.ts
│   │       └── types.ts
│   ├── rootReducer.ts              # Combine all reducers
│   └── store.ts                    # Redux store setup
│
├── screens/                        # App screens (UI + logic hooks)
│   ├── Home/
│   │   ├── index.tsx               # Home screen UI
│   │   ├── styles.ts               # Screen styles
│   │   └── useHome.ts              # Hook for handling home logic (fetch notes, delete all, etc.)
│   ├── NewNote/
│   │   ├── index.tsx               # Screen to add new note
│   │   ├── styles.ts
│   │   └── useNewNote.ts           # Hook for note creation, debounce, toast
│   ├── Settings/
│   └── Summary/
│
├── services/                       # Business logic layer (call repositories or APIs)
│   ├── AppConfigService.ts         # Initialize app config, create DB tables, seed categories
│   └── NoteService.ts              # Handle logic for notes (CRUD using repositories)
│
├── utils/                          # Utility functions (helpers, formatters, date, etc.)
│
└── App.tsx                         # App entry point (wraps store, navigation, Toast)

```

---

## 🧭 Upcoming Features / Future Plans

Here are some features planned for future releases or if more time is available:

### 🧪 Unit tests and E2E tests

Add testing coverage for reducers, mappers, and UI flows to improve code reliability.

### 🗂️ Add tags & search by keyword

Allow filtering and searching notes by tag or content.

### 🧭 Improved summary dashboard

Provide analytics by category, and visualize user activity with charts.

---

## 🙏 Finally

Your feedback means a lot!  
Thank you for taking the time to explore this project!
