import "./MessageContent.css";

const MessageContent = ({ data }) => {
  return (
    <div className="text-container">
      <div className="text">{data}</div>
    </div>
  );
};

export default MessageContent;
