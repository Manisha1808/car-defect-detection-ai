# 🚗 AI Vehicle Damage Detection System

A full-stack AI application that detects vehicle defects from uploaded images and generates an automated inspection report.  
The system uses a **YOLO-based object detection model** integrated with a **Flask backend** and a **React frontend dashboard**.

---

## 📌 Project Overview

This project demonstrates how **computer vision can be used for automated vehicle inspection**.

Users can upload an image of a vehicle, and the system detects possible defects using an object detection model. The results are displayed visually along with a structured **AI inspection report** including:

- defect type
- confidence score
- severity classification

---

## ✨ Features

- Upload vehicle images for inspection
- AI-based defect detection using a YOLO model
- Visualization of detected defects on the image
- Inspection report with defect type and confidence score
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
├── backend
|
│ ├── app.py
| |
│ ├── requirements.txt
| |
│ └── static/uploads
│
|
├── frontend
| |
│ └ |──car-defect-frontend
|   |
|   |── src
|   |
|   ├── public
│   | 
|   └── package.json
│
|
├── screenshots
│
|
└── README.md


---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Manisha1808/car-defect-detection-ai.git
cd car-defect-detection-ai

### 2️⃣ Setup Backend

pip install -r requirements.txt
python app.py

3️⃣ Run Frontend

cd frontend/car-defect-frontend
npm install
npm start

frontend runs on : http://localhost:3000

## 📊 Example Output

The system produces:

Detected defect regions on the vehicle image

Confidence scores for each detection

An AI inspection report summarizing the results

## 👩‍💻 Author

Manisha Sen
Computer Science Engineering Student
Interested in AI, Data Science, and Computer Vision applications
