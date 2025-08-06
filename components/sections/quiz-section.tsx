"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, Trophy, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What percentage of the world's population are women?",
      options: ["45%", "49.6%", "52%", "47%"],
      correct: 1,
      explanation: "Women make up approximately 49.6% of the global population, nearly half of all people worldwide.",
      category: "Demographics"
    },
    {
      id: 2,
      question: "Which country was the first to grant women the right to vote?",
      options: ["United States", "United Kingdom", "New Zealand", "Australia"],
      correct: 2,
      explanation: "New Zealand was the first country to grant women the right to vote in 1893, setting a precedent for women's suffrage worldwide.",
      category: "History"
    },
    {
      id: 3,
      question: "What does the term 'intersectionality' mean in gender equality?",
      options: [
        "The intersection of gender and technology",
        "How different forms of discrimination overlap",
        "The meeting point of male and female perspectives",
        "The crossroads of career and family"
      ],
      correct: 1,
      explanation: "Intersectionality refers to how different forms of discrimination (race, gender, class, etc.) overlap and compound each other.",
      category: "Concepts"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center">
              <CardContent className="p-12">
                <Trophy className="w-24 h-24 mx-auto text-yellow-400 mb-4" />
                <h2 className="text-4xl font-bold text-white mb-4">Quiz Complete!</h2>
                <p className="text-2xl font-semibold mb-6 text-green-400">
                  Great job! You scored {score}/{questions.length}
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-6 mb-8">
                  <div className="text-6xl font-bold text-white mb-2">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-xl text-gray-300">
                    Correct Answers
                  </div>
                </div>

                <Button 
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-gray-300">
            Challenge yourself with our interactive gender equality quiz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  {questions[currentQuestion].category}
                </Badge>
                <span className="text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <Progress 
                value={((currentQuestion + 1) / questions.length) * 100} 
                className="mb-4"
              />
              <CardTitle className="text-2xl text-white">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full p-4 text-left rounded-lg border transition-all duration-300 ${
                          selectedAnswer === index
                            ? 'border-green-500 bg-green-500/20 text-white'
                            : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswer === index
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-500'
                          }`}>
                            {selectedAnswer === index && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </motion.button>
                    ))}
                    
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-8"
                  >
                    {selectedAnswer === questions[currentQuestion].correct ? (
                      <div className="space-y-4">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                        <h3 className="text-2xl font-bold text-green-400">Correct!</h3>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <XCircle className="w-16 h-16 text-red-400 mx-auto" />
                        <h3 className="text-2xl font-bold text-red-400">Not quite right</h3>
                        <p className="text-gray-300">
                          The correct answer was: <strong>{questions[currentQuestion].options[questions[currentQuestion].correct]}</strong>
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {questions[currentQuestion].explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
