# Bewakoof Clone 👕

A front-end clone of [Bewakoof.com](https://www.bewakoof.com/), an e-commerce platform for browsing and purchasing clothing across multiple categories. Built as a team capstone project during Masai School's Unit-4 curriculum, completed end-to-end in a 4-day sprint.

🔗 **Live Demo:** [glittery-pika-ebf20b.netlify.app](https://647dee0e37f98815af0aa4fe--glittery-pika-ebf20b.netlify.app/)


## ✨ Features

- **Category-wise browsing** — separate Men's and Women's product listing pages
- **Product detail pages** with individual item views
- **Shopping cart** with add/remove functionality, persisted using `localStorage`
- **Empty cart state** handling
- **Checkout flow** — cart → address entry → checkout confirmation
- **User authentication pages** — login, signup, and OTP verification screens
- **Responsive navbar and footer** shared across all pages

---

## 🛠️ Tech Stack

- **HTML5** — page structure and semantic markup
- **CSS3** — custom styling across all pages
- **JavaScript (Vanilla)** — DOM manipulation, cart logic, and interactivity
- **localStorage** — client-side cart persistence across sessions
- **Netlify** — deployment and hosting

---

## 📂 Project Structure

```
bewakoof_clone/
├── css/                 # Stylesheets
├── scripts/             # JavaScript logic (cart, interactivity, etc.)
├── index.html           # Homepage
├── mens.html            # Men's category listing
├── womens.html          # Women's category listing
├── details.html         # Product detail page
├── cart.html            # Shopping cart
├── Empty_cart.html       # Empty cart state
├── checkout.html        # Checkout flow
├── address.html         # Address entry
├── login.html            # Login page
├── signup.html           # Signup page
├── otp.html               # OTP verification
├── navbar.html            # Shared navigation component
├── footer.html            # Shared footer component
└── team.txt               # Project contributors
```

---

## 🚀 Getting Started (Run Locally)

This is a static front-end project with no build step required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shrutij512/bewakoof_clone.git
   cd bewakoof_clone
   ```

2. **Open it in your browser**
   Simply open `index.html` directly in a browser, or serve it with a lightweight local server for the best experience (recommended, since some browsers restrict local file access for scripts):
   ```bash
   npx serve .
   ```
   Then visit the local URL it prints (typically `http://localhost:3000`).


## 📚 What I Learned

- Structuring a multi-page static site with shared, reusable components (navbar/footer)
- Managing client-side state (cart contents) using `localStorage`
- Collaborating on a shared codebase under a tight deadline using Git
- Translating a real-world e-commerce UI into functioning HTML/CSS/JS

---

## 📄 License

This project was built for educational purposes as part of a training curriculum and is not affiliated with or endorsed by Bewakoof.com.
