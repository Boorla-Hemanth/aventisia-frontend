
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Header";
import { Search, X } from "lucide-react"; 

const KnowledgeBase = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 mt-16 relative ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

          <div className="relative p-6">
            
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-800">Knowledge Base</h1>

              <div className="flex gap-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white pl-10 pr-3 py-2 text-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.08)] outline-none"
                  />
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#4e47e4] text-white px-4 py-2 rounded text-sm hover:bg-[#3d36c5] transition-colors"
                >
                  + Create New
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.08)]">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.08)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">Test</h3>
                    <span className="cursor-pointer">⋮</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="text-xs text-gray-400 border-t mt-14 py-4">Created On: 14/07/2025</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-14">
            <div className="text-black text-bold">6 rows</div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-black text-bold">
                <span>Rows per page</span>
                <select className="border rounded px-2 py-1 text-sm">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                </select>
                </div>
                <div>page 1 of 1</div>
                <div className="flex items-center gap-1">
                <button className="px-2 py-1 border rounded text-gray-400 cursor-not-allowed">
                    {"<<"}
                </button>
                <button className="px-2 py-1 border rounded text-gray-400 cursor-not-allowed">
                    {"<"}
                </button>
                <button className="px-2 py-1 border rounded">
                    {">"}
                </button>
                <button className="px-2 py-1 border rounded">
                    {">>"}
                </button>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setIsModalOpen(false)}
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-[40%] max-w-[470px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6 border-b border-gray-200 ">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Create New Knowledge Base</h2>
              <p className="text-xs text-gray-500">Best for quick answers from documents, websites and text files.</p>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-5 flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name (Cannot be edited later)<span className="text-red-500">*</span></label>
              <input type="text" placeholder="Name" className="w-full border border-gray-200 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea rows={4} placeholder="Description" className="w-full border border-gray-200 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vector Store<span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-200 rounded-md p-2 text-sm bg-white outline-none">
                <option>Qdrant</option>
                <option>Pinecone</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LLM Embedding Model<span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-200 rounded-md p-2 text-sm bg-white outline-none">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
              </select>
            </div>
          </div>
          <div className="pt-6 flex justify-end">
            <button className="bg-[#4e47e4] text-white px-8 py-2 rounded-md text-sm font-medium">
              Create
            </button>
          </div>

        </div>
      </div>


    </div>
  );
};

export default KnowledgeBase;