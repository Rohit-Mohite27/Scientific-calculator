import { evaluate } from "mathjs";

type CalculateParams = {
  display: string;
  operator: string | null;
  setDisplay: (value: string) => void;
};

export default function calculate({
  display,
  operator,
  setDisplay,
}: CalculateParams) {
  try {
  
    let textToCalculate =display  // sin(30)

    const openBrackets = (textToCalculate.match(/\(/g) || []).length;
    const closeBrackets = (textToCalculate.match(/\)/g) || []).length;
    if (openBrackets > closeBrackets) {
      textToCalculate += ")".repeat(openBrackets - closeBrackets);
    }

    textToCalculate = textToCalculate.replace(/sin\(/g, "sin(deg ");
    textToCalculate = textToCalculate.replace(/cos\(/g, "cos(deg ");
    textToCalculate = textToCalculate.replace(/tan\(/g, "tan(deg ");

    const result=evaluate(textToCalculate)
    setDisplay(result)
    
    if (!isFinite(result)) {
      setDisplay("error");
      return;
    }
    setDisplay(result.toString());
  } catch {
    setDisplay("Errorrrrr");
  }
}
