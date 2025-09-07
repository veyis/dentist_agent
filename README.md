# Smile Dentist Clinic - AI Voice Assistant Demo

This is an advanced AI-powered voice assistant system for Smile Dentist Clinic, demonstrating how dental practices can use voice AI to handle patient calls, schedule appointments, manage emergencies, and provide information about dental services. Built using the OpenAI Realtime API and OpenAI Agents SDK.

## About Smile Dentist Clinic

Smile Dentist Clinic is a premier dental care provider with multiple locations across the United States. We offer comprehensive dental services including:
- General Dentistry (cleanings, exams, fillings)
- Cosmetic Dentistry (veneers, whitening, smile makeovers)
- Orthodontics (Invisalign, traditional braces)
- Oral Surgery (extractions, implants, wisdom teeth)
- Emergency Dental Care
- Pediatric Dentistry

## AI Assistant Features

This voice assistant system demonstrates advanced patterns for dental practice automation:

### 1. **Intelligent Receptionist System**
- Warm, professional greeting for all patients
- Natural conversation flow with empathy for dental anxiety
- Smart routing to appropriate specialists
- 24/7 availability for patient inquiries

### 2. **Service Capabilities**

#### Appointment Management
- Schedule new appointments
- Reschedule or cancel existing appointments
- Provide available time slots
- Send appointment reminders

#### Emergency Triage
- Assess dental emergencies
- Provide immediate pain management advice
- Offer same-day emergency appointments
- Direct severe cases to appropriate care

#### Patient Services
- Verify insurance coverage
- Explain treatment procedures and pricing
- Process membership enrollment (Smile Care Plus)
- Provide clinic location and hours

### 3. **Pricing Transparency**

The system provides clear pricing information for all procedures:

**Preventive Care:**
- Routine Cleaning: $125
- Comprehensive Exam: $95
- X-rays (full set): $150

**Restorative:**
- Fillings: $195-$325
- Crowns: $1,200-$1,400
- Root Canals: $950-$1,400

**Cosmetic:**
- Teeth Whitening: $300-$550
- Veneers: $1,500/tooth
- Invisalign: $5,500

**Emergency:**
- Emergency Exam: $150 (credited toward treatment)

## Technical Implementation

### Pattern 1: Chat-Supervisor Architecture
A dental receptionist AI handles routine inquiries while escalating complex cases to an experienced office manager AI with access to:
- Patient records and treatment history
- Real-time appointment availability
- Insurance verification systems
- Detailed pricing databases

### Pattern 2: Specialist Handoff System
Specialized agents handle specific aspects of dental care:
- **Reception Agent**: Initial greeting and routing
- **Appointment Agent**: Scheduling and calendar management
- **Emergency Agent**: Urgent care triage and guidance
- **Billing Agent**: Insurance and payment questions
- **Treatment Consultant**: Procedure explanations

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
# Add your OpenAI API key to .env
OPENAI_API_KEY=your-api-key-here
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

## Clinic Locations

### California
- **San Francisco**: 450 Sutter St, Suite 2100, CA 94108
- **San Diego**: 555 5th Ave, Suite 300, CA 92101
- **Beverly Hills**: 9400 Brighton Way, Suite 410, CA 90210

### New York
- **Manhattan**: 350 5th Ave, Floor 68, NY 10118

### Hours
- Monday-Friday: 8:00 AM - 6:00 PM
- Saturday: 9:00 AM - 2:00 PM
- Sunday: Emergency Hours 10:00 AM - 2:00 PM
- Emergency Hotline: 1-800-SMILE-911 (24/7)

## Smile Care Plus Membership

Our exclusive membership program offers:
- Two free cleanings per year
- 20% off all treatments
- Free emergency exams
- Priority scheduling with no wait times
- Complimentary annual teeth whitening
- Zero-interest payment plans (24 months for treatments over $1,000)
- Family discounts available

**Pricing:**
- Individual: $299/year
- Family: $499/year

## Insurance

We accept most major dental insurance providers including:
- Delta Dental
- Cigna
- MetLife
- Aetna
- United Healthcare

Typical coverage:
- Preventive Care: 100% covered
- Basic Procedures: 80% covered
- Major Procedures: 50% covered

## Agent Configuration

The AI agents are configured with specific dental expertise:

### Reception Agent (`dentalReceptionist`)
- Warm, empathetic greeting
- Patient verification
- Intelligent routing to specialists

### Appointment Scheduler (`appointmentScheduler`)
- Real-time availability checking
- Multiple appointment types
- Automated reminders

### Emergency Coordinator (`emergencyDental`)
- Pain assessment
- Triage protocols
- Same-day appointment offers

### Office Manager (`supervisorAgent`)
- Complex case handling
- Insurance verification
- Treatment plan explanations

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customizing for Your Practice

1. Update clinic information in `src/app/agentConfigs/chatSupervisor/sampleData.ts`
2. Modify agent personalities in respective configuration files
3. Adjust pricing and services as needed
4. Customize the membership program details

## Privacy & Security

- All patient information is handled securely
- HIPAA-compliant data handling
- No medical advice provided - only licensed dentists diagnose
- Patient verification required for sensitive information

## Support

For technical support or questions about implementing this system in your dental practice:
- Emergency Dental Line: 1-800-SMILE-911
- Technical Support: support@smiledentistclinic.com
- Schedule a Demo: demo@smiledentistclinic.com

## License

This demonstration is provided by Smile Dentist Clinic to showcase AI capabilities in dental practice management. For licensing and implementation inquiries, please contact our technical team.

---

*Smile Dentist Clinic - Your Partner in Oral Health*

*"Creating Confident Smiles Since 2024"*