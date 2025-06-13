# 🌐 Muhammad Ausaja Hussain - Portfolio

This is my personal portfolio website built with **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**.  
It showcases my projects, skills, and provides a contact form with integrated email functionality using **Nodemailer**.


## 📌 Features

- 🧑‍💻 Clean, responsive layout using **Tailwind CSS**
- 🧭 Navigation bar with route-based rendering
- 📨 Contact form that sends emails using **Nodemailer**
- 🎨 Modular EJS views for easy maintenance
- 🌍 Deployed to Render with environment variables support

  
## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (server-side templates), Tailwind CSS
- **Email**: Nodemailer (via Gmail App Password)
- **Deployment**: Render

  
## 📂 Project Structure
- public/
  - assests/
    - asp-dot-net.png
    - c.png
    - css.png
    - excel.png
    - express-js.png
    - html.png
    - java-script.png
    - java.png
    - microsoft-sql-server.png
    - mongodb.png
    - my-sql.png
    - node-js.png
    - oracle.png
    - python.png
    - react.png
    - selenium.png
    - spring-boot.png
    - thymeleaf.png
  - images/
    - ausaja.jpg
  - projects/
    - Project_1
      - images/
        - image-1.png
        - image-2.png
        - image-3.png
        - image-4.png
      - Report.docx
    - Project_2
      - images/
        - image-1.png
        - image-2.png
    - Project_3
      - images/
        - image-1.png
        - image-2.png
        - image-3.png
        - image-4.png
        - image-5.png
        - image-6.png
      - Report.docx
    - Project_4
      - images/
        - image-1.png
        - image-2.png
      - Report.docx
  - Ausaja_Resume.pdf
- views/
  - partials/
    - header.ejs
  - about.ejs
  - contact.ejs
  - index.ejs
  - project.ejs
- index.js (main Express server)
- package-lock.json
- package.json
- README.md

  
## 📧 Email Configuration

To enable contact form emails:
1. Create a `.env` file
2. Add the following:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```
3. In your index.js, use **process.env.EMAIL_USER** and **EMAIL_PASS** with dotenv.

  
## 🚀 Deployment (on Render)

1. Push your code to GitHub
2. Go to https://render.com
3. Create a new Web Service linked to your GitHub repo
4. Set:
  - Build Command: npm install
  - Start Command: node index.js
  - Environment Vars: add your email credentials


## 🧪 Live Demo
🔗 https://your-render-url.onrender.com

