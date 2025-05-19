# Asante-Todd-Academic

# Asante Todd Academic Site

A full-stack academic website for Dr. Asante Todd featuring donation capabilities via Stripe, a contact system, visitor analytics, and a Words of Affirmation form. Built using Node.js, Express, MongoDB, and React.

---

## 📑 Table of Contents

- [Description](#description)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Credits](#credits)  
- [License](#license)

---

## 🧾 Description

This application provides an interactive platform for visitors to engage with Dr. Asante Todd's academic initiatives. Key features include:
- Stripe-powered donations
- Contact submission form
- Words of Affirmation form
- Visitor tracking and analytics
- Email notification system via Nodemailer

Built using:
- **Frontend:** React with Stripe Elements
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Payment Integration:** Stripe API

---

## ⚙️ Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/asante-todd-academic.git
   cd asante-todd-academic


2. **Install Dependecies 
    Backend: bash
        cd server
    # If you have nodemon (recommended for development)
        npm run dev
    # OR run manually with Node
        node server/server.js

    FrontEnd: bash
        cd ../client
        npm install
        
3. Set Up Environment Variables

Create a .env file in the root of the project and include:

MONGO_URI=your_mongo_uri
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_app_password

4. Run the App

Backend: bash

cd server
npm run dev

Frontend (in a new terminal): bash

cd client
npm run dev

🚀 Usage
Once running locally:

Visit http://localhost:5173 for the frontend

API is available at http://localhost:5000

Users can:

Submit donations

Send contact messages

Leave affirmations

Track engagement via analytics

🙌 Credits
Stripe

Stripe Docs

Author: Asante Todd

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.