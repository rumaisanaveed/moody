# 😁 Moody

A beautifully designed mobile app that lets users track their moods over the last 7 days and receive quotes based on how they feel. Users can also add personal notes and monitor their sleep and mood patterns through charts — helping them better understand and manage their emotional well-being.

## 🛠 Tech Stack

- Expo  
- React Native  
- TypeScript  
- Stylesheets for styling  
- Firebase (Authentication + Database)  
- Yup (Schema validation)  
- React Hook Form (Form handling)  
- Zustand (State management)  
- React Query (API management)  
- React Native MMKV (Key-value storage)  
- React Native Keyboard Controller (Keyboard handling)  
- React Native Gifted Charts (Bar charts)  
- Sonner Native (Toasts)  
- React Native Skeleton Kit (Loading placeholders)

## 💡 The Idea

I wanted to build something fun to apply what I had been learning in React Native. I stumbled upon the idea of mood tracking and found it both useful and exciting. After some exploration, I discovered a Figma file showcasing a similar concept, which inspired the UI design. I customized the features and visuals and started building from there.

## ✨ Features

- Authentication using Firebase  
- Mood tracking for the past 7 days  
- Add personal notes  
- View motivational quotes based on your mood  
- Graphs for mood and sleep tracking  
- Light/dark mode ready (currently defaulting to light mode)  
- Real-time updates using Firebase and React Query

## 🧩 How It Works

1. After authentication, users are taken to the **Home Screen** where they can view their mood history from the past 7 days.
2. Tapping the add button initiates a flow:
   - **Choose Mood**
   - **Choose Emotions** (select 3)
   - **Choose Reasons** (select 3)
   - **Hours of Sleep**
   - **Add Note**
3. Once completed, the user is redirected to the Home Screen with the updated mood entry displayed.
4. The **Stats Screen** presents two bar charts showing mood and sleep data from the last 7 days.

## 🧠 What I Learned

- Mobile development differs significantly from web — especially in terms of UX expectations, component structures, and styling approaches.
- How to use **Yup** effectively with **React Hook Form** for reusable and maintainable form validations.
- Understood the power of **Zustand** and why it’s a great alternative to Context API or Redux for simpler and more performant state management.
- Learned how fonts are handled in React Native (a very different process from web).
- Strengthened my knowledge of **TypeScript** within a React Native environment.
- Learned to implement authentication using Firebase and structure user-specific collections.
- Gained experience in writing scalable and modular code, especially with the use of reusable components and hooks.
- Discovered how to query specific ranges (like last 7 days) from Firebase collections.
- Realized the importance of debugging and testing cross-device behaviors in mobile apps.
- 
## 🔧 How to Run the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/rumaisanaveed/moody.git
   cd moody
   ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Clean and rebuild the project**

   ```bash
   npx expo prebuild --clean
   ```

4. **Connect your phone** (with USB debugging enabled) and run:

   ```bash
   npm run android
   ```

   This will build and install the app APK on your device and launch it.
   
## 🤝 How to Contribute

If you want to add more features in this app:

1. Fork the repository
2. Create a new branch and make your changes
3. Submit a pull request with a clear description of what you did

All suggestions, improvements, and feedback are welcome! 🧡

## 🎥 Demo Video

https://github.com/user-attachments/assets/0aa09956-3c85-44de-bcf5-a6d8742f286c
