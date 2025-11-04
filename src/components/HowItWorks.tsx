<<<<<<< HEAD
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, Users, X, DollarSign, PiggyBank, Calendar, Award, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { toast } from "sonner";

const HowItWorks = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [monthlySavings, setMonthlySavings] = useState(500);
  const [savingsGoal, setSavingsGoal] = useState(10000);
  const [timeframe, setTimeframe] = useState(12);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [savedLessons, setSavedLessons] = useState<string[]>([]);
  const [selectedGoalType, setSelectedGoalType] = useState<string | null>(null);
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [storyText, setStoryText] = useState("");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  // Generate chart data based on monthly savings
  const generateChartData = () => {
    const data = [];
    let accumulated = 0;
    for (let i = 0; i <= timeframe; i++) {
      accumulated += monthlySavings;
      data.push({
        month: `Month ${i}`,
        savings: accumulated,
        goal: savingsGoal
      });
    }
    return data;
  };

  const steps = [
    {
      id: "basics",
=======
import { Card } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
      icon: BookOpen,
      step: "Step 1",
      title: "Learn the Basics",
      description: "Start with simple financial literacy modules that teach budgeting, saving, and money management in plain language.",
    },
    {
<<<<<<< HEAD
      id: "goals",
=======
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
      icon: Target,
      step: "Step 2",
      title: "Set Your Goals",
      description: "Define your financial goals and let our AI create a personalized plan that fits your income and lifestyle.",
    },
    {
<<<<<<< HEAD
      id: "progress",
=======
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
      icon: TrendingUp,
      step: "Step 3",
      title: "Track Progress",
      description: "Monitor your spending, track savings, and watch your financial health improve with easy-to-understand visualizations.",
    },
    {
<<<<<<< HEAD
      id: "community",
=======
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
      icon: Users,
      step: "Step 4",
      title: "Join the Community",
      description: "Connect with others, share experiences, and celebrate milestones together on the path to financial freedom.",
    },
  ];

<<<<<<< HEAD
  const lessons: Record<string, { title: string; content: string }> = {
    'budgeting': {
      title: 'Budgeting 101',
      content: 'Learn the fundamentals of creating and maintaining a budget. Track your income, categorize expenses, and identify areas where you can save money. A good budget is your roadmap to financial freedom!'
    },
    'saving': {
      title: 'Smart Saving Strategies',
      content: 'Discover proven strategies to build your savings. Learn about the 50/30/20 rule, emergency funds, and automated savings. Start small and watch your savings grow over time!'
    },
    'investing': {
      title: 'Introduction to Investing',
      content: 'Understand the basics of investing, from stocks and bonds to index funds and retirement accounts. Learn how compound interest can work in your favor to build long-term wealth.'
    },
    'credit': {
      title: 'Understanding Credit',
      content: 'Master credit scores, credit reports, and responsible credit card use. Learn how to build and maintain good credit, which is essential for major purchases and financial opportunities.'
    }
  };

  const modalContent: Record<string, JSX.Element> = {
    basics: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Financial Literacy Modules</h3>
        {selectedLesson ? (
          <div>
            <button 
              onClick={() => setSelectedLesson(null)}
              className="text-emerald-600 hover:text-emerald-700 mb-4 flex items-center gap-2"
            >
              ← Back to modules
            </button>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
              <h4 className="text-2xl font-bold mb-4 text-emerald-900">{lessons[selectedLesson].title}</h4>
              <p className="text-gray-700 leading-relaxed mb-6">{lessons[selectedLesson].content}</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    toast.success(`Starting ${lessons[selectedLesson].title}!`, {
                      description: "Redirecting to lesson content..."
                    });
                    // In a real app, navigate to lesson page:
                    // navigate(`/lessons/${selectedLesson}`);
                    setTimeout(() => {
                      setSelectedLesson(null);
                      setActiveModal(null);
                    }, 1500);
                  }}
                  className="flex-1 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  Start Lesson
                </button>
                <button 
                  onClick={() => {
                    setSavedLessons([...savedLessons, selectedLesson]);
                    toast.success("Lesson saved!", {
                      description: `${lessons[selectedLesson].title} added to your learning library.`
                    });
                    setSelectedLesson(null);
                  }}
                  className="flex-1 py-3 bg-white border border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition flex items-center justify-center gap-2"
                >
                  {savedLessons.includes(selectedLesson) ? <Check size={20} /> : null}
                  {savedLessons.includes(selectedLesson) ? 'Saved' : 'Save for Later'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-4">
              {[
                { key: 'budgeting', title: 'Budgeting 101' },
                { key: 'saving', title: 'Smart Saving Strategies' },
                { key: 'investing', title: 'Introduction to Investing' },
                { key: 'credit', title: 'Understanding Credit' }
              ].map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedLesson(module.key)}
                  className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 hover:shadow-md transition-shadow cursor-pointer hover:border-emerald-300 relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-emerald-600" size={24} />
                      <span className="font-semibold">{module.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {savedLessons.includes(module.key) && (
                        <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">Saved</span>
                      )}
                      <span className="text-sm text-emerald-600 hover:text-emerald-700">Start →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-100 rounded-lg">
              <p className="text-sm text-emerald-800">
                💡 <strong>Tip:</strong> Complete all modules to unlock personalized recommendations!
              </p>
            </div>
          </>
        )}
      </div>
    ),
    goals: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Set Your Financial Goals</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Savings Goal Target</label>
            <div className="flex items-center gap-4">
              <DollarSign className="text-blue-600" />
              <input
                type="number"
                value={savingsGoal}
                onChange={(e) => setSavingsGoal(Number(e.target.value))}
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter amount"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timeframe (months)</label>
            <div className="flex items-center gap-4">
              <Calendar className="text-blue-600" />
              <input
                type="number"
                value={timeframe}
                onChange={(e) => setTimeframe(Number(e.target.value))}
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Months"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Select Your Goal Type</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { key: 'emergency', label: 'Emergency Fund' },
                { key: 'retirement', label: 'Retirement' },
                { key: 'home', label: 'Buy a Home' },
                { key: 'business', label: 'Start Business' }
              ].map((goal, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedGoalType(goal.key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedGoalType === goal.key
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <Award className={`mx-auto mb-2 ${selectedGoalType === goal.key ? 'text-white' : 'text-blue-600'}`} />
                  <div className="text-sm font-semibold">{goal.label}</div>
                </motion.button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              if (!selectedGoalType) {
                toast.error("Please select a goal type");
                return;
              }
              toast.success("Goal saved successfully!", {
                description: `${savingsGoal.toLocaleString()} in ${timeframe} months for ${
                  selectedGoalType === 'emergency' ? 'Emergency Fund' :
                  selectedGoalType === 'retirement' ? 'Retirement' :
                  selectedGoalType === 'home' ? 'Buying a Home' : 'Starting a Business'
                }`
              });
              setTimeout(() => setActiveModal(null), 2000);
            }}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            Save My Goal
          </button>
        </div>
      </div>
    ),
    progress: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Track Your Progress</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Monthly Savings Amount</label>
            <div className="flex items-center gap-4">
              <PiggyBank className="text-purple-600" />
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={monthlySavings}
                onChange={(e) => setMonthlySavings(Number(e.target.value))}
                className="flex-1"
              />
              <span className="font-bold text-purple-600 min-w-[100px]">${monthlySavings}</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Projected Savings</div>
            <div className="text-3xl font-bold text-purple-600">
              ${(monthlySavings * timeframe).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mt-1">in {timeframe} months</div>
          </div>
          <div className="mt-6 w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={generateChartData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="savings" stroke="#8b5cf6" strokeWidth={3} name="Your Savings" />
                <Line type="monotone" dataKey="goal" stroke="#ec4899" strokeWidth={2} strokeDasharray="5 5" name="Goal" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
    community: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
        
        {showStoryForm ? (
          <div className="space-y-4">
            <button 
              onClick={() => setShowStoryForm(false)}
              className="text-orange-600 hover:text-orange-700 flex items-center gap-2"
            >
              ← Back to community
            </button>
            <div>
              <label className="block text-sm font-medium mb-2">Share Your Story</label>
              <textarea
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                placeholder="Tell us about your financial journey, a milestone you've reached, or ask for advice..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none min-h-[120px]"
              />
            </div>
            <button
              onClick={() => {
                if (!storyText.trim()) {
                  toast.error("Please write something to share");
                  return;
                }
                toast.success("Story shared successfully!", {
                  description: "Your post is now visible to the community"
                });
                setStoryText("");
                setShowStoryForm(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Post to Community
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {[
                { id: 1, name: 'Sarah M.', message: 'Just saved my first $1000! This community is amazing!', time: '2 hours ago' },
                { id: 2, name: 'John D.', message: 'Looking for advice on investing for beginners. Any tips?', time: '5 hours ago' },
                { id: 3, name: 'Emily R.', message: 'Hit my 6-month savings goal today! 🎉', time: '1 day ago' }
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {post.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{post.name}</span>
                        <span className="text-xs text-gray-500">{post.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{post.message}</p>
                      <div className="flex gap-4 mt-2">
                        <button 
                          onClick={() => {
                            const newLiked = likedPosts.includes(post.id)
                              ? likedPosts.filter(id => id !== post.id)
                              : [...likedPosts, post.id];
                            setLikedPosts(newLiked);
                            if (!likedPosts.includes(post.id)) {
                              toast.success("Post liked!");
                            }
                          }}
                          className={`text-xs transition ${
                            likedPosts.includes(post.id) 
                              ? 'text-red-600 font-semibold' 
                              : 'text-orange-600 hover:text-orange-700'
                          }`}
                        >
                          {likedPosts.includes(post.id) ? '❤️ Liked' : 'Like'}
                        </button>
                        <button 
                          onClick={() => {
                            toast.info("Reply feature coming soon!", {
                              description: "You'll be able to reply to community posts"
                            });
                          }}
                          className="text-xs text-orange-600 hover:text-orange-700"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button 
              onClick={() => setShowStoryForm(true)}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Share Your Story
            </button>
          </>
        )}
      </div>
    )
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Your Journey to Financial Freedom
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
=======
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Journey to Financial Freedom
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
            Four simple steps to transform your financial future
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
<<<<<<< HEAD
                onClick={() => setActiveModal(step.id)}
                className="p-5 sm:p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card border-border cursor-pointer hover:scale-[1.02] active:scale-95 hover:border-primary/50"
              >
                {/* Step number background */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-6xl sm:text-7xl md:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors select-none">
=======
                className="p-6 relative overflow-hidden group hover:shadow-medium transition-all duration-300 bg-card border-border"
              >
                {/* Step number background */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
                  {index + 1}
                </div>

                <div className="relative z-10">
<<<<<<< HEAD
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 sm:mb-4 shadow-soft group-hover:shadow-md transition-shadow">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary-foreground" />
                  </div>
                  
                  <div className="text-xs sm:text-sm font-semibold text-secondary mb-2">{step.step}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-card-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
=======
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="text-sm font-semibold text-secondary mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
              </Card>
            );
          })}
        </div>
      </div>
<<<<<<< HEAD

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold">
                  {steps.find(s => s.id === activeModal)?.title}
                </h2>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                {modalContent[activeModal]}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
=======
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
    </section>
  );
};

<<<<<<< HEAD
export default HowItWorks;
=======
export default HowItWorks;
>>>>>>> 293b28654335d25ad532decae9dd0c39303de088
