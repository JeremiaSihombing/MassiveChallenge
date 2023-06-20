import { useState, useRef } from "react";
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from "react-icons/ai";

const LibraryArticle = () => {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const editorRef = useRef(null);

  const handleChange = () => {
    setText(editorRef.current.innerHTML);
  };

  const handleFormatClick = (formatType) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    switch (formatType) {
      case "bold":
        document.execCommand("bold");
        break;
      case "italic":
        document.execCommand("italic");
        break;
      case "underline":
        document.execCommand("underline");
        break;
      default:
        break;
    }

    handleChange();
  };

  const handleCancel = () => {
    setText("");
    editorRef.current.innerHTML = "";
  };

  const handleSend = () => {
    // Lakukan sesuatu dengan teks yang dikirim
    console.log("Teks yang dikirim:", text);
    // Reset editor
    setText("");
    editorRef.current.innerHTML = "";
  };

  return (
    <div className="p-4">
      <div className="flex mb-2">
        <button className={`mr-2 p-2 ${isBold ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`} onClick={() => handleFormatClick("bold")}>
          <AiOutlineBold />
        </button>
        <button className={`mr-2 p-2 ${isItalic ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`} onClick={() => handleFormatClick("italic")}>
          <AiOutlineItalic />
        </button>
        <button className={`mr-2 p-2 ${isUnderlined ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`} onClick={() => handleFormatClick("underline")}>
          <AiOutlineUnderline />
        </button>
      </div>
      <div
        className={`border border-gray-300 p-2 rounded-lg w-full h-48 resize-none ${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderlined ? "underline" : ""}`}
        contentEditable={true}
        ref={editorRef}
        onInput={handleChange}></div>
      <div className="mt-2">
        <p>Jumlah Karakter: {text.length}</p>
      </div>
      <div className="mt-4">
        <button className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handleSend}>
          Kirim
        </button>
        <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg" onClick={handleCancel}>
          Batal
        </button>
      </div>
    </div>
  );
};

export default LibraryArticle;
