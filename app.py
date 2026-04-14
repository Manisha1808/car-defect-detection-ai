from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from ultralytics import YOLO
import os
import shutil
from werkzeug.utils import secure_filename
import torch

torch.set_num_threads(1)

app = Flask(__name__, static_folder="build", static_url_path="/")
CORS(app)

UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

model = YOLO("best.pt", task="detect")

@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["image"]
    filename = secure_filename(file.filename)

    upload_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(upload_path)

    results = model.predict(source=upload_path, save=True)

    save_dir = results[0].save_dir
    predicted_path = os.path.join(save_dir, filename)

    final_output_path = os.path.join(UPLOAD_FOLDER, "pred_" + filename)
    shutil.copy(predicted_path, final_output_path)

    return jsonify({
        "uploaded_image": "/" + upload_path,
        "predicted_image": "/" + final_output_path,
        "detections": [
            {
                "class": model.names[int(box.cls)],
                "confidence": round(float(box.conf), 2)
            }
            for box in results[0].boxes
        ],
        "total_detections": len(results[0].boxes)
    })

# Serve React Frontend
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join("build", path)):
        return send_from_directory("build", path)
    else:
        return send_from_directory("build", "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))
