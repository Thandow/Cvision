import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, FolderOpen, Sparkles, FileSearch, Layout as LayoutIcon } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const navItems = [
    { name: "Home", label: "Home", icon: Sparkles },
    { name: "MyResumes", label: "My Resumes", icon: FolderOpen },
    { name: "ResumeBuilder", label: "Create Resume", icon: FileText },
    { name: "TemplateGallery", label: "Templates", icon: LayoutIcon },
    { name: "ResumeAnalysis", label: "Analysis", icon: FileSearch },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">Cvision</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.name)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${currentPageName === item.name 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-600 hover:bg-slate-100"
                  }
                `}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
