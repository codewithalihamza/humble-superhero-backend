## **📜 README for Backend (NestJS API)**
```md
# 🦸‍♂️ Humble Superhero API (Backend)

This is the backend for the **Humble Superhero API**, built using **NestJS**. It allows users to add superheroes with a humility score and fetch them sorted by their humility.

---

## 🚀 Features

- **Add Superheroes:** API to add a superhero with a name, superpower, and humility score.
- **Fetch Superheroes:** API returns superheroes sorted by humility score.
- **Validation:** Ensures humility score is a number between **1 and 10**.
- **Simple In-Memory Database:** Stores data temporarily in an array.

---

## 🛠️ Tech Stack

- **NestJS** - A progressive Node.js framework.
- **Node.js & TypeScript** - For backend development.
- **Jest** - For testing.

---

## 🔧 Installation & Running the Project

1. **Clone the Repository:**
   ```sh
   https://github.com/codewithalihamza/humble-superhero-backend.git
   ```

2. **Install NestJS in the Existing Directory:**
   ```sh
   npm install
   ```

3. **Start the API:**
   ```sh
   npm run start
   ```

---

## 📌 API Endpoints

### **1️⃣ Add a New Superhero**
**`POST /superheroes`**  
📩 **Request Body:**
```json
{
  "name": "Captain Kindness",
  "superpower": "Inspires humility",
  "humilityScore": 9
}
```
📤 **Response:**
```json
{
  "id": 1,
  "name": "Captain Kindness",
  "superpower": "Inspires humility",
  "humilityScore": 9
}
```

---

### **2️⃣ Get All Superheroes (Sorted by Humility)**
**`GET /superheroes`**  
📤 **Response:**
```json
[
  {
    "id": 1,
    "name": "Captain Kindness",
    "superpower": "Inspires humility",
    "humilityScore": 9
  },
  {
    "id": 2,
    "name": "The Modest Marvel",
    "superpower": "Lowers ego levels",
    "humilityScore": 8
  }
]
```

---

## ✅ **Technical Skills**
- **Code Quality:** Modular NestJS structure for scalability.
- **Validation:** Uses DTOs and validation for better data integrity.
- **Testing:** Basic Jest test included.

---

## 🤝 **Team Player Attitude**
> If working with a teammate, I would:
1. **Use Git Branches:** Feature branches (`feature/add-superhero`, `feature/tests`).
2. **PR Reviews:** Ensure best practices before merging.
3. **Task Division:** Backend & frontend teams work in parallel.
4. **Communication:** Use Slack or others for updates.
5. **Testing & Deployment:** Automate API tests before deployment.

---

## 🧠 **If I Had More Time...**
If I had more time, I would:
1. **Use a Database:** PostgreSQL or MongoDB instead of an in-memory array.
2. **Add Authentication:** Secure the API with JWT authentication.
3. **Rate Limiting:** Prevent spam requests using rate-limiting middleware.
4. **Deploy the API:** Host on **Heroku** or **Vercel**.

---

## 🎤 **Humility and Communication**
- **Code is well-documented** with clear comments.
- **README provides easy setup instructions.**
- **Project is structured for easy collaboration.**

---