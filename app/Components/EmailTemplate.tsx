import React from "react";

interface EmailTemplateProps {
  sender: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  sender,
  subject,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    }}
  >
    <div style={{ marginBottom: "20px" }}>
      <strong>From:</strong> {sender}
    </div>
    <div style={{ marginBottom: "20px" }}>
      <strong>Subject:</strong> {subject}
    </div>
    <div style={{ marginBottom: "20px" }}>
      <p>{message}</p>
    </div>
    <div
      style={{
        marginTop: "20px",
        borderTop: "1px solid #ccc",
        paddingTop: "10px",
      }}
    ></div>
  </div>
);

export default EmailTemplate;
