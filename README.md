# GadgetHeaven✨

Your go-to destination for the latest and greatest gadgets! GadgetHeaven is an e-commerce platform designed for gadget enthusiasts, offering a seamless shopping experience with features like a shopping cart, wishlist, and product filtering. This React-based platform follows a detailed Figma design to ensure a visually appealing and user-friendly interface.

## 📌 Live Website Link
[Visit GadgetHeaven✨](https://web-gadget-heaven.netlify.app/)

## 📑 Requirement Document Link
[Project Requirements](https://turquoise-siana-62.tiiny.site/)

## 🛠 Technologies Used
- **React.js**: Utilizing components, JSX, props, conditional rendering, `useState`, `useEffect`, and `useContext` hooks.
- **Context API** & **LocalStorage**: For efficient state management of the cart and wishlist, with data persistence.
- **Tailwind CSS & Daisy UI**: Responsive and customizable styling matching the Figma design.
- **React Toastify**: Enhanced user experience with toasts for feedback on adding items to cart or wishlist.

## 🚀 React Fundamentals
- **Components**: Modular and reusable UI elements.
- **JSX**: Structured and readable JavaScript XML syntax.
- **Props**: Passing data between components.
- **Conditional Rendering**: Dynamically rendering content based on conditions.
- **Hooks**: `useState`, `useEffect`, `useContext`, and `useLocation` for managing and accessing component state, side effects, routing, and Context API data.

## 🔑 Key Features
1. **Structured Navigation**: The Navbar includes links like Home, Dashboard, Stats, and displays active routes for better UX.
2. **Interactive Product Listing and Filtering**: Users can view products by categories, check details, and filter gadgets. Each gadget shows details like price, rating, and availability.
3. **Wishlist and Cart Functionality**: Add items to cart or wishlist with a toast notification, track selected items, and manage them on the dashboard with sorting, price limits, and validation.
4. **Dynamic Purchase Workflow**: Includes a modal to confirm purchases and clears the cart upon successful checkout without page reload.
5. **Responsive Design**: Optimized for mobile and desktop, with background colors adapted per page using the `useLocation` hook.

## 🛍️ Website Sections
- **Home Page**: A welcoming banner, gadget categories sidebar, and a product card grid showcasing gadgets with options to view details or add to wishlist/cart.
- **Details Page**: Detailed view of each product, including specifications and options to add items to cart or wishlist.
- **Dashboard**: Displays items in the cart and wishlist, with sorting by price, total price calculation, and the ability to add items from the wishlist to the cart.
- **Statistics Page**: A chart visualizing prices by product, with an interactive graph displaying gadget price comparisons.

## 📝 Additional Routes
- **Stats Page**: Includes a Composed Chart (Price vs. Product Name) for data visualization of products.

## ⚙️ Miscellaneous Features
- 404 Error Page: Custom 404 page for non-existent routes.
- Dynamic Page Titles: Using `useEffect`, each page has a unique title.
- Favicon: Custom icon representing the brand.
- Data Validation: Prevents adding items to cart/wishlist more than once, manages edge cases like price limits, and provides real-time notifications.

## 🛠 How to Use This Repository
1. **Clone the repository**: `git clone <repo-url>`
2. **Install dependencies**: `npm install`
3. **Run the project**: `npm run dev`
4. Visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## 💬 User Feedback
- **Toasts**: Notifies users when items are added to cart or wishlist, each with a unique message for a smooth user experience.
- **Purchase Modal**: A congratulatory modal on checkout that clears the cart and redirects to Home, ensuring a fluid purchase experience.

Explore the latest gadgets with ease and enjoy the refined shopping experience at **GadgetHeaven✨**!
