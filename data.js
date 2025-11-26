// Shared mock data and logic for Digital Protocol Solution
// Available globally for both Sponsor and Site views

const ProtocolData = {
    // Protocols array
    protocols: [
        {
            id: "PROT-001",
            title: "Cardiovascular Prevention Study",
            phase: "Phase 3",
            status: "Draft",
            therapeuticArea: "Cardiovascular",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Cardiac MRI capability",
                "Specialized lab equipment",
                "24-hour sample processing",
                "Cardiologist on staff",
                "ECG monitoring equipment",
                "Biomarker testing",
                "Temperature-controlled storage",
                "Multi-timepoint procedures",
                "Fasting protocol support",
                "Caregiver coordination"
            ]
        },
        {
            id: "PROT-002",
            title: "Oncology Immunotherapy Trial",
            phase: "Phase 2",
            status: "Draft",
            therapeuticArea: "Oncology",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Certified infusion center",
                "24-hour AE monitoring",
                "Specialized infusion equipment",
                "Oncologist on staff",
                "Real-time reporting system",
                "Central lab coordination",
                "Temperature-controlled transport",
                "Caregiver support services",
                "Weekly blood draw capability",
                "Immune system monitoring"
            ]
        },
        {
            id: "PROT-003",
            title: "Diabetes Management Study",
            phase: "Phase 3",
            status: "Published",
            therapeuticArea: "Metabolic",
            sponsorId: "SPONSOR-001",
            isPublic: true,
            requirements: [
                "Blood glucose testing",
                "HbA1c testing",
                "Remote monitoring devices",
                "Standard lab equipment",
                "Diabetes specialist",
                "Connected device support",
                "Flexible scheduling",
                "Home monitoring capability"
            ]
        },
        {
            id: "PROT-004",
            title: "Neurological Disorder Trial",
            phase: "Phase 2",
            status: "Draft",
            therapeuticArea: "Neurology",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Neurologist on staff",
                "MRI capability",
                "PET scan access",
                "Cognitive assessment tools",
                "Quiet testing environment",
                "Medication compliance tracking",
                "Extended visit capability",
                "Caregiver participation support"
            ]
        },
        {
            id: "PROT-005",
            title: "Respiratory Disease Study",
            phase: "Phase 3",
            status: "Draft",
            therapeuticArea: "Respiratory",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Pulmonary function testing",
                "Spirometry equipment",
                "Respiratory therapist",
                "Peak flow monitoring",
                "Connected devices",
                "Standard lab processing",
                "Questionnaire administration"
            ]
        },
        {
            id: "PROT-006",
            title: "Hematology Rare Disease Study",
            phase: "Phase 2",
            status: "Published",
            therapeuticArea: "Hematology",
            sponsorId: "SPONSOR-001",
            isPublic: true,
            requirements: [
                "Hematologist on staff",
                "Specialized coagulation testing",
                "Platelet function testing",
                "Bleeding assessment tools",
                "Emergency response capability",
                "24-hour monitoring access",
                "Specialized infusion equipment",
                "Blood product storage"
            ]
        },
        {
            id: "PROT-007",
            title: "Dermatology Psoriasis Treatment",
            phase: "Phase 3",
            status: "Draft",
            therapeuticArea: "Dermatology",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Dermatologist on staff",
                "Photography equipment",
                "PASI scoring capability",
                "Skin biopsy capability",
                "Standard lab equipment",
                "Topical application support",
                "Patient-reported outcome tools"
            ]
        },
        {
            id: "PROT-008",
            title: "Rheumatology Arthritis Study",
            phase: "Phase 3",
            status: "Published",
            therapeuticArea: "Rheumatology",
            sponsorId: "SPONSOR-001",
            isPublic: true,
            requirements: [
                "Rheumatologist on staff",
                "Joint assessment tools",
                "X-ray capability",
                "Ultrasound equipment",
                "Standard lab equipment",
                "Patient mobility assessment",
                "Pain assessment tools"
            ]
        },
        {
            id: "PROT-009",
            title: "Gastroenterology IBD Trial",
            phase: "Phase 2",
            status: "Draft",
            therapeuticArea: "Gastroenterology",
            sponsorId: "SPONSOR-001",
            isPublic: false,
            requirements: [
                "Gastroenterologist on staff",
                "Endoscopy capability",
                "Colonoscopy equipment",
                "Biopsy processing",
                "Standard lab equipment",
                "Patient symptom tracking",
                "Dietary assessment tools"
            ]
        },
        {
            id: "PROT-010",
            title: "Endocrinology Thyroid Study",
            phase: "Phase 3",
            status: "Published",
            therapeuticArea: "Endocrinology",
            sponsorId: "SPONSOR-001",
            isPublic: true,
            requirements: [
                "Endocrinologist on staff",
                "Thyroid function testing",
                "Hormone level monitoring",
                "Standard lab equipment",
                "Ultrasound capability",
                "Nuclear medicine access",
                "Patient symptom diaries"
            ]
        }
    ],

    // Detailed protocol analytics
    protocolAnalytics: {
        "PROT-001": {
            arms: 4,
            armsMedian: 1,
            armsTrend: 15,
            visits: 82,
            visitsMedian: 22,
            visitsTrend: -20,
            activities: 60,
            activitiesMedian: 26,
            activitiesTrend: 15,
            visitActivities: 4920,
            visitActivitiesMedian: 572,
            visitActivitiesTrend: 12,
            complexityDrivers: [
                {
                    name: "Restrictive visit windows",
                    description: "25% of visit windows are +/- 1 day. This lack of flexibility, especially for non-critical visits, is a primary driver of site & patient burden and protocol deviations."
                },
                {
                    name: "Adaptive dose-finding design",
                    description: "The 3-stage adaptive design (Bayesian Optimal Interval) is powerful but requires an unblinded statistical team and real-time data monitoring, adding significant operational overhead compared to a standard 3+3 design."
                },
                {
                    name: "Intensive PK/PD sampling",
                    description: "The protocol requires 8 blood draws within the first 24 hours post-infusion. This creates a high logistical burden on site staff and is a significant deterrent for patient participation."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Bone marrow aspirate",
                    description: "Required at screening and month 6. This is a painful procedure with a moderate risk of bleeding, which is a primary concern in this patient population."
                },
                {
                    name: "High visit frequency",
                    description: "15 clinic visits are scheduled in the first 6 months. 10 of these are \"infusion-only\" visits that could potentially be handled by home health services to reduce patient travel."
                },
                {
                    name: "Strict bleeding precautions",
                    description: "Patients must avoid a long list of common activities (eg. contact sports, dental cleaning, using NSAIDs) for the entire 2-year study duration, significantly impacting their quality of life."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Exclusion criterion #5 (Platelet count)",
                    description: "Excluding patients with a platelet count > 10,000/µL is stricter than the standard of care and may unnecessarily limit the eligible population. This creates a high risk of a future amendment to broaden criteria if enrollment is slow."
                },
                {
                    name: "Undefined rescue therapy",
                    description: "The protocol does not specify a standardized rescue therapy for patients who experience a major bleeding event. This ambiguity will likely require a clarifying amendment once the first few events occur."
                },
                {
                    name: "Vague 'clinical report' activities",
                    description: "5 activities require a 'clinical report' but lack specific documentation on what data to collect. This vagueness often leads to inconsistent data and requires an amendment for clarification."
                }
            ],
            recommendedActions: [
                {
                    title: "Expand restrictive visit windows",
                    description: "High visit frequency and intense PK/PD sampling are key drivers of complexity. We recommend reviewing these high-frequency and PK-related visits to expand any windows that are tighter than needed, which will help reduce protocol deviations and ease the scheduling burden on sites."
                },
                {
                    title: "Re-assess strict eligibility criteria",
                    description: "Exclusion criterion #5 (Platelet count) is a top driver of the high Amendment-Risk Score. We recommend validating that this criterion is not overly restrictive, as unfeasible I/E criteria can lead to poor recruitment."
                },
                {
                    title: "Define standardized rescue therapy",
                    description: "The lack of a defined rescue therapy protocol creates ambiguity that will likely require an amendment. We recommend specifying a standardized approach upfront to avoid mid-study protocol changes."
                },
                {
                    title: "Clarify clinical report requirements",
                    description: "Multiple activities require 'clinical reports' without clear documentation standards. We recommend specifying the exact data elements and format required for these reports to ensure consistency across sites."
                },
                {
                    title: "Consider home health for infusion visits",
                    description: "10 of the 15 visits in the first 6 months are infusion-only. We recommend evaluating whether these could be handled by home health services to reduce patient travel burden and improve retention."
                },
                {
                    title: "Review bleeding precaution requirements",
                    description: "The extensive list of prohibited activities for the full 2-year duration significantly impacts quality of life. We recommend reviewing whether all restrictions are necessary for the entire study duration."
                }
            ],
            complexityTrend: -8,
            patientBurdenTrend: -12,
            amendmentRiskTrend: 8,
            amendmentRiskCount: 4
        },
        "PROT-002": {
            arms: 3,
            armsMedian: 2,
            armsTrend: 10,
            visits: 45,
            visitsMedian: 28,
            visitsTrend: 5,
            activities: 38,
            activitiesMedian: 24,
            activitiesTrend: 12,
            visitActivities: 1710,
            visitActivitiesMedian: 1064,
            visitActivitiesTrend: 8,
            complexityDrivers: [
                {
                    name: "Tight visit windows",
                    description: "Critical dosing visits require +/- 2 hour windows with deviation tracking, creating significant scheduling challenges."
                },
                {
                    name: "Specialized infusion center",
                    description: "Requires certified infusion center with specific equipment and trained staff, limiting site selection."
                },
                {
                    name: "Complex adverse event monitoring",
                    description: "Real-time AE monitoring with 24-hour reporting requirements adds operational complexity."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Long infusion duration",
                    description: "Visit 3 requires a 6-hour infusion with mandatory monitoring period, exceeding 3-hour threshold."
                },
                {
                    name: "Travel requirements",
                    description: "Specialized site requires airplane travel (76% burdensome), flagged as high burden."
                },
                {
                    name: "Frequent blood draws",
                    description: "Weekly blood draws for first 8 weeks, invasive and time-consuming."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Immune system restrictions",
                    description: "Strict limitations on activities and social interactions may need clarification based on real-world experience."
                },
                {
                    name: "Dosing schedule ambiguity",
                    description: "The protocol lacks clear guidance on dose adjustments for patients with specific comorbidities."
                }
            ],
            recommendedActions: [
                {
                    title: "Review infusion duration requirements",
                    description: "The 6-hour infusion duration significantly impacts patient burden. Consider whether the full monitoring period is necessary."
                },
                {
                    title: "Clarify dosing adjustments",
                    description: "Add clear guidance on dose adjustments for patients with comorbidities to avoid mid-study amendments."
                }
            ],
            complexityTrend: -5,
            patientBurdenTrend: -8,
            amendmentRiskTrend: 5,
            amendmentRiskCount: 3
        },
        "PROT-003": {
            arms: 2,
            armsMedian: 2,
            armsTrend: 0,
            visits: 12,
            visitsMedian: 18,
            visitsTrend: -10,
            activities: 20,
            activitiesMedian: 22,
            activitiesTrend: -5,
            visitActivities: 240,
            visitActivitiesMedian: 396,
            visitActivitiesTrend: -8,
            complexityDrivers: [
                {
                    name: "Standard lab procedures",
                    description: "Routine blood glucose and HbA1c testing with standard equipment."
                },
                {
                    name: "Flexible visit scheduling",
                    description: "Visits have +/- 7 day windows allowing for patient convenience."
                },
                {
                    name: "Remote monitoring integration",
                    description: "Integration with connected devices requires data validation and quality checks."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Home monitoring capability",
                    description: "Daily monitoring can be done at home with connected devices, reducing burden."
                },
                {
                    name: "Minimal visit requirements",
                    description: "Reduced visit frequency compared to standard diabetes studies improves convenience."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Device compatibility",
                    description: "Protocol may need updates if new connected devices become available or compatibility issues arise."
                }
            ],
            recommendedActions: [
                {
                    title: "Document device compatibility",
                    description: "Maintain clear documentation of supported devices to avoid future compatibility issues."
                }
            ],
            complexityTrend: -3,
            patientBurdenTrend: -5,
            amendmentRiskTrend: 0,
            amendmentRiskCount: 1
        },
        "PROT-004": {
            arms: 2,
            armsMedian: 2,
            armsTrend: 0,
            visits: 24,
            visitsMedian: 20,
            visitsTrend: 8,
            activities: 32,
            activitiesMedian: 28,
            activitiesTrend: 10,
            visitActivities: 768,
            visitActivitiesMedian: 560,
            visitActivitiesTrend: 15,
            complexityDrivers: [
                {
                    name: "Specialized neurological assessments",
                    description: "Requires trained neurologists and specialized assessment tools."
                },
                {
                    name: "Complex imaging requirements",
                    description: "MRI and PET scans require coordination with imaging centers."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Extended cognitive testing",
                    description: "Visit 4 requires 5-hour duration with extended cognitive testing and imaging procedures."
                },
                {
                    name: "Caregiver participation required",
                    description: "Caregiver must accompany patient and provide daily symptom reports."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Medication compliance tracking",
                    description: "Complex medication regimens may need clarification on compliance verification methods."
                }
            ],
            recommendedActions: [
                {
                    title: "Optimize cognitive testing schedule",
                    description: "Consider breaking up the 5-hour visit into multiple shorter sessions to reduce patient fatigue."
                }
            ],
            complexityTrend: -6,
            patientBurdenTrend: -10,
            amendmentRiskTrend: 3,
            amendmentRiskCount: 2
        },
        "PROT-005": {
            arms: 3,
            armsMedian: 2,
            armsTrend: 8,
            visits: 18,
            visitsMedian: 16,
            visitsTrend: 3,
            activities: 28,
            activitiesMedian: 24,
            activitiesTrend: 8,
            visitActivities: 504,
            visitActivitiesMedian: 384,
            visitActivitiesTrend: 10,
            complexityDrivers: [
                {
                    name: "Pulmonary function testing",
                    description: "Requires specialized PFT equipment and trained respiratory therapists."
                },
                {
                    name: "Spirometry standardization",
                    description: "Requires standardized spirometry protocols and quality control measures."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Breathing test preparation",
                    description: "Requires specific preparation and may cause anxiety for some patients."
                },
                {
                    name: "Regular monitoring visits",
                    description: "Monthly visits for spirometry and symptom assessment."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Spirometry quality criteria",
                    description: "Protocol may need clarification on acceptable spirometry quality criteria."
                }
            ],
            recommendedActions: [
                {
                    title: "Define spirometry quality standards",
                    description: "Specify acceptable quality criteria for spirometry tests to ensure data consistency."
                }
            ],
            complexityTrend: -4,
            patientBurdenTrend: -6,
            amendmentRiskTrend: 2,
            amendmentRiskCount: 1
        },
        "PROT-006": {
            arms: 2,
            armsMedian: 2,
            armsTrend: 0,
            visits: 36,
            visitsMedian: 24,
            visitsTrend: 12,
            activities: 45,
            activitiesMedian: 30,
            activitiesTrend: 18,
            visitActivities: 1620,
            visitActivitiesMedian: 720,
            visitActivitiesTrend: 20,
            complexityDrivers: [
                {
                    name: "Specialized coagulation testing",
                    description: "Requires specialized equipment and trained laboratory staff for accurate coagulation parameter measurement."
                },
                {
                    name: "Emergency response protocols",
                    description: "Protocol requires 24-hour emergency response capability for bleeding events, adding operational complexity."
                },
                {
                    name: "Blood product coordination",
                    description: "Requires coordination with blood bank and specialized storage facilities for blood products."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Frequent monitoring visits",
                    description: "Weekly visits required for first 12 weeks to monitor bleeding risk and adjust dosing."
                },
                {
                    name: "Restrictive activity limitations",
                    description: "Patients must avoid activities that could cause trauma or bleeding, significantly limiting daily activities."
                },
                {
                    name: "Emergency contact requirements",
                    description: "Patients must have 24-hour emergency contact availability, adding psychological burden."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Dosing adjustment criteria",
                    description: "Protocol lacks clear criteria for dose adjustments based on bleeding events, likely requiring clarification."
                },
                {
                    name: "Concomitant medication guidance",
                    description: "Limited guidance on managing common medications that affect bleeding risk may require amendment."
                }
            ],
            recommendedActions: [
                {
                    title: "Clarify dosing adjustment protocols",
                    description: "Add specific criteria for dose adjustments to prevent mid-study protocol changes."
                },
                {
                    title: "Expand activity restriction guidance",
                    description: "Provide clearer guidance on which activities are restricted and for how long to reduce patient confusion."
                }
            ],
            complexityTrend: -7,
            patientBurdenTrend: -9,
            amendmentRiskTrend: 4,
            amendmentRiskCount: 2
        },
        "PROT-007": {
            arms: 3,
            armsMedian: 2,
            armsTrend: 8,
            visits: 16,
            visitsMedian: 14,
            visitsTrend: 5,
            activities: 24,
            activitiesMedian: 20,
            activitiesTrend: 8,
            visitActivities: 384,
            visitActivitiesMedian: 280,
            visitActivitiesTrend: 12,
            complexityDrivers: [
                {
                    name: "Photography standardization",
                    description: "Requires standardized photography equipment and lighting for consistent lesion documentation."
                },
                {
                    name: "PASI scoring training",
                    description: "Site staff must be trained and certified in PASI scoring methodology for consistency."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Skin photography requirements",
                    description: "Full body photography required at each visit, which can be uncomfortable for some patients."
                },
                {
                    name: "Topical application compliance",
                    description: "Daily topical applications require consistent patient compliance and documentation."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Photography quality standards",
                    description: "Protocol lacks specific quality standards for photography, which may lead to data quality issues."
                }
            ],
            recommendedActions: [
                {
                    title: "Define photography quality standards",
                    description: "Specify exact requirements for photography quality and consistency to avoid data issues."
                }
            ],
            complexityTrend: -3,
            patientBurdenTrend: -4,
            amendmentRiskTrend: 1,
            amendmentRiskCount: 1
        },
        "PROT-008": {
            arms: 2,
            armsMedian: 2,
            armsTrend: 0,
            visits: 20,
            visitsMedian: 18,
            visitsTrend: 3,
            activities: 30,
            activitiesMedian: 26,
            activitiesTrend: 6,
            visitActivities: 600,
            visitActivitiesMedian: 468,
            visitActivitiesTrend: 8,
            complexityDrivers: [
                {
                    name: "Joint assessment standardization",
                    description: "Requires standardized joint assessment protocols and trained assessors for consistency."
                },
                {
                    name: "Imaging coordination",
                    description: "X-ray and ultrasound imaging require coordination with radiology departments."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Joint mobility assessments",
                    description: "Physical joint assessments can be uncomfortable, especially during active disease flares."
                },
                {
                    name: "Regular imaging visits",
                    description: "Quarterly imaging visits add to overall visit burden and time commitment."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Pain assessment methodology",
                    description: "Multiple pain assessment tools used without clear guidance on which takes precedence."
                }
            ],
            recommendedActions: [
                {
                    title: "Standardize pain assessment",
                    description: "Clarify which pain assessment tool is primary to avoid data inconsistencies."
                }
            ],
            complexityTrend: -5,
            patientBurdenTrend: -7,
            amendmentRiskTrend: 2,
            amendmentRiskCount: 1
        },
        "PROT-009": {
            arms: 3,
            armsMedian: 2,
            armsTrend: 10,
            visits: 28,
            visitsMedian: 22,
            visitsTrend: 8,
            activities: 42,
            activitiesMedian: 32,
            activitiesTrend: 15,
            visitActivities: 1176,
            visitActivitiesMedian: 704,
            visitActivitiesTrend: 18,
            complexityDrivers: [
                {
                    name: "Endoscopy scheduling",
                    description: "Requires coordination with endoscopy suite and specialized equipment availability."
                },
                {
                    name: "Biopsy processing",
                    description: "Biopsy samples require immediate processing and specialized pathology review."
                },
                {
                    name: "Dietary tracking",
                    description: "Complex dietary assessment and tracking requirements add operational overhead."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Colonoscopy preparation",
                    description: "Multiple colonoscopies require extensive bowel preparation, which is highly burdensome."
                },
                {
                    name: "Dietary restrictions",
                    description: "Strict dietary restrictions and tracking requirements impact daily life significantly."
                },
                {
                    name: "Frequent symptom monitoring",
                    description: "Daily symptom diaries and frequent clinic visits for active disease monitoring."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Endoscopy timing criteria",
                    description: "Unclear criteria for when endoscopies should be performed may require clarification."
                },
                {
                    name: "Dietary intervention guidance",
                    description: "Limited guidance on managing dietary interventions may need protocol amendment."
                }
            ],
            recommendedActions: [
                {
                    title: "Clarify endoscopy timing",
                    description: "Define specific criteria for endoscopy scheduling to avoid protocol deviations."
                },
                {
                    title: "Simplify dietary tracking",
                    description: "Consider reducing dietary tracking requirements or providing clearer guidance to reduce burden."
                }
            ],
            complexityTrend: -6,
            patientBurdenTrend: -11,
            amendmentRiskTrend: 5,
            amendmentRiskCount: 2
        },
        "PROT-010": {
            arms: 2,
            armsMedian: 2,
            armsTrend: 0,
            visits: 14,
            visitsMedian: 16,
            visitsTrend: -5,
            activities: 22,
            activitiesMedian: 24,
            activitiesTrend: -3,
            visitActivities: 308,
            visitActivitiesMedian: 384,
            visitActivitiesTrend: -8,
            complexityDrivers: [
                {
                    name: "Hormone level monitoring",
                    description: "Requires precise timing of blood draws relative to medication administration."
                },
                {
                    name: "Nuclear medicine coordination",
                    description: "Requires coordination with nuclear medicine department for specialized imaging."
                }
            ],
            patientBurdenDrivers: [
                {
                    name: "Fasting requirements",
                    description: "Multiple visits require fasting for accurate hormone level measurement."
                },
                {
                    name: "Medication timing restrictions",
                    description: "Strict medication timing requirements impact daily routine and flexibility."
                }
            ],
            amendmentRiskDrivers: [
                {
                    name: "Hormone level thresholds",
                    description: "Protocol lacks clear thresholds for dose adjustments based on hormone levels."
                }
            ],
            recommendedActions: [
                {
                    title: "Define hormone level thresholds",
                    description: "Specify exact hormone level thresholds for dose adjustments to prevent ambiguity."
                }
            ],
            complexityTrend: -2,
            patientBurdenTrend: -3,
            amendmentRiskTrend: 1,
            amendmentRiskCount: 1
        }
    },

    // Versions linked to protocols
    versions: [
        {
            id: "VER-001",
            protocolId: "PROT-001",
            versionNumber: "1.0",
            uploadDate: "2024-01-15",
            complexityScore: 82,
            patientBurdenScore: 65,
            amendmentRisk: "High",
            status: "Published"
        },
        {
            id: "VER-002",
            protocolId: "PROT-001",
            versionNumber: "1.1",
            uploadDate: "2024-02-20",
            complexityScore: 78,
            patientBurdenScore: 62,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-003",
            protocolId: "PROT-002",
            versionNumber: "1.0",
            uploadDate: "2024-01-10",
            complexityScore: 95,
            patientBurdenScore: 78,
            amendmentRisk: "Very High",
            status: "Published"
        },
        {
            id: "VER-003A",
            protocolId: "PROT-002",
            versionNumber: "1.1",
            uploadDate: "2024-02-15",
            complexityScore: 88,
            patientBurdenScore: 72,
            amendmentRisk: "High",
            status: "Published"
        },
        {
            id: "VER-003B",
            protocolId: "PROT-002",
            versionNumber: "2.0",
            uploadDate: "2024-03-22",
            complexityScore: 85,
            patientBurdenScore: 70,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-004",
            protocolId: "PROT-003",
            versionNumber: "1.0",
            uploadDate: "2024-03-01",
            complexityScore: 58,
            patientBurdenScore: 42,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-005",
            protocolId: "PROT-004",
            versionNumber: "1.0",
            uploadDate: "2024-02-15",
            complexityScore: 75,
            patientBurdenScore: 70,
            amendmentRisk: "High",
            status: "Published"
        },
        {
            id: "VER-005A",
            protocolId: "PROT-004",
            versionNumber: "1.1",
            uploadDate: "2024-03-10",
            complexityScore: 72,
            patientBurdenScore: 68,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-006",
            protocolId: "PROT-005",
            versionNumber: "1.0",
            uploadDate: "2024-03-10",
            complexityScore: 68,
            patientBurdenScore: 55,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-006A",
            protocolId: "PROT-005",
            versionNumber: "1.1",
            uploadDate: "2024-04-05",
            complexityScore: 65,
            patientBurdenScore: 52,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-006B",
            protocolId: "PROT-005",
            versionNumber: "1.2",
            uploadDate: "2024-04-20",
            complexityScore: 63,
            patientBurdenScore: 50,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-007",
            protocolId: "PROT-006",
            versionNumber: "1.0",
            uploadDate: "2024-02-28",
            complexityScore: 88,
            patientBurdenScore: 72,
            amendmentRisk: "High",
            status: "Published"
        },
        {
            id: "VER-007A",
            protocolId: "PROT-006",
            versionNumber: "1.1",
            uploadDate: "2024-03-25",
            complexityScore: 85,
            patientBurdenScore: 70,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-008",
            protocolId: "PROT-007",
            versionNumber: "1.0",
            uploadDate: "2024-03-15",
            complexityScore: 52,
            patientBurdenScore: 38,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-009",
            protocolId: "PROT-008",
            versionNumber: "1.0",
            uploadDate: "2024-01-20",
            complexityScore: 64,
            patientBurdenScore: 48,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-009A",
            protocolId: "PROT-008",
            versionNumber: "1.1",
            uploadDate: "2024-02-18",
            complexityScore: 62,
            patientBurdenScore: 46,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-009B",
            protocolId: "PROT-008",
            versionNumber: "2.0",
            uploadDate: "2024-03-30",
            complexityScore: 60,
            patientBurdenScore: 45,
            amendmentRisk: "Low",
            status: "Published"
        },
        {
            id: "VER-010",
            protocolId: "PROT-009",
            versionNumber: "1.0",
            uploadDate: "2024-03-05",
            complexityScore: 79,
            patientBurdenScore: 68,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-010A",
            protocolId: "PROT-009",
            versionNumber: "1.1",
            uploadDate: "2024-03-28",
            complexityScore: 76,
            patientBurdenScore: 65,
            amendmentRisk: "Medium",
            status: "Published"
        },
        {
            id: "VER-011",
            protocolId: "PROT-010",
            versionNumber: "1.0",
            uploadDate: "2024-02-10",
            complexityScore: 56,
            patientBurdenScore: 41,
            amendmentRisk: "Low",
            status: "Published"
        }
    ],

    // Sites array
    sites: [
        {
            id: "SITE-001",
            name: "Metro Medical Center",
            location: "New York, NY",
            capabilities: [
                "Cardiac MRI capability",
                "Specialized lab equipment",
                "24-hour sample processing",
                "Cardiologist on staff",
                "ECG monitoring equipment",
                "Biomarker testing",
                "Temperature-controlled storage",
                "Multi-timepoint procedures",
                "Fasting protocol support",
                "Caregiver coordination",
                "Certified infusion center",
                "Oncologist on staff",
                "Neurologist on staff",
                "MRI capability",
                "PET scan access"
            ],
            pastPerformance: {
                enrollmentRate: 95,
                retentionRate: 88,
                protocolCompliance: 92,
                averageTimeToFirstPatient: 45
            },
            specialties: ["Cardiovascular", "Oncology", "Neurology"]
        },
        {
            id: "SITE-002",
            name: "Coastal Research Institute",
            location: "San Diego, CA",
            capabilities: [
                "Certified infusion center",
                "24-hour AE monitoring",
                "Specialized infusion equipment",
                "Oncologist on staff",
                "Real-time reporting system",
                "Central lab coordination",
                "Temperature-controlled transport",
                "Caregiver support services",
                "Weekly blood draw capability",
                "Immune system monitoring",
                "Blood glucose testing",
                "HbA1c testing",
                "Remote monitoring devices"
            ],
            pastPerformance: {
                enrollmentRate: 87,
                retentionRate: 85,
                protocolCompliance: 89,
                averageTimeToFirstPatient: 52
            },
            specialties: ["Oncology", "Metabolic"]
        },
        {
            id: "SITE-003",
            name: "Regional Clinical Research",
            location: "Chicago, IL",
            capabilities: [
                "Blood glucose testing",
                "HbA1c testing",
                "Remote monitoring devices",
                "Standard lab equipment",
                "Diabetes specialist",
                "Connected device support",
                "Flexible scheduling",
                "Home monitoring capability",
                "Pulmonary function testing",
                "Spirometry equipment",
                "Respiratory therapist"
            ],
            pastPerformance: {
                enrollmentRate: 82,
                retentionRate: 80,
                protocolCompliance: 85,
                averageTimeToFirstPatient: 60
            },
            specialties: ["Metabolic", "Respiratory"]
        },
        {
            id: "SITE-004",
            name: "University Medical Center",
            location: "Boston, MA",
            capabilities: [
                "Neurologist on staff",
                "MRI capability",
                "PET scan access",
                "Cognitive assessment tools",
                "Quiet testing environment",
                "Medication compliance tracking",
                "Extended visit capability",
                "Caregiver participation support",
                "Cardiac MRI capability",
                "Specialized lab equipment"
            ],
            pastPerformance: {
                enrollmentRate: 90,
                retentionRate: 86,
                protocolCompliance: 91,
                averageTimeToFirstPatient: 48
            },
            specialties: ["Neurology", "Cardiovascular"]
        },
        {
            id: "SITE-005",
            name: "Community Health Research",
            location: "Atlanta, GA",
            capabilities: [
                "Pulmonary function testing",
                "Spirometry equipment",
                "Respiratory therapist",
                "Peak flow monitoring",
                "Connected devices",
                "Standard lab processing",
                "Questionnaire administration",
                "Blood glucose testing",
                "Standard lab equipment"
            ],
            pastPerformance: {
                enrollmentRate: 78,
                retentionRate: 75,
                protocolCompliance: 82,
                averageTimeToFirstPatient: 65
            },
            specialties: ["Respiratory", "Metabolic"]
        },
        {
            id: "SITE-006",
            name: "Pacific Clinical Research",
            location: "Seattle, WA",
            capabilities: [
                "Hematologist on staff",
                "Specialized coagulation testing",
                "Platelet function testing",
                "Bleeding assessment tools",
                "Emergency response capability",
                "24-hour monitoring access",
                "Specialized infusion equipment",
                "Blood product storage",
                "Dermatologist on staff",
                "Photography equipment",
                "PASI scoring capability"
            ],
            pastPerformance: {
                enrollmentRate: 91,
                retentionRate: 87,
                protocolCompliance: 94,
                averageTimeToFirstPatient: 42
            },
            specialties: ["Hematology", "Dermatology"]
        },
        {
            id: "SITE-007",
            name: "Midwest Research Institute",
            location: "Minneapolis, MN",
            capabilities: [
                "Rheumatologist on staff",
                "Joint assessment tools",
                "X-ray capability",
                "Ultrasound equipment",
                "Standard lab equipment",
                "Patient mobility assessment",
                "Pain assessment tools",
                "Endocrinologist on staff",
                "Thyroid function testing",
                "Hormone level monitoring"
            ],
            pastPerformance: {
                enrollmentRate: 89,
                retentionRate: 84,
                protocolCompliance: 90,
                averageTimeToFirstPatient: 50
            },
            specialties: ["Rheumatology", "Endocrinology"]
        },
        {
            id: "SITE-008",
            name: "Southwest Medical Research",
            location: "Phoenix, AZ",
            capabilities: [
                "Gastroenterologist on staff",
                "Endoscopy capability",
                "Colonoscopy equipment",
                "Biopsy processing",
                "Standard lab equipment",
                "Patient symptom tracking",
                "Dietary assessment tools",
                "Cardiac MRI capability",
                "Specialized lab equipment"
            ],
            pastPerformance: {
                enrollmentRate: 86,
                retentionRate: 82,
                protocolCompliance: 88,
                averageTimeToFirstPatient: 55
            },
            specialties: ["Gastroenterology", "Cardiovascular"]
        },
        {
            id: "SITE-009",
            name: "Advanced Clinical Center",
            location: "Miami, FL",
            capabilities: [
                "Oncologist on staff",
                "Certified infusion center",
                "24-hour AE monitoring",
                "Specialized infusion equipment",
                "Real-time reporting system",
                "Central lab coordination",
                "Temperature-controlled transport",
                "Caregiver support services",
                "Neurologist on staff",
                "MRI capability",
                "PET scan access"
            ],
            pastPerformance: {
                enrollmentRate: 93,
                retentionRate: 89,
                protocolCompliance: 91,
                averageTimeToFirstPatient: 40
            },
            specialties: ["Oncology", "Neurology"]
        },
        {
            id: "SITE-010",
            name: "Northeast Clinical Research",
            location: "Philadelphia, PA",
            capabilities: [
                "Cardiologist on staff",
                "ECG monitoring equipment",
                "Biomarker testing",
                "Temperature-controlled storage",
                "Multi-timepoint procedures",
                "Fasting protocol support",
                "Blood glucose testing",
                "HbA1c testing",
                "Remote monitoring devices",
                "Diabetes specialist"
            ],
            pastPerformance: {
                enrollmentRate: 88,
                retentionRate: 85,
                protocolCompliance: 89,
                averageTimeToFirstPatient: 48
            },
            specialties: ["Cardiovascular", "Metabolic"]
        }
    ],

    // Matching logic function
    matchSitesToProtocol: function(protocolId) {
        const protocol = this.protocols.find(p => p.id === protocolId);
        if (!protocol) return [];

        return this.sites.map(site => {
            const matchingCapabilities = protocol.requirements.filter(req => 
                site.capabilities.includes(req)
            );
            const matchScore = Math.round((matchingCapabilities.length / protocol.requirements.length) * 100);
            
            // Add performance bonus
            const performanceBonus = Math.round(
                (site.pastPerformance.enrollmentRate * 0.3 + 
                 site.pastPerformance.retentionRate * 0.3 + 
                 site.pastPerformance.protocolCompliance * 0.4) / 10
            );
            
            const finalScore = Math.min(100, matchScore + performanceBonus);

            return {
                site: site,
                matchScore: finalScore,
                matchingCapabilities: matchingCapabilities,
                missingCapabilities: protocol.requirements.filter(req => 
                    !site.capabilities.includes(req)
                ),
                matchDetails: `${matchingCapabilities.length}/${protocol.requirements.length} requirements matched`
            };
        }).sort((a, b) => b.matchScore - a.matchScore);
    },

    // USDM Mock JSON
    getUSDMExport: function(protocolId) {
        const protocol = this.protocols.find(p => p.id === protocolId);
        const version = this.versions.find(v => v.protocolId === protocolId);
        
        return JSON.stringify({
            "usdmVersion": "1.0",
            "study": {
                "id": protocol.id,
                "title": protocol.title,
                "phase": protocol.phase,
                "therapeuticArea": protocol.therapeuticArea,
                "version": version ? version.versionNumber : "1.0",
                "complexityScore": version ? version.complexityScore : null,
                "patientBurdenScore": version ? version.patientBurdenScore : null,
                "amendmentRisk": version ? version.amendmentRisk : null,
                "requirements": protocol.requirements,
                "exportDate": new Date().toISOString()
            }
        }, null, 2);
    },

    // ODM Mock XML/JSON
    getODMExport: function(protocolId) {
        const protocol = this.protocols.find(p => p.id === protocolId);
        
        return JSON.stringify({
            "ODM": {
                "xmlns": "http://www.cdisc.org/ns/odm/v1.3",
                "ODMVersion": "1.3.2",
                "Granularity": "Metadata",
                "Archival": "Yes",
                "StudyOID": protocol.id,
                "MetaDataVersionOID": "MDV-001",
                "Study": {
                    "GlobalVariables": {
                        "StudyName": protocol.title,
                        "StudyDescription": `${protocol.title} - ${protocol.phase}`,
                        "ProtocolName": protocol.id
                    },
                    "BasicDefinitions": {
                        "MeasurementUnit": [],
                        "RangeCheck": []
                    },
                    "MetaDataVersion": {
                        "OID": "MDV-001",
                        "Name": "Protocol Metadata",
                        "Description": "Protocol structure and requirements",
                        "Protocol": {
                            "StudyEventRef": []
                        }
                    }
                }
            }
        }, null, 2);
    }
};

// Make data available globally
window.ProtocolData = ProtocolData;
