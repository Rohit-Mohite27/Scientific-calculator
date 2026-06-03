type BackParams = {
  display: string;
  setDisplay: (value: string) => void;
};

export default function backspace({ display, setDisplay }: BackParams) {
  if (display.length === 0) {
    return;
  }
  setDisplay(display.slice(0, -1));
}
