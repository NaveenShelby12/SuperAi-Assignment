# SuperAi-Assignment

# **Voice Generator Web Application**

### **Description**
A web app that allows users to upload voice files, input custom text, and generate downloadable audio files using the same voice.

---

### **Features**
- Upload voice files (up to 5MB).
- Enter custom text (up to 500 characters).
- Generate a new voice file.
- Download the generated audio.

---

### **Technologies**
- **Frontend**: React.js, TailwindCSS, Axios.
- **Backend**: Node.js, Express.js, Multer, gTTS.
- **Database**: Supabase for file storage.

---

### **Setup**

#### **Clone the Repository**
```bash
git clone https://github.com/your-repo-name/voice-generator.git
cd voice-generator
```

#### **Install Dependencies**
- **Frontend**:
  ```bash
  cd frontend
  npm install
  ```
- **Backend**:
  ```bash
  cd backend
  npm install
  ```

#### **Configuration**
- Update `backend/server.js` with your Supabase URL and API key:
  ```javascript
  const supabase = createClient('https://your-supabase-url', 'your-supabase-key');
  ```

---

### **Run the App**
1. Start the backend:
   ```bash
   cd backend
   node server.js
   ```
2. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```
   
---

### **Usage**
1. Open the app at `http://localhost:3000`.
2. Upload a voice file and enter text.
3. Click "Create New Voice File."
4. Download the generated audio.

---
