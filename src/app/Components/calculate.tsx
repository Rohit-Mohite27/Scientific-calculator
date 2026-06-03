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
    if (operator === "sin") {
      const degree = Number(display);
      const radian = degree * (Math.PI / 180);
      const result = Math.sin(radian);
      setDisplay(result.toString());
      return;
    }
    const result = evaluate(display);
    if (!isFinite(result)) {
      setDisplay("error");
      return;
    }
    setDisplay(result.toString());
  } catch {
    setDisplay("Errorrrrr");
  }
}
