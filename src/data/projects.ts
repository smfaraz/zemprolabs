import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'baemeds',
    title: 'BaeMeds Medical E-Commerce',
    client: 'BaeMeds (India & USA)',
    category: 'E-Commerce',
    domain: 'baemeds.in / baemeds.com',
    overview: 'Custom high-speed online store selling medical and surgical supplies across India and the United States with localized checkout and automated warehouse fulfillment.',
    challenge: 'The client needed two seamless online stores (one for India and one for the US) with separate currencies, local payment gateways, and automated inventory sync so orders never get mixed up.',
    approach: 'We built a custom high-performance Shopify storefront with smart geolocation that automatically directs Indian customers to INR with UPI and US customers to USD with Apple Pay.',
    pipeline: [
      'Product Research',
      'Storefront Design',
      'Shopify Theme',
      'Payment Setup',
      'Inventory Sync',
      'Ongoing Care'
    ],
    built: [
      'Custom High-Speed Shopify Storefront',
      'India & USA Multi-Region Routing',
      'Instant Payments (Razorpay, UPI, Stripe, Apple Pay)',
      'Automated Multi-Warehouse Inventory Sync'
    ],
    tech: ['Shopify Plus', 'Liquid', 'React', 'Node.js', 'PostgreSQL', 'Stripe & Razorpay'],
    link: 'https://www.baemeds.in/',
    color: '#FF6B00',
    video: '/videos/work/baemeds.mp4',
    metrics: [
      { label: 'Markets Served', value: 'India & USA' },
      { label: 'Platform', value: 'Shopify Plus' },
      { label: 'Storefronts', value: 'baemeds.in & .com' }
    ]
  },
  {
    id: 'erus-academy',
    title: 'Erus Academy Learning Platform & Mobile Apps',
    client: 'Erus Academy',
    category: 'EdTech',
    domain: 'erusacademy.in',
    overview: 'Complete digital learning platform featuring web student portals, native Android and iOS mobile apps, and secure adaptive video lectures.',
    challenge: 'Students needed to watch high-quality course videos smoothly on mobile and desktop without buffering, while the client required strong content protection against unauthorized downloads.',
    approach: 'We engineered a centralized backend connected to custom React Native mobile apps and a web dashboard, using adaptive video streaming that adjusts quality based on student internet speed.',
    pipeline: [
      'Student UI/UX',
      'Web Portal',
      'Android App',
      'iOS App',
      'Video Streaming',
      'Ongoing Care'
    ],
    built: [
      'Web Student & Instructor Dashboard',
      'Native Android & iOS Mobile Apps',
      'Protected Adaptive Video Streaming Player',
      'Automated Student Enrolment & Payment Checkout'
    ],
    tech: ['React', 'React Native', 'Node.js', 'AWS Video Streaming', 'PostgreSQL'],
    link: 'https://erusacademy.in',
    color: '#004AAD',
    video: '/videos/work/erus-academy.mp4',
    metrics: [
      { label: 'Platforms Built', value: 'Web, iOS & Android' },
      { label: 'Video Streaming', value: 'Adaptive Quality' },
      { label: 'Mobile Apps', value: 'Google Play & App Store' }
    ]
  },
  {
    id: 'auvia',
    title: 'Auvia Behavioral Centers',
    client: 'Auvia Clinic Network (Texas, USA)',
    category: 'Healthcare',
    domain: 'auviatherapy.com',
    overview: 'Modern clinic website and digital patient intake platform built for a premier child therapy clinic network in Texas.',
    challenge: 'Parents were overwhelmed by lengthy paper intake forms, and clinic front-desk staff were bogged down with manual data entry into clinic software.',
    approach: 'We built an easy-to-use, parent-friendly digital intake form that parents can complete on their phones, with end-to-end encryption that sends information directly into clinic records.',
    pipeline: [
      'Website Design',
      'Intake Form Flow',
      'Clinic Data Bridge',
      'Testing & Security',
      'Ongoing Support'
    ],
    built: [
      'Clean, Welcoming Clinic Website',
      'Simple Mobile Patient Intake Form',
      'Secure Clinic Records Synchronization',
      'Digital Consent & Document Signing'
    ],
    tech: ['React', 'TypeScript', 'Healthcare EHR API', 'Tailwind CSS'],
    link: 'https://auviatherapy.com',
    color: '#10B981',
    video: '/videos/work/auvia.mp4',
    metrics: [
      { label: 'Data Security', value: 'HIPAA Compliant' },
      { label: 'Intake Process', value: '100% Digital & Paperless' },
      { label: 'Location', value: 'Texas, United States' }
    ]
  },
  {
    id: 'meduscore',
    title: 'MedusCore Healthcare Recruitment',
    client: 'MedusCore UK',
    category: 'Recruitment',
    domain: 'meduscore.co.uk',
    overview: 'Medical staffing website and doctor/nurse screening portal connecting international healthcare organizations with vetted medical professionals.',
    challenge: 'Connecting international hospitals with qualified healthcare staff requires strict credential checks, license verifications, and a clear intake process for doctors and nurses.',
    approach: 'We built a high-trust digital recruitment portal where candidates can easily submit their credentials, track application status, and connect with recruitment advisors.',
    pipeline: [
      'Brand & Architecture',
      'Recruitment Portal',
      'Candidate Intake',
      'Live Launch'
    ],
    built: [
      'Specialized Medical Recruitment Website',
      'Doctor & Nurse Credential Intake Forms',
      'Hospital Inquiry & Placement Pipeline',
      'Mobile-Friendly Candidate Screening'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Cloud Infrastructure', 'REST APIs'],
    link: 'https://meduscore.co.uk/',
    color: '#0EA5E9',
    video: '/videos/work/meduscore.mp4',
    metrics: [
      { label: 'Focus', value: 'Healthcare Staffing' },
      { label: 'Headquarters', value: 'United Kingdom' },
      { label: 'Platform Status', value: 'Live in Production' }
    ]
  },
  {
    id: 'snowcms',
    title: 'snowCMS Workflow Automation Engine',
    client: 'Enterprise Client Architecture',
    category: 'ServiceNow',
    domain: 'ServiceNow Scoped App',
    overview: 'Custom ServiceNow automation utility that helps enterprise IT teams migrate content, sync development environments, and eliminate repetitive manual clicks.',
    challenge: 'Enterprise developers were spending hours manually copying configuration records and updates between testing and production instances, leading to human errors and wasted time.',
    approach: 'We developed an internal ServiceNow application that automatically bundles updates, checks for conflicting records, and deploys changes with a single click.',
    pipeline: [
      'Workflow Analysis',
      'Scoped App Architecture',
      'Automated Conflict Testing',
      'Production Deployment'
    ],
    built: [
      'Custom ServiceNow Scoped Application',
      'One-Click Instance Sync Utility',
      'Automatic Conflict & Error Detection',
      'Complete Audit Trail & Deployment History'
    ],
    tech: ['ServiceNow', 'GlideScript', 'JavaScript', 'REST APIs'],
    color: '#F59E0B',
    metrics: [
      { label: 'Environment', value: 'Native ServiceNow' },
      { label: 'Deployment', value: 'One-Click Sync' },
      { label: 'Audit Trail', value: '100% Automated' }
    ]
  },
  {
    id: 'clinic-connect',
    title: 'Clinic Connect Automated Appointments',
    client: 'Specialized Medical Clinics',
    category: 'Healthcare',
    domain: 'Internal Operational Platform',
    overview: 'Automated appointment reminder and patient dispatch system built to eliminate missed appointments for multi-location healthcare clinics.',
    challenge: 'Clinics were losing valuable practitioner hours because patients frequently forgot appointments, while clinic staff spent hours making manual reminder phone calls.',
    approach: 'We built an automated system that connects directly to clinic calendars to send friendly SMS and email reminders with one-tap confirmations and instant rescheduling links.',
    pipeline: [
      'Calendar Integration',
      'Automated SMS & Email Rules',
      'Patient Rescheduling Flow',
      'Clinic Staff Dashboard'
    ],
    built: [
      'Doctor & Clinic Scheduling Calendar',
      'Automated SMS & Email Appointment Reminders',
      'One-Tap Patient Confirmation & Rescheduling',
      'Front Desk Operational Dashboard'
    ],
    tech: ['React', 'Node.js', 'Twilio API', 'PostgreSQL'],
    color: '#06B6D4',
    metrics: [
      { label: 'Reminders', value: 'Automated SMS & Email' },
      { label: 'No-Show Reduction', value: 'Proven Drop in Missed Visits' },
      { label: 'Platform', value: 'Custom Web Portal' }
    ]
  }
];
