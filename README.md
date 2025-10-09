# 🌐 NewWay — AI-Powered Personalized Roadmap Creator

> 🚀 *“Your smarter way to learn, grow, and achieve.”*

NewWay is an **AI-driven roadmap creation web application** that analyzes an individual’s skills, interests, and career goals to generate a **personalized learning roadmap**.  
It also provides **AI-recommended learning resources** (courses, videos, docs, etc.) tailored to each user’s roadmap, helping them progress efficiently and confidently.

try it now: [https://newway-woad.vercel.app](https://newway-woad.vercel.app)

---

## 🧠 Core Idea

Many learners struggle to find the right path or resources to reach their goals.  
**NewWay** solves that by combining **Next.js**, **MERN stack**, and **AI (Gemini)** to automatically analyze user data and craft **custom learning journeys**.

---

## ✨ Features

- 🔐 **User Authentication** — Secure login/register system using JWT  
- 🧭 **AI Roadmap Generation** — Gemini AI analyzes input and builds a personalized learning path  
- 📄 **Resume Upload** — Upload your resume (PDF/DOCX) and the system extracts skills and experience automatically using **LangChain, Mammoth, and PDFParser**  
- 🎯 **Skill Assessment** — Users can also manually input or evaluate their current skill levels  
- 📚 **AI Resource Recommendations** — Curated YouTube videos, articles, or documentation suggestions for each skill node  
- 🧩 **Dynamic Roadmap UI** — Interactive roadmap visualization built with Framer Motion + Tailwind CSS  
- 🗄️ **Database** — MongoDB (Atlas) for scalable data storage  
- 🖥️ **Full-Stack Architecture** — Seamless integration between Next.js frontend and Express backend APIs  

---

## 🧰 Tech Stack

| Layer | Technologies Used |
|:------|:------------------|
| **Frontend** | Next.js 15, React, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ORM) |
| **AI Integration** | Gemini API (Google Generative AI), LangChain |
| **Resume Parsing** | Mammoth, PDFParser |
| **Auth** | JSON Web Token (JWT) |
| **Deployment** | Vercel |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ADNUKUNHOME/NewWay.git
cd NewWay
```

### 2️⃣ Install Dependencies
```bash
npm install
npm run dev
```

### 3️⃣ Configure Environment Variables
Create a .env.local file in project root directory
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

JWT_SECRET=create-yourown-pass

GEMINI_API_KEY=your-gemini-api-key

MONGODB_URI=your-mongoDB-url

BREVO_SMTP_USER=your-brevo-smtp (for sending email for authentication status & reset password)
BREVO_SMTP_KEY=your-brevo-smtp-key
ADMIN_EMAIL=your-admin-email
```

---

## 🤖 How AI & Roadmap Generation Works

Users have **two input options**:

1. **Upload Resume (PDF/DOCX)**  
   - PDFParser & Mammoth extract text.  
   - LangChain processes skills and experience automatically.

2. **Manual Input**  
   - Users can enter their skills and experience directly.  

**AI Roadmap Generation**  
- Gemini AI analyzes the skills and goals to generate a personalized learning roadmap.

**Resource Recommendations**  
- Each skill node is paired with AI-curated resources (tutorials, videos, documentation).

**Visualization**  
- The roadmap is dynamically displayed using Framer Motion for smooth, interactive animations.


---

###  Future Enhancements

 - 🧍 Personalized analytics dashboard

 - 🧑‍🏫 Mentor/Student collaboration system

 - 🧩 Integration with course APIs (Udemy, Coursera)

 - 💬 AI Chat Assistant for guidance

 - 📄 Export roadmap as PDF or share online

--- 

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or issue in the repository.

---

## 🧑‍💻 Author

#### MUHAMMAD ADNAN K
#### 🌍 Full Stack Developer | AI-Driven Web Creator
#### 📧 adnukunhome7@gmail.com
🔗 LinkedIn: [https://www.linkedin.com/in/muhammad-adnan-k-a479052a1](https://www.linkedin.com/in/muhammad-adnan-k-a479052a1)

---

### ⭐ If you like this project, give it a star on GitHub!
 
