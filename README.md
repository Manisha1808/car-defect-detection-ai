# 🚗 AI Vehicle Damage Detection System

A full-stack AI application that detects vehicle defects from uploaded images and generates an automated inspection report.

The system integrates a **YOLO object detection model** with a **Flask backend API** and a **React frontend dashboard**.

---

## 📌 Project Overview

This project demonstrates how computer vision can automate vehicle inspection.

Users upload a vehicle image and the system:

- Detects defects using a YOLO model
- Draws bounding boxes around detected damages
- Generates an AI inspection report

The report includes:
- defect type
- confidence score
- severity classification

---

## ✨ Features

- Upload vehicle images for inspection
- AI-based defect detection using YOLO
- Visualization of detected defects on the image
- Inspection report with confidence score
- Severity classification (High / Medium / Low)
- Full-stack integration with Flask and React
- Clean and interactive user interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- Bootstrap

### Backend
- Python
- Flask
- Flask-CORS

### Machine Learning / Computer Vision
- YOLO (Ultralytics)
- OpenCV
- PyTorch

---

## 🧠 System Architecture

User Uploads Image  
↓  
React Frontend  
↓  
Flask API  
↓  
YOLO Object Detection Model  
↓  
Detection Results + Confidence Scores  
↓  
Inspection Report Displayed in UI  

---

## 📂 Project Structure

car-defect-detection-ai  
│  
├── app.py  
├── requirements.txt  
│  
├── static  
│   └── uploads  
│  
├── car-defect-frontend  
│   ├── src  
│   ├── public  
│   └── package.json  
│  
├── screenshots  
│   └── demo.png  
│  
└── README.md  

---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

git clone https://github.com/Manisha1808/car-defect-detection-ai.git  
cd car-defect-detection-ai  

---

### 2️⃣ Setup backend

pip install -r requirements.txt  
python app.py  

Backend runs on:  
http://localhost:5000  

---

### 3️⃣ Run frontend

cd car-defect-frontend  
npm install  
npm start  

Frontend runs on:  
http://localhost:3000  

---

## 📊 Example Output

The system produces:

- detected defect regions on the vehicle image
- confidence scores for each detection
- an AI inspection report summarizing the results

---

## 🔮 Future Improvements

- Add PDF export for inspection reports
- Deploy full system to cloud
- Add model performance metrics dashboard

---

## 👩‍💻 Author

Manisha Sen  
Computer Science Engineering Student  
Interested in AI, Data Science, and Computer Vision

---

## 📄 License

This project uses open-source libraries including YOLO and other Python frameworks.
