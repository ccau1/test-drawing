import styles from "./App.module.css";
import Canvas from "@library/lib/esm";
import { useRef, useState } from "react";
import useForceUpdate from "./hooks/useForceUpdate";

function App() {
  // define variables
  const canvas = useRef(new Canvas()).current;
  const forceUpdate = useForceUpdate();
  const commandHistoryRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [commandHistory, _setCommandHistory] = useState<
    Array<{ text: string; color?: string }>
  >([]);

  // on set command history, handle saving history and scrolling to latest
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

  // on submitting command, render the command into action
  // and update the command history
  const onSubmitCommandString = (text: string) => {
    const [type, ...args] = text.trim().split(/\s+/);
    commandHistory.push({ text });
    setInputText("");

    try {
      canvas.takeAction(type, args);
    } catch (err) {
      commandHistory.push({ text: (err as Error).message, color: "red" });
    }
    setCommandHistory([...commandHistory]);
    forceUpdate();
  };

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
        {commandHistory.map((history, historyIndex) => (
          <div
            key={`history_${historyIndex}`}
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
