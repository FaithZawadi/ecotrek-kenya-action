import { ArrowLeft, Leaf, Droplet, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const modules = [
  {
    id: 1,
    title: "Tree Planting",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    sdg: "SDG 15",
    duration: "15 mins",
    description: "Learn how to plant and care for trees that restore local ecosystems.",
  },
  {
    id: 2,
    title: "Waste Management",
    icon: <Trash2 className="w-8 h-8 text-yellow-600" />,
    sdg: "SDG 12",
    duration: "12 mins",
    description: "Understand recycling, composting, and reducing plastic use in your area.",
  },
  {
    id: 3,
    title: "Water Conservation",
    icon: <Droplet className="w-8 h-8 text-blue-500" />,
    sdg: "SDG 6",
    duration: "10 mins",
    description: "Discover easy ways to save water at home, school, and in the community.",
  },
];

const LearnPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
        <Link to="/">
                  <Button variant="ghost" className="mb-8">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-6">Start Learning</h1>
      <p className="text-center text-gray-600 mb-10">
        Explore simple, powerful lessons to help the environment and your community. Learn offline, earn EcoPoints, and take real action.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-400 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {mod.icon}
              <h2 className="text-xl font-semibold text-gray-800">{mod.title}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">{mod.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{mod.sdg}</span>
              <span>{mod.duration}</span>
            </div>
            <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl text-sm">
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;