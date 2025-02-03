I have all the necessary details to create the `README.md` file for your project. Here's the complete documentation:  

---

## 📌 GadgetHeaven ✨  
Your go-to destination for the latest and greatest gadgets!  

---

### 📢 Live Website  
🔗 [Live Website Link](https://gadget-heavens.netlify.app/)  

---

## 🛠 Tech Stack  
- **Frontend**: React.js (JSX), React Router, Context API  
- **Styling**: Tailwind CSS, Custom CSS  
- **State Management**: React Context API  
- **Data Handling**: Local JSON file (`fake-data.json`)  
- **UI Components**: React Icons, React Stars (for ratings)  
- **Notifications**: React Toastify  
- **Chart Library**: Recharts (for statistics page)  

---

## 🚀 Features  

### ✅ **Core Functionalities**  
✔️ **Product Listing & Categorization**: Displays products dynamically from JSON data.  
✔️ **Product Details Page**: Shows details like image, price, availability, and ratings.  
✔️ **Shopping Cart**: Users can add/remove items, view total cost, and sort by price.  
✔️ **Wishlist System**: Users can add/remove items from the wishlist and move items to the cart.  
✔️ **Purchase System**: Users can complete a purchase, which clears the cart and shows a success modal.  

### 🎨 **UI & UX Enhancements**  
✔️ **Dynamic Navbar & Footer**: Consistent design across all pages.  
✔️ **Active Route Highlighting**: Uses `useLocation()` for route-based styling.  
✔️ **Background Color Variations**: Home page has a different background from other pages.  
✔️ **404 Error Page**: Displays when a user navigates to an unknown route.  

### 📊 **Advanced Features**  
✔️ **Statistics Page**: Displays a composed chart (Price vs. Product Name) using Recharts.  
✔️ **Purchase Modal**: Confirms purchase and redirects users back to home without reloading.  
✔️ **Favicon & Dynamic Page Titles**: Uses `react-helmet-async` for setting unique titles per page.  
✔️ **Sorting Functionality**: Users can sort cart items by price in descending order.  
✔️ **Edge Case Handling**: Prevents duplicate wishlist entries and limits cart value to $1000.  

---

## 📂 Project Structure  
```bash
GadgetHeaven/
│── src/
│   ├── Components/
│   │   ├── Dashboard/            # Dashboard Page (Cart & Wishlist)
│   │   ├── Home/                 # Home Page
│   │   ├── ProductDetails/       # Product Details Page
│   │   ├── Statistics/           # Statistics Page
│   │   ├── ContactUs/            # Contact Page
│   │   ├── ErrorPage/            # 404 Page
│   │   ├── Navbar/               # Navigation Bar
│   │   ├── Footer/               # Footer Component
│   ├── App.jsx                   # Main Application with Context API
│   ├── main.jsx                   # React Router Setup
│   ├── index.css                  # Global Styles
│   ├── fake-data.json              # Product Data (Local JSON)
│── public/
│── README.md                       # Documentation
│── package.json                     # Project Dependencies
```

---

## 🔄 **State Management & Data Handling**  
- **Context API**: Used for managing cart and wishlist state globally.  
- **Local JSON (`fake-data.json`)**: Used as a data source for product information.  
- **React Hooks**:  
  - `useState()`: Managing component state.  
  - `useEffect()`: Fetching data and handling lifecycle events.  
  - `useContext()`: Accessing the global cart/wishlist state.  

---

## 📜 **React Concepts Used**  
✅ **JSX** - Writing HTML-like syntax in JavaScript.  
✅ **Components** - Breaking the UI into reusable components.  
✅ **Props** - Passing data between components.  
✅ **State Management** - Using `useState()` and `useContext()`.  
✅ **React Router** - Setting up routes with `createBrowserRouter`.  
✅ **useEffect Hook** - Fetching data and handling side effects.  
✅ **Event Handling** - Adding/removing items, sorting, and toggling views.  

---

## 👨‍💻 **Developer**  
💡 **Habibul Alam**  
📧 Email: habibhassan.stt20@gmail.com  

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
