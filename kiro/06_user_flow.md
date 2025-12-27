# User Flow: Surya Rakshak

## Primary User Journey

### **Entry Point: System Access**
```
User visits application → 3D Login Interface → Google Authentication → Dashboard Access
```

## Detailed User Flow

### 1. **Initial Access & Authentication** 🔐
**User Goal**: Secure access to environmental monitoring system

**Steps**:
1. **Landing Page**
   - User sees "SURYA RAKSHAK - SECURE 3D COMMAND CENTER" title
   - Interactive 3D login card responds to mouse movement
   - "Access Secure Command Center" subtitle sets expectation

2. **3D Interaction**
   - Mouse movement creates engaging 3D tilt effects
   - Card rotates smoothly following cursor position
   - Visual feedback builds anticipation and engagement

3. **Google Authentication**
   - User clicks "Sign in with Google" button
   - Google OAuth popup appears for credential selection
   - User selects/enters Google account credentials
   - System verifies JWT token and creates secure session

4. **Transition Feedback**
   - "Access Granted" confirmation message
   - "Loading Modules..." progress indicator
   - Smooth animation transition to dashboard
   - Decorative elements fade out elegantly

**Success Criteria**: User successfully authenticated and transitioned to dashboard

---

### 2. **Dashboard Overview & Orientation** 📊
**User Goal**: Understand system status and available features

**Steps**:
1. **Header Recognition**
   - User sees "SURYA RAKSHAK - COMMAND CENTER" title
   - Personal info displayed (name, avatar, logout option)
   - Establishes user context and control

2. **System Status Assessment**
   - Large "SYSTEM OFFLINE" status bar immediately visible
   - User understands hardware connection is required
   - Clear next action: "CONNECT HARDWARE" button

3. **Interface Exploration**
   - User scans dashboard grid layout
   - Sees placeholder gauges for Temperature, Humidity, UV
   - Notices "SYSTEM ADVICE" section with guidance
   - Observes manual override controls (currently inactive)

**Success Criteria**: User understands current system state and required next steps

---

### 3. **Hardware Connection** 🔌
**User Goal**: Connect environmental sensors to begin monitoring

**Steps**:
1. **Connection Initiation**
   - User clicks "📡 CONNECT HARDWARE (SERIAL/BLUETOOTH)" button
   - Browser prompts for serial port selection
   - User selects appropriate Arduino/sensor device

2. **Connection Establishment**
   - System attempts to open serial connection at 9600 baud
   - Status changes to "CONNECTION SECURE - RECEIVING DATA"
   - Connect button disappears (no longer needed)
   - Status bar turns green indicating success

3. **Error Handling** (if connection fails)
   - Clear error message: "Failed to connect. Make sure you select the correct port."
   - User can retry connection process
   - Guidance provided for troubleshooting

**Success Criteria**: Hardware successfully connected and data streaming begins

---

### 4. **Real-Time Monitoring** 📈
**User Goal**: Monitor environmental conditions and receive safety guidance

**Steps**:
1. **Data Visualization**
   - Gauges animate to show current readings:
     - Temperature (°C) with red color coding
     - Humidity (%) with blue color coding  
     - UV Index with orange color coding
   - Live chart begins plotting temperature and UV trends
   - Values update every few seconds with new sensor data

2. **Status Interpretation**
   - "SYSTEM NORMAL" displayed when all readings are safe
   - Green border indicates healthy environmental conditions
   - Advice section shows: "Safe levels detected. System nominal."

3. **Trend Analysis**
   - User observes live chart showing last 10 data points
   - Can identify increasing/decreasing environmental trends
   - Time-stamped data helps understand exposure patterns

**Success Criteria**: User can clearly see current conditions and understand trends

---

### 5. **Alert Response** ⚠️
**User Goal**: Respond appropriately to dangerous environmental conditions

**Steps**:
1. **Alert Recognition**
   - Status bar turns red: "⚠️ CRITICAL STATUS ⚠️"
   - Background pulses with red alert overlay
   - Immediate visual attention drawn to danger

2. **Understanding Specific Risks**
   - Advice section updates with specific warnings:
     - "HIGH TEMP (38°C) - Check Cooling"
     - "HIGH HUMIDITY (75%) - Dehumidify"  
     - "HIGH UV (7.2) - Seek Shade"
   - Critical values highlighted in red text

3. **Taking Action**
   - User reads specific recommendations
   - Can take manual protective actions (seek shade, hydrate, etc.)
   - May use manual override controls if available
   - Monitors readings for improvement

**Success Criteria**: User recognizes danger and takes appropriate protective action

---

### 6. **Manual Device Control** 🎛️
**User Goal**: Control connected safety devices when needed

**Steps**:
1. **Control Access**
   - User sees "MANUAL OVERRIDE" section
   - Two buttons available: "LED ON" and "LED OFF"
   - Green/red color coding indicates current state

2. **Command Execution**
   - User clicks desired control button
   - System sends command ('1' or '0') via serial connection
   - Visual feedback confirms button press
   - Connected device responds (LED turns on/off)

3. **Status Verification**
   - User can visually confirm device response
   - Button states update to reflect current status
   - System maintains control capability throughout session

**Success Criteria**: User successfully controls connected safety devices

---

### 7. **Session Management** 👤
**User Goal**: Secure logout and session termination

**Steps**:
1. **Logout Initiation**
   - User clicks "Logout" button in header
   - System clears session cookie
   - Immediate redirect to login page

2. **Session Reset**
   - All dashboard data cleared
   - Hardware connection terminated
   - User returned to 3D login interface
   - Fresh authentication required for re-access

**Success Criteria**: Secure session termination and clean state reset

## Alternative User Flows

### **Browser Compatibility Issue**
```
User visits site → Unsupported browser detected → Error message displayed
→ Recommendation to use Chrome/Edge → User switches browser → Normal flow continues
```

### **Hardware Connection Failure**
```
User clicks connect → Port selection → Connection fails → Error message
→ Troubleshooting guidance → User fixes issue → Retry connection → Success
```

### **Sensor Disconnection During Use**
```
Normal monitoring → Hardware disconnected → Data stops updating
→ Status shows offline → User reconnects hardware → Monitoring resumes
```

## User Experience Principles

### **Immediate Feedback**
- Every user action receives instant visual response
- Loading states and progress indicators keep user informed
- Error messages are clear and actionable

### **Progressive Disclosure**
- Simple login interface doesn't overwhelm initially
- Dashboard complexity revealed only after authentication
- Advanced features become available as system connects

### **Safety-First Design**
- Critical alerts impossible to miss (red backgrounds, pulsing)
- Safety recommendations are specific and actionable
- Manual controls clearly labeled and color-coded

### **Intuitive Navigation**
- Linear flow from login → connection → monitoring
- No complex menus or hidden features
- Visual hierarchy guides user attention appropriately