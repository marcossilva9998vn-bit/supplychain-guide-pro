import { useState } from "react";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual é o primeiro 'S' da metodologia 5S?",
    options: ["Seiton (Organização)", "Seiri (Utilização)", "Seiso (Limpeza)", "Shitsuke (Disciplina)"],
    correctAnswer: 1,
    explanation: "Seiri (Utilização) é o primeiro S, que consiste em separar o necessário do desnecessário."
  },
  {
    question: "O sistema Kanban é dividido em quantas colunas básicas?",
    options: ["2 colunas", "3 colunas", "4 colunas", "5 colunas"],
    correctAnswer: 1,
    explanation: "O Kanban básico possui 3 colunas: To Do (a fazer), In Progress (em progresso) e Done (concluído)."
  },
  {
    question: "O que significa Kaizen em japonês?",
    options: ["Melhoria rápida", "Mudança para melhor", "Trabalho em equipe", "Perfeição contínua"],
    correctAnswer: 1,
    explanation: "Kaizen significa 'mudança para melhor' e representa a filosofia de melhoria contínua."
  },
  {
    question: "Qual princípio do Kanban limita a quantidade de trabalho em execução?",
    options: ["Feedback contínuo", "WIP (Work in Progress)", "Fluxo visual", "Políticas explícitas"],
    correctAnswer: 1,
    explanation: "O WIP (Work in Progress) limita o trabalho em progresso para evitar sobrecarga do sistema."
  },
  {
    question: "Qual dos seguintes NÃO é um objetivo do Just in Time?",
    options: ["Zero Estoque", "Zero Defeitos", "Zero Atrasos", "Zero Funcionários"],
    correctAnswer: 3,
    explanation: "Os três objetivos principais do JIT são: Zero Estoque, Zero Defeitos e Zero Atrasos."
  },
  {
    question: "Qual metodologia foca em pequenas melhorias constantes?",
    options: ["5S", "Kanban", "Kaizen", "Just in Time"],
    correctAnswer: 2,
    explanation: "Kaizen é a filosofia de melhoria contínua através de pequenas mudanças incrementais."
  },
  {
    question: "O que é Takt Time no sistema Just in Time?",
    options: ["Tempo de pausa", "Ritmo de produção sincronizado com a demanda", "Tempo de setup", "Tempo de entrega"],
    correctAnswer: 1,
    explanation: "Takt Time é o ritmo de produção que deve estar sincronizado com a demanda do cliente."
  },
  {
    question: "Qual 'S' do 5S representa a disciplina de manter os processos?",
    options: ["Seiri", "Seiton", "Seiketsu", "Shitsuke"],
    correctAnswer: 3,
    explanation: "Shitsuke (Disciplina) é o quinto S, responsável por manter o comprometimento com os processos."
  },
  {
    question: "O sistema de produção do Just in Time é baseado em qual tipo de sistema?",
    options: ["Sistema empurrado", "Sistema puxado", "Sistema misto", "Sistema aleatório"],
    correctAnswer: 1,
    explanation: "O JIT utiliza um sistema puxado, onde a produção é baseada na demanda real do cliente."
  },
  {
    question: "Qual metodologia utiliza cartões ou sinalizações visuais?",
    options: ["5S", "Kanban", "Kaizen", "Just in Time"],
    correctAnswer: 1,
    explanation: "Kanban utiliza cartões e sinalizações visuais para controlar o fluxo de trabalho."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfeito! Você domina as metodologias! 🏆";
    if (percentage >= 70) return "Muito bem! Você tem um ótimo conhecimento! 🎉";
    if (percentage >= 50) return "Bom trabalho! Continue estudando! 📚";
    return "Continue aprendendo sobre as metodologias! 💪";
  };

  if (showResult) {
    return (
      <Card className="max-w-2xl mx-auto p-8 text-center bg-card border-2 border-border">
        <Trophy className="w-20 h-20 text-primary mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-secondary mb-4">Quiz Finalizado!</h3>
        <div className="text-6xl font-bold text-primary mb-4">
          {score}/{quizQuestions.length}
        </div>
        <p className="text-xl text-foreground mb-8">{getScoreMessage()}</p>
        <Button onClick={handleRestart} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Refazer Quiz
        </Button>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="max-w-2xl mx-auto p-8 bg-card border-2 border-border">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Pergunta {currentQuestion + 1} de {quizQuestions.length}
          </span>
          <span className="text-sm font-semibold text-primary">
            Pontuação: {score}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-secondary mb-6">{question.question}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswer;
          
          let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-500 ease-in-out ";
          
          if (selectedAnswer === null) {
            buttonClass += "border-border hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/20 hover:to-primary/10 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105";
          } else if (isSelected) {
            buttonClass += isCorrect 
              ? "border-green-500 bg-green-50 dark:bg-green-900/20" 
              : "border-red-500 bg-red-50 dark:bg-red-900/20";
          } else if (isCorrectAnswer) {
            buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20";
          } else {
            buttonClass += "border-border opacity-50";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={selectedAnswer !== null}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span className="text-foreground font-medium">{option}</span>
                {selectedAnswer !== null && isSelected && (
                  isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )
                )}
                {selectedAnswer !== null && !isSelected && isCorrectAnswer && (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {selectedAnswer !== null && (
        <div className="mb-6 p-4 bg-muted/50 rounded-xl border-2 border-border">
          <p className="text-foreground">
            <strong className="text-secondary">Explicação:</strong> {question.explanation}
          </p>
        </div>
      )}

      {selectedAnswer !== null && (
        <Button onClick={handleNextQuestion} className="w-full">
          {currentQuestion < quizQuestions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
        </Button>
      )}
    </Card>
  );
};

export default Quiz;
