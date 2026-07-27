import React, { useState } from 'react';
import { X, Upload, RefreshCw, FolderOpen, Check, HelpCircle, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';
import { DEFAULT_PHOTO_MAPPING } from '../data/portfolioData';

export const PhotoManagerModal: React.FC = () => {
  const {
    photoMapping,
    setPhotoPath,
    setPhotoDataUrl,
    resetPhoto,
    resetAllPhotos,
    isManagerOpen,
    closeManager,
    activeSlotToEdit,
  } = usePhotos();

  const [activeTab, setActiveTab] = useState<'slots' | 'guide'>('slots');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isManagerOpen) return null;

  const handlePathChange = (key: string, path: string) => {
    setPhotoPath(key, path);
    showToast(`Updated file path for ${photoMapping[key]?.label || key}`);
  };

  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoDataUrl(key, event.target.result as string);
          showToast(`Uploaded photo for ${photoMapping[key]?.label || key}`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const showToast = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Photo Space Manager
                <span className="px-2 py-0.5 text-xs bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-medium rounded-full border border-teal-300/50 dark:border-teal-800/50">
                  Explorer Friendly
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Configure local file paths or upload images directly for Rai Shova's website.
              </p>
            </div>
          </div>

          <button
            onClick={closeManager}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/50 text-xs">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('slots')}
              className={`py-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'slots'
                  ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>All Photo Spaces ({Object.keys(photoMapping).length})</span>
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`py-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>How To Upload via File Explorer</span>
            </button>
          </div>

          <button
            onClick={resetAllPhotos}
            className="text-xs text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 transition-colors"
            title="Reset all photo spaces to blank"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All Blank</span>
          </button>
        </div>

        {/* Success Toast Banner */}
        {successMessage && (
          <div className="bg-teal-500 text-white px-5 py-2 text-xs font-medium flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{successMessage}</span>
            </div>
            <button onClick={() => setSuccessMessage(null)} className="hover:opacity-80">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'slots' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(photoMapping).map(([key, dataVal]) => {
                const data = dataVal as { path?: string; dataUrl?: string; alt: string; label: string; recommendedSize: string };
                const isSelected = activeSlotToEdit === key;
                const hasImg = Boolean(data.dataUrl || data.path);

                return (
                  <div
                    key={key}
                    className={`p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'border-teal-500 ring-2 ring-teal-500/20 bg-teal-50/20 dark:bg-teal-950/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {data.label}
                          </h4>
                          {hasImg ? (
                            <span className="px-2 py-0.5 text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 rounded font-medium">
                              Configured
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded font-medium">
                              Blank Space
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Rec: {data.recommendedSize}
                        </p>
                      </div>

                      <button
                        onClick={() => resetPhoto(key)}
                        className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors"
                        title="Clear photo"
                      >
                        Clear
                      </button>
                    </div>

                    {/* Preview or Blank thumbnail */}
                    <div className="w-full h-24 mb-3 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative">
                      {data.dataUrl || data.path ? (
                        <img
                          src={data.dataUrl || data.path}
                          alt={data.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="text-center p-2">
                          <ImageIcon className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                          <p className="text-[10px] text-slate-500">Blank Photo Slot</p>
                        </div>
                      )}
                    </div>

                    {/* Option 1: File Path Input */}
                    <div className="space-y-2 text-xs">
                      <label className="block text-[11px] font-medium text-slate-700 dark:text-slate-300">
                        1. Relative File Path (placed in /public folder)
                      </label>
                      <input
                        type="text"
                        value={data.path || ''}
                        onChange={(e) => handlePathChange(key, e.target.value)}
                        placeholder={`e.g. /${key}.jpg or /profile.png`}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono text-[11px]"
                      />

                      {/* Option 2: Browser File Upload */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-500">2. Or Upload Directly:</span>
                        <label className="cursor-pointer px-2.5 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-teal-600 hover:text-white text-slate-700 dark:text-slate-200 text-[11px] font-medium rounded transition-colors flex items-center gap-1">
                          <Upload className="w-3 h-3" />
                          <span>Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(key, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Guide Tab */
            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/50 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-teal-900 dark:text-teal-200 mb-1">
                    How to add photos using AI Studio File Explorer
                  </h4>
                  <p className="text-xs text-teal-800 dark:text-teal-300/90 leading-relaxed">
                    You requested to keep all photo spaces blank initially and upload images via file explorer.
                    Here are 2 effortless ways to display your uploaded images on the website!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Method A: Place in <code className="text-teal-600 dark:text-teal-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">public/</code> folder
                  </h4>
                  <ol className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li>In the AI Studio file tree on the left, create or locate the <code className="font-mono">public</code> folder.</li>
                    <li>Upload your photo file (e.g. <code className="font-mono">profile.jpg</code> or <code className="font-mono">about.jpg</code>).</li>
                    <li>In this Photo Space Manager, set the path as <code className="font-mono">/profile.jpg</code> or <code className="font-mono">/about.jpg</code>.</li>
                    <li>The website will instantly display your uploaded photo!</li>
                  </ol>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    Method B: Direct Browser Upload
                  </h4>
                  <ol className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li>Click on any blank photo space on the page or use the "Choose File" buttons in this manager.</li>
                    <li>Select an image from your computer.</li>
                    <li>The image will be loaded into browser cache immediately without needing to edit code.</li>
                  </ol>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs">
                <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-teal-600" />
                  Recommended Image Names for Rai Shova's Website:
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">/public/profile.jpg</div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">/public/about.jpg</div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">/public/project1.jpg</div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">/public/project2.jpg</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            All photo slots are saved in local storage automatically.
          </p>
          <button
            onClick={closeManager}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs rounded-xl shadow-sm transition-colors"
          >
            Done & Close
          </button>
        </div>

      </div>
    </div>
  );
};
