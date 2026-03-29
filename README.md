Delicious Pizza

A fully functional food delivery web app built with React. The project focuses on complex frontend logic, including global cart management, state persistence, and form validation.

##Disclaimer

Created for educational purposes only. Not intended for commercial use.

✨ Features
5 pages — Home, Menu, Cart, Contact
Product filtering — by category using useMemo for performance optimization
Global cart — created with useReducer and useContext
Add/remove products
Quantity limits (maximum 20 per product)
Contact form — email and message validation
🛠️ Tech stack
React 18 — functional components, hooks
TypeScript — types
React Router v6 — routing and navigation
useReducer — global state management
react-hook-form — form processing and validation
CSS modules — component-scoped styling
CSS variables — consistent styling

🧠 Key implementation details
Cart logic — useReducer manages all cart actions (ADD, DELETE, CLEAR) with a quantity limit of 20 products Product

Performance - useMemo prevents unnecessary redraws when filtering by category
Form Validation - Custom Regular Expressions for Email and Phone Number

⏱️ Development Time
Time spent solely on coding: ~5 hours
Total (with breaks): 2 days