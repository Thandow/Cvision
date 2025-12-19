{
  "name": "Resume",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Resume title/version name"
    },
    "personal_info": {
      "type": "object",
      "properties": {
        "full_name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "linkedin": {
          "type": "string"
        },
        "portfolio": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        }
      }
    },
    "experiences": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "job_title": {
            "type": "string"
          },
          "company": {
            "type": "string"
          },
          "location": {
            "type": "string"
          },
          "start_date": {
            "type": "string"
          },
          "end_date": {
            "type": "string"
          },
          "is_current": {
            "type": "boolean"
          },
          "description": {
            "type": "string"
          },
          "achievements": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "education": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "degree": {
            "type": "string"
          },
          "field_of_study": {
            "type": "string"
          },
          "institution": {
            "type": "string"
          },
          "location": {
            "type": "string"
          },
          "graduation_date": {
            "type": "string"
          },
          "gpa": {
            "type": "string"
          },
          "achievements": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "skills": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string"
          },
          "items": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "projects": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "technologies": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "link": {
            "type": "string"
          }
        }
      }
    },
    "target_job": {
      "type": "string",
      "description": "Target job title for ATS optimization"
    },
    "target_keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keywords to optimize for"
    },
    "industry": {
      "type": "string",
      "description": "Target industry for optimization"
    },
    "template": {
      "type": "string",
      "enum": [
        "modern",
        "classic",
        "minimal"
      ],
      "default": "modern"
    },
    "generated_content": {
      "type": "object",
      "description": "AI-generated optimized content"
    },
    "industry_insights": {
      "type": "object",
      "description": "Industry-specific recommendations and insights"
    },
    "ats_score": {
      "type": "object",
      "description": "Latest ATS compatibility score and analysis"
    },
    "job_match_analysis": {
      "type": "object",
      "description": "Job description match analysis"
    },
    "customization": {
      "type": "object",
      "description": "Template customization settings (colors, fonts, spacing)"
    },
    "smart_suggestions": {
      "type": "object",
      "description": "AI-generated smart suggestions for improvement"
    },
    "user_edits": {
      "type": "array",
      "description": "Track user modifications to AI suggestions for learning",
      "items": {
        "type": "object",
        "properties": {
          "original_suggestion": {
            "type": "string"
          },
          "user_version": {
            "type": "string"
          },
          "timestamp": {
            "type": "string"
          },
          "accepted": {
            "type": "boolean"
          }
        }
      }
    }
  },
  "required": [
    "title"
  ]
}
