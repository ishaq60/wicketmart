# 🏏 CricketMart - E-commerce Platform for Cricket Enthusiasts
![CricketMart Home](https://i.ibb.co.com/tTJNVC4Z/Home.png)
![CricketMart Home](https://i.ibb.co.com/zHjXtgyy/Screenshot-2025-08-05-180527.png)

CricketMart is a feature-rich e-commerce web application built for cricket lovers, offering a smooth shopping experience for users and full control for administrators. Built using modern technologies like **Next.js**, **React**, **Redux**, and **MongoDB**, the platform ensures performance, scalability, and maintainability.

---

## 🚀 Features

### 🛍️ User Features
- Browse products by category
- Product details with images and descriptions
- Add to cart and checkout system
- Secure authentication (via NextAuth)
- View order history and order details
- Payment integration (optional)
- Responsive UI for mobile and desktop

### 🛠️ Admin Features
- Admin dashboard
- Manage products (Create, Update, Delete)
- Manage users
- Manage orders and update order status
- View sales analytics (optional)

---

## 📊 Roles & Functionalities

| Role   | Functionalities                                                                 |
|--------|----------------------------------------------------------------------------------|
| User   | Register/Login, Browse Products, Add to Cart, Checkout, View Orders            |
| Admin  | Manage Products, Manage Users, Manage Orders, Access Dashboard, Update Status  |

---

## 🧑‍💻 Tech Stack

| Category       | Technologies Used                                       |
|----------------|--------------------------------------------------------|
| Frontend       | Next.js, React, Tailwind CSS, ShadCN UI, Redux         |
| Backend        | Node.js, Express.js                                    |
| Authentication | NextAuth.js                                            |
| Database       | MongoDB (with Mongoose)                                |
| Styling        | Tailwind CSS                                           |
| State Mgmt     | Redux Toolkit                                          |
| UI Components  | ShadCN UI                                              |
| Others         | Cloudinary (for image upload), Vercel (for deployment) |

---

## 📁 Folder Structure (Simplified)

cricketmart/
├── app/ # Next.js App Directory
│ ├── api/ # API routes (products, users, orders)
│ ├── components/ # Reusable components (UI, product cards, etc.)
│ ├── pages/ # Public and protected pages
│ ├── styles/ # Global and module styles
│ └── utils/ # Helper functions and API handlers
├── public/ # Static assets
├── redux/ # Redux store and slices
├── models/ # Mongoose models
├── middleware/ # Auth and role middleware
├── .env.local # Environment variables
└── README.md # Project Documentation

yaml
Copy
Edit

---

## 🔐 Environment Variables

Create a `.env.local` file in the root and add:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

yaml
Copy
Edit

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/cricketmart.git
cd cricketmart

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
App will be running at: http://localhost:3000

🛠️ Admin Credentials (For Testing)
You can manually set a user's role to admin in the database.

Example:

json
Copy
Edit
{
  "name": "Admin User",
  "email": "admin@example.com",
  "role": "admin"
}
✅ Status
✅ Project Completed
🚀 Ready for Deployment (Vercel Recommended)

📸 Screenshots
![Home page](https://i.ibb.co.com/tTJNVC4Z/Home.png)
![product](https://i.ibb.co.com/chKCzpJH/products.png)
![admindashboard](https://i.ibb.co.com/PGj9bNJD/admindasgboard.png)

Add homepage, product page, and admin dashboard screenshots here (optional)

📦 Deployment
You can deploy this app using platforms like Vercel, Render, or Heroku.

For Vercel:

Connect your GitHub repo

Set environment variables in Vercel dashboard

Deploy

🙌 Acknowledgements
Next.js

ShadCN UI

Redux Toolkit

MongoDB

Tailwind CSS

NextAuth.js

📧 Contact
Built with ❤️ by Ishaq Shamim
📍 Bangladesh
🌐 Portfolio: [your-portfolio-link.com]

yaml
Copy
Edit

---

Would you like this saved as a downloadable `README.md` file?







You said:
good so add this banner and image screen shoot


ChatGPT said:
Great! Below is your updated README.md with:

✅ A banner image placeholder at the top

✅ A Screenshots section with placeholder links for UI screenshots

✅ Markdown image syntax (replace the links with your actual image URLs later)

md
Copy
Edit
# 🏏 CricketMart - E-commerce Platform for Cricket Enthusiasts

![CricketMart Banner](https://your-image-hosting.com/banner.png)

CricketMart is a feature-rich e-commerce web application built for cricket lovers, offering a smooth shopping experience for users and full control for administrators. Built using modern technologies like **Next.js**, **React**, **Redux**, and **MongoDB**, the platform ensures performance, scalability, and maintainability.

---

## 🚀 Features

### 🛍️ User Features
- Browse products by category
- Product details with images and descriptions
- Add to cart and checkout system
- Secure authentication (via NextAuth)
- View order history and order details
- Payment integration (optional)
- Responsive UI for mobile and desktop

### 🛠️ Admin Features
- Admin dashboard
- Manage products (Create, Update, Delete)
- Manage users
- Manage orders and update order status
- View sales analytics (optional)

---

## 📊 Roles & Functionalities

| Role   | Functionalities                                                                 |
|--------|----------------------------------------------------------------------------------|
| User   | Register/Login, Browse Products, Add to Cart, Checkout, View Orders            |
| Admin  | Manage Products, Manage Users, Manage Orders, Access Dashboard, Update Status  |

---

## 🧑‍💻 Tech Stack

| Category       | Technologies Used                                       |
|----------------|--------------------------------------------------------|
| Frontend       | Next.js, React, Tailwind CSS, ShadCN UI, Redux         |
| Backend        | Node.js, Express.js                                    |
| Authentication | NextAuth.js                                            |
| Database       | MongoDB (with Mongoose)                                |
| Styling        | Tailwind CSS                                           |
| State Mgmt     | Redux Toolkit                                          |
| UI Components  | ShadCN UI                                              |
| Others         | Cloudinary (for image upload), Vercel (for deployment) |

---

## 📁 Folder Structure (Simplified)

cricketmart/
├── app/ # Next.js App Directory
│ ├── api/ # API routes (products, users, orders)
│ ├── components/ # Reusable components (UI, product cards, etc.)
│ ├── pages/ # Public and protected pages
│ ├── styles/ # Global and module styles
│ └── utils/ # Helper functions and API handlers
├── public/ # Static assets
├── redux/ # Redux store and slices
├── models/ # Mongoose models
├── middleware/ # Auth and role middleware
├── .env.local # Environment variables
└── README.md # Project Documentation

yaml
Copy
Edit

---

## 🔐 Environment Variables

Create a `.env.local` file in the root and add:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

yaml
Copy
Edit

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/cricketmart.git
cd cricketmart

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
App will be running at: http://localhost:3000

🛠️ Admin Credentials (For Testing)
You can manually set a user's role to admin in the database.

Example:

json
Copy
Edit
{
  "name": "Admin User",
  "email": "admin@example.com",
  "role": "admin"
}
🖼️ Screenshots
🏠 Homepage

📄 Product Details Page

🛒 Cart Page

🧑‍💼 Admin Dashboard

Replace https://your-image-hosting.com/... with your actual image URLs (from Imgur, Cloudinary, or similar).

📦 Deployment
You can deploy this app using platforms like Vercel, Render, or Heroku.

For Vercel:

Connect your GitHub repo

Set environment variables in Vercel dashboard

Deploy

🙌 Acknowledgements
Next.js

ShadCN UI

Redux Toolkit

MongoDB

Tailwind CSS

NextAuth.js

📧 Contact
Built with ❤️ by Ishaq Ahammad Mondol
📍 Bangladesh
