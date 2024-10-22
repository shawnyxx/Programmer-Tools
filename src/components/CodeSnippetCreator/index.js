import React, { useState } from "react";
import html2canvas from "html2canvas";

const CodeSnippetCreator = ({ onClose }) => {
  const [code, setCode] = useState("");
  const [preview, setPreview] = useState("");

  const handlePreview = () => {
    setPreview(code);
  };

  const handleDownload = async () => {
    const element = document.getElementById("codeOutput");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = "code-snippet.png";
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error creating download:", error);
      alert("Failed to create download. Please try again.");
    }
  };

  const handleCopy = async () => {
    const element = document.getElementById("codeOutput");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          throw new Error("Failed to create blob");
        }

        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
          alert("Snippet copied to clipboard as PNG!");
        } catch (error) {
          console.error("Clipboard error:", error);
          alert(
            "Failed to copy to clipboard. Your browser may not support this feature."
          );
        }
      });
    } catch (error) {
      console.error("Canvas error:", error);
      alert("Failed to create image. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-gray-800"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">Code Snippet Creator</h2>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
          className="w-full h-48 p-4 mb-4 font-mono border border-gray-300 rounded"
        />

        <div className="flex gap-4 mb-4">
          <button
            onClick={handlePreview}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Preview
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download PNG
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy to Clipboard
          </button>
        </div>

        {preview && (
          <div
            id="codeOutput"
            className="bg-gray-800 text-white p-4 rounded font-mono whitespace-pre overflow-x-auto"
          >
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeSnippetCreator;
