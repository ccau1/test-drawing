import styles from "./App.module.css";
import Canvas from "@library/lib/esm";
import { useLayoutEffect, useRef, useState } from "react";
import useForceUpdate from "./hooks/useForceUpdate";

function App() {
  const canvas = useRef(new Canvas()).current;
  const forceUpdate = useForceUpdate();
  const commandHistoryRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [commandHistory, _setCommandHistory] = useState<
    Array<{ text: string; color?: string }>
  >([]);

  const setCommandHistory = (
    history: Array<{ text: string; color?: string }>
  ) => {
    _setCommandHistory(history);
    setTimeout(
      () =>
        commandHistoryRef.current?.scrollTo({
          top: commandHistoryRef.current.scrollHeight,
          behavior: "smooth",
        }),
      0
    );
  };

  const onSubmitCommandString = (text: string) => {
    const [type, ...args] = text.trim().split(/\s+/);
    commandHistory.push({ text });
    setInputText("");

    try {
      canvas.takeAction(type, args);
    } catch (err) {
      // commandHistory.push({ text: err as string, color: "red" });
    }
    setCommandHistory([...commandHistory]);
    forceUpdate();
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("drawing now");

      onSubmitCommandString("C 20 4");
      onSubmitCommandString("L 1 2 6 2");
      onSubmitCommandString("L 6 3 6 4");
      onSubmitCommandString("R 14 1 18 3");
      onSubmitCommandString("B 10 3 o");
    }, 500);
  }, []);

  console.log("commandHistory", commandHistory);

  return (
    <div className={styles.wrapper}>
      <div className={styles.canvasWrapper}>
        {!!canvas.canvasGrid.length && (
          <div className={styles.canvasBoard}>
            <div>
              {canvas.canvasGrid[0].map((_, i) => (
                <div key={`left_border_${i}`} className={styles.gridItem}>
                  |
                </div>
              ))}
            </div>
            {canvas.canvasGrid.map((canvasGridXArray, canvasGridXIndex) => (
              <div
                key={`grid_x_${canvasGridXIndex}`}
                className={styles.canvasColumnWrapper}
              >
                {canvasGridXArray.map(
                  (canvasGridXYValue, canvasGridXYValueIndex) => (
                    <div
                      key={`grid_xy_${canvasGridXIndex}_${canvasGridXYValueIndex}`}
                      className={styles.gridItem}
                    >
                      {canvasGridXYValue}
                    </div>
                  )
                )}
              </div>
            ))}
            <div>
              {canvas.canvasGrid[0].map((_, i) => (
                <div key={`left_border_${i}`} className={styles.gridItem}>
                  |
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div ref={commandHistoryRef} className={styles.commandHistoryWrapper}>
        {commandHistory.map((history) => (
          <div
            style={{
              ...(history.color ? { color: history.color } : {}),
            }}
          >
            {history.text}
          </div>
        ))}
      </div>
      <input
        value={inputText}
        placeholder="enter command here..."
        onChange={(ev) => setInputText(ev.target.value)}
        onKeyUp={(ev) => ev.key === "Enter" && onSubmitCommandString(inputText)}
        className={styles.input}
      />
    </div>
  );
}

export default App;
