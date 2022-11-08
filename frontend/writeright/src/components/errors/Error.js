import "./Error.css";
import React from "react";

function Error({
  context,
  message,
  replacements,
  rule,
  length,
  offset,
  errNum,
}) {
  return (
    <div className="errors-outer">
      <div className="error-body">
        <h2 className="err-num">Error #{errNum}</h2>

        <div className="err-sections">
          <div className="error-section">
            <h4 className="err-label">Possible Error Cause:</h4>
            <p className="error-desc">{message}</p>
          </div>

          <div className="error-section">
            <h4 className="err-label">Context:</h4>
            <p className="error-desc">"{context.text}"</p>
          </div>

          <div className="error-section">
            <h4 className="err-label">Specific word/phrase:</h4>
            <p className="error-desc">
              "{context.text.substring(offset, offset + length)}"
            </p>
          </div>

          <div className="error-section">
            <h4 className="err-label">Rule:</h4>
            <p className="error-desc">{rule.description}</p>
          </div>

          <div className="error-section">
            <div className="replacements">
              <h4 className="err-label">Suggested Replacements:</h4>
              {replacements
                .filter((e, i) => i < 3)
                .map((opt) => (
                  <div className="replacement-opt" key={opt.value}>
                    <p className="error-desc">"{opt.value}"</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
