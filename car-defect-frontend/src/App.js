import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detections, setDetections] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);

    try {
     const response = await fetch("https://car-defect-detection-ai.onrender.com/predict", {
  method: "POST",
  body: formData,
});
      

      const data = await response.json();

      if (response.ok) {
        setUploadedImage(data.uploaded_image);
        setPredictedImage(data.predicted_image);
        setDetections(data.detections || []);
        setTotal(data.total_detections || 0);
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Backend not running?");
    }

    setLoading(false);
  };

  return (
    <div style={styles.wrapper}>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>🚗 Car Defect Detection AI</h1>
        <p style={styles.subtitle}>
          Upload a vehicle image and generate an AI inspection report.
        </p>
      </div>

      {/* Upload Card */}
      <div style={styles.uploadCard}>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button style={styles.button}>
            {loading ? (
              <div className="spinner-border spinner-border-sm text-light"></div>
            ) : (
              "Analyze Image"
            )}
          </button>
        </form>
      </div>

      {/* Images Section */}
      {(uploadedImage || predictedImage) && (
        <div className="container mt-5">
          <div className="row g-4">

            {uploadedImage && (
              <div className="col-md-6">
                <div style={styles.resultCard}>
                  <h5>Uploaded Image</h5>
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            )}

            {predictedImage && (
              <div className="col-md-6">
                <div style={styles.resultCard}>
                  <h5>Detection Result</h5>
                  <img
                    src={predictedImage}
                    alt="Prediction"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* AI Inspection Report */}
      {total > 0 && (
        <div className="container mt-5">
          <div className="card shadow p-4">
            <h4 className="mb-4 text-center">📋 AI Inspection Report</h4>

            <table className="table table-hover align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Defect Type</th>
                  <th>Confidence</th>
                  <th>Severity</th>
                </tr>
              </thead>

              <tbody>
                {detections.map((item, index) => {
                  let severity =
                    item.confidence > 0.85
                      ? "High"
                      : item.confidence > 0.6
                      ? "Medium"
                      : "Low";

                  let badgeColor =
                    severity === "High"
                      ? "danger"
                      : severity === "Medium"
                      ? "warning"
                      : "secondary";

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.class}</td>
                      <td>{item.confidence}</td>
                      <td>
                        <span className={`badge bg-${badgeColor}`}>
                          {severity}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="text-end mt-3">
              <strong>Total Defects Detected: {total}</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
    paddingBottom: "80px",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px 30px 20px",
    color: "white",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  subtitle: {
    opacity: 0.85,
  },
  uploadCard: {
    maxWidth: "500px",
    margin: "auto",
    padding: "30px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "30px",
    border: "none",
    background: "#000",
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
  },
  resultCard: {
    padding: "20px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default App;
