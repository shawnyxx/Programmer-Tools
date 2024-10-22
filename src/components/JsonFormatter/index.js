import React, { useState } from "react";
import { AlertCircle, Check, Copy, Download } from "lucide-react";

const JsonFormatter = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [formatted, setFormatted] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    try {
      // First parse to validate JSON
      const parsed = JSON.parse(input);
      // Then stringify with proper spacing
      const prettyJson = JSON.stringify(parsed, null, 2);
      setFormatted(prettyJson);
      setError("");
    } catch (err) {
      setError("Invalid JSON: " + err.message);
      setFormatted("");
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setFormatted(minified);
      setError("");
    } catch (err) {
      setError("Invalid JSON: " + err.message);
      setFormatted("");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([formatted], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formatted.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-gray-800"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">JSON Formatter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Input Panel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input JSON
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Output Panel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Formatted JSON
            </label>
            <div className="relative h-64">
              <textarea
                value={formatted}
                readOnly
                className="w-full h-full p-4 font-mono text-sm bg-gray-50 border border-gray-300 rounded resize-none"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handleFormat}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
          >
            Format
          </button>
          <button
            onClick={handleMinify}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
          >
            Minify
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center gap-2"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          {formatted && (
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonFormatter;
