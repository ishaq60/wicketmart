
# 🏏WicketMart - E-commerce Web Application

![WicketMart Home](https://i.ibb.co/tTJNVC4Z/Home.png)

WicketMart is a full-featured **e-commerce platform** forWicket products, offering two user modes: **Normal Users** and **Admin Users**. It is built with a modern stack including **Next.js, React,Redux,MongoDB,express js Tailwind CSS, ShadCN UI, NextAuth,**, and more.

---

## 📦 Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| 🛒 User Mode             | Browse products, add to cart, purchase items, view order history            |
| 🔐 Authentication        | Secure login/signup with Google using NextAuth                             |
| 🛍️ Product Management    | Admins can add, update, delete products                                      |
| 📊 Admin Dashboard       | Real-time analytics, product management, user & order management            |
| 💰 Payments              | Integrated payment methods (e.g., Stripe/PayPal if configured)              |
| 🌐 Responsive UI         | Mobile-first responsive design using Tailwind CSS + ShadCN UI               |
| 🔎 Product Filtering     | Search and filter products by category, price, etc.                         |
| 🧾 Order Management       | Admin can view/update order status                                          |
| 🔄 Real-time Redux State | Redux Toolkit used for app-wide global state                                |

---

## 📊 Roles & Functionalities

| Role   | Functionalities                                                                 |
|--------|----------------------------------------------------------------------------------|
| **User**   | Register/Login, Browse Products, Add to Cart, Checkout, View Orders            |
| **Admin**  | Manage Products, Manage Users, Manage Orders, Access Dashboard, Update Status  |

----

## 🧪 Tech Stack

| Category        | Tech                            |
|----------------|----------------------------------|
| Frontend       | Next.js, React, Redux Toolkit    |
| Styling        | Tailwind CSS, ShadCN UI          |
| Backend        | Express.js, Node.js              |
| Database       | MongoDB                          |
| Auth           | NextAuth (Google)                |
| Hosting        | Vercel / Render / MongoDB Atlas  |

---

## 📁 Folder Structure

```
WicketMart/
├── app/              # Next.js App Directory
│   ├── api/          # API routes (products, users, orders)
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page routing
│   ├── styles/       # Global & module CSS
│   └── utils/        # Helper functions
├── public/           # Static assets
├── redux/            # Redux store setup
├── models/           # Mongoose data models
├── middleware/       # Auth middleware
├── .env.local        # Environment config
└── README.md         # Project documentation
```

---

## 🖼️ Screenshots

### 🏠 Homepage Feature
![Homepage feture](https://i.ibb.co.com/zHjXtgyy/Screenshot-2025-08-05-180527.png)

### 📄 Products Page
![Products](https://i.ibb.co/chKCzpJH/products.png)

### 🛠️ Admin Dashboard
![Admin Dashboard](https://i.ibb.co/PGj9bNJD/admindasgboard.png)

---

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/WicketMart.git
cdWicketmart
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env.local` file**
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the development server**
```bash
npm run dev
```

---

## 🧑‍💻 Author

- **Name**: Ishaq Ahammad Mondol
- **Project**:WicketMart - E-commerce Platform

---

## 📄 License

This project is licensed under the MIT License.
