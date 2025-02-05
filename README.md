# SmartPantry

SmartPantry is a **smart and innovative inventory management system** that helps users efficiently manage their pantry and fridge items using **AI object recognition, barcode scanning, expiration alerts, and personalized automated recipe recommendations**. The project is built using **HTML, CSS, JavaScript**, and various APIs to enhance user experience.

## 🚀 Features

### 🔍 AI Object Recognition using Webcam (CocoSSD + TensorFlow)
- Identifies pantry/fridge items using **CocoSSD (TensorFlow)**.
- Automatically **labels and adds items** to the **local database**.
- Users can manually update or delete entries.

### 📷 Barcode Scanning through Webcam
- Scans **non-perishable items** using **QuaggaJS**.
- Fetches **product details** and stores them in the **database**.
- Auto-fills item **name, category, and expiration date** (if available).

### 🍽️ Personalized Automated Recipe Recommendation (Spoonacular API)
- Suggests **recipes based on available ingredients**.
- Highlights **missing ingredients** needed for specific recipes.
- Provides **nutritional information** for selected meals.

### 📦 Inventory Management
- Stores **items in a database** while sorting them **by expiration date**.
- Allows **manual entry, updates, and deletions** for better control.
- Provides an **overview of available and soon-to-expire items** for better planning.

### ⏳ Expiration Alerts
- **Tracks expiration dates** and **notifies users** when items are about to expire.
- Prevents **food wastage** by suggesting recipes for near-expiry items.

### 🤖 Chatbot Assistance (Dialogflow API)
- Helps users navigate through the website.
- Answers common queries about **inventory, recipes, and features**.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Object Recognition:** TensorFlow.js (CocoSSD Model)
- **Barcode Scanner:** Quagga.js 
- **Recipe API:** Spoonacular API
- **Chatbot:** Dialogflow API

---

### 🌟 Shop Smart, Waste Less, and Thrive More with SmartPantry! 🍽️
