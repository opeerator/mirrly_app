# 🤖 Mirrly Control App

A React Native mobile application for controlling **Mirrly**, a custom-built humanoid robot designed for child-robot interaction research. This app provides researchers and developers with a simple and intuitive interface to operate Mirrly in real-time via direct connection to the robot's onboard Raspberry Pi system.

## 📱 Features

- 🎮 **Motor Control**
  - Head pitch/yaw control
  - Eye movement
  - Hand and shoulder positioning

- 🎥 **Vision & Detection**
  - Toggle face/object detection
  - Enable left/right eye cameras
  - Close-face reaction and screenshot capture

- 🔊 **Speech & Interaction**
  - Activate speaker output (left/right)
  - Trigger name-calling responses
  - Start ChatGPT-based conversational interactions

- 🧠 **Sensor & Behavior Management**
  - Toggle webcam feed
  - Enable head-following and randomized motion
  - Manage robot behavior modes (idle, active, power-off)

## 🛠️ Architecture

The app connects to Mirrly via Wi-Fi and interacts with a custom Python backend running on a Raspberry Pi 4B. The backend leverages:

- `pigpio` for servo PWM control
- `Dynamixel SDK` for high-precision motor coordination
- `OpenCV` for facial recognition and engagement detection
- Modular architecture with a mode manager for safe state transitions

## 🧪 Use Case

Originally developed to overcome the lack of an integrated control system for Mirrly, this app has been used in **Human-Robot Interaction (HRI)** experiments involving real-time robot behavior tuning, sensor data toggling, and autonomous engagement with children.

## 🖥️ Tech Stack

- **Frontend**: React Native (JavaScript)
- **Backend**: Python (Raspberry Pi 4B)
- **Libraries**: OpenCV, pigpio, Dynamixel SDK, Flask (server-side), Expo (optional for dev)

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/opeerator/mirrly_app.git
2. Run Command: npm install
3. Run the application: npx expo start
