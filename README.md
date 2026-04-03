# SkyLoigc
Sky Logic is a dashboard integrating AI token monitoring, sustainable energy tracking, and cloud cost prediction. It helps estimate compute overhead, energy burn, and optimize cloud deployments with a sleek, interactive interface focused on eco-friendly computing.
#  Sky Logic: Sustainable Cloud & Security Interface

**Sky Logic** is an interactive, high-performance web dashboard designed to analyze computational energy consumption, predict cloud infrastructure costs, and document practical network security breaches. 

Built with a modern "glassmorphism" and cyberpunk-inspired UI, this project serves as a comprehensive visual report and interactive toolset for network administration and sustainable IT practices.

---

## Key Features

### 1. Interactive Calculators
* **AI Token & Energy Monitor:** Dynamically calculates estimated token usage and computational energy burn (in kWh) based on character input for Large Language Models (LLMs).
* **Cloud Cost Predictor:** Compares estimated compute overhead (USD) across major cloud providers (AWS, Azure, GCP) based on regional deployment and server uptime.

### 2. Network Intelligence & Data (Report Sections)
* **Cloud Architecture Analysis:** A detailed comparative breakdown of AWS, Azure, and GCP featuring a dynamically rendered bar chart (via Chart.js).
* **LAN Security Breach Case Study:** Documentation of a practical ARP spoofing attack, detailing packet interception and Wireshark payload analysis.
* **Threat Matrix:** Architectural overviews of Malware, Phishing, and DDoS mitigation strategies.
* **VoIP Telemetry:** Analysis of SIP/RTP data streams, Quality of Service (QoS), latency, and jitter using Sinch.

### 3. "Anti-Gravity" Protocol (Easter Egg)
* A hidden interactive feature demonstrating advanced CSS hardware-accelerated animations and DOM manipulation via JavaScript. 

---

## Tech Stack

This project is built using a lightweight, client-side architecture requiring no backend server:
* **HTML5:** Semantic structuring and tabbed navigation.
* **CSS3:** Custom animations, responsive flexbox/grid layouts, and glassmorphism styling.
* **JavaScript (Vanilla):** DOM manipulation, mathematical calculations, and event handling.
* **Bootstrap 5:** Component styling and responsive grid system.
* **Chart.js:** HTML5 canvas-based data visualization.
* **FontAwesome:** Scalable vector iconography.
* **Google Fonts:** Utilizing 'Outfit' and 'Space Mono'.

---

## How to Run the Project Locally

Because Sky Logic is a purely static, client-side application, installation is incredibly simple. No package managers (like npm) or local servers are required.

1. **Download the Repository:** Extract the project folder to your local machine.
2. **Ensure File Structure:** Make sure the following files are in the exact same directory:
   * `index.html`
   * `style.css`
   * `script.js`
   * `wireshark.png` *(Required for the LAN Breach tab image rendering)*
3. **Launch the Dashboard:** Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, or Safari recommended).

---

##  File Structure

```text
sky-logic/
│
├── index.html       # Main HTML structure and UI layout
├── style.css        # Custom styling, themes, and CSS animations
├── script.js        # Calculator logic, Chart.js rendering, and Easter egg
├── wireshark.png    # Packet capture evidence for the LAN Breach study
└── README.md        # Project documentation

<img width="1600" height="761" alt="image" src="https://github.com/user-attachments/assets/fc61a7f0-22a6-438b-bffb-2fc9ca508535" />
<img width="1600" height="439" alt="image" src="https://github.com/user-attachments/assets/e146e211-bdf7-411b-9366-7d4a734019ae" />
<img width="1600" height="573" alt="image" src="https://github.com/user-attachments/assets/d9f3e224-037e-4e7d-86c4-edf289211695" />
<img width="804" height="634" alt="image" src="https://github.com/user-attachments/assets/17da993a-4277-423a-a8fb-d30961272c25" />
<img width="830" height="610" alt="image" src="https://github.com/user-attachments/assets/3e37b008-27bb-46bc-9e54-ec6cc03ee51c" />
<img width="818" height="620" alt="image" src="https://github.com/user-attachments/assets/b179adf1-440d-4025-a751-17447c1bd4c3" />
