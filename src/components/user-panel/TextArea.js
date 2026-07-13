import { useState } from "react";

export default function TextArea({ children }) {
  const [loading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="textarea">
      <div className="frame hover-effect-card u-margin-bottom-medium">
        <div className="textarea__content">
          <div className="textarea__content-info">
            <div className="textarea__content-info--text">
              <textarea
                className={`${loading ? "loading" : ""}`}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={children}
                required
                disabled={loading}
              ></textarea>
              <label htmlFor="message">{children}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
