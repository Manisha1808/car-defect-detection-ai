from ultralytics import YOLO
import cv2

model = YOLO("trained.pt")
results = model("test.jpg")

result = results[0]
boxes = result.boxes
img = result.orig_img

for box in boxes:
    x1, y1, x2, y2 = map(int, box.xyxy[0])
    conf = float(box.conf[0])

    label = f"defect {conf:.2f}"

    cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 0), 2)
    cv2.putText(img, label, (x1, y1 - 10),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6,
                (255, 0, 0), 2)

cv2.imshow("Result", img)
cv2.waitKey(0)
cv2.destroyAllWindows()
