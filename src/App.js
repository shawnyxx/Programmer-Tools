import React, { useState } from "react";
import { Code2, Palette, Settings2 } from "lucide-react";
import CodeSnippetCreator from "./components/CodeSnippetCreator";
import ToolCard from "./components/ToolCard";
import JsonFormatter from "./components/JsonFormatter";


const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Programmer Tools</h1>
        </header>

        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard
              icon={<Code2 size={32} />}
              title="Code Snippet Creator"
              description="Create and export beautiful code snippets with custom styling"
              author="Shawny"
              onClick={() => handleOpenModal("snippet")}
            />

            <ToolCard
              icon={<Settings2 size={32} />}
              title="JSON Formatter"
              description="Format and validate JSON data"
              author="Crypt0zauruS"
              onClick={() => handleOpenModal("json")}
            />

            <ToolCard
              icon={<Palette size={32} />}
              title="Color Palette Generator"
              description="Generate beautiful color schemes for your projects"
              comingSoon
            />
          </div>
        </main>
      </div>

      {activeModal === "snippet" && (
        <CodeSnippetCreator onClose={handleCloseModal} />
      )}

      {activeModal === "json" && <JsonFormatter onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
