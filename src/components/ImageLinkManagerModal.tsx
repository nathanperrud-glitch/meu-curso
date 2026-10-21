import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Check, Copy, RefreshCw, Link as LinkIcon, Image as ImageIcon, ExternalLink } from 'lucide-react';

export const ImageLinkManagerModal: React.FC = () => {
  const { isImageManagerOpen, setIsImageManagerOpen, imageSlots, updateImage, resetImages, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState<string>('');

  if (!isImageManagerOpen) return null;

  const filteredSlots = selectedCategory === 'all'
    ? imageSlots
    : imageSlots.filter((s) => s.category === selectedCategory);

  const startEditing = (key: string, currentUrl: string) => {
    setEditingKey(key);
    setTempUrl(currentUrl);
  };

  const saveEditing = (key: string) => {
    if (tempUrl.trim()) {
      updateImage(key, tempUrl.trim());
    }
    setEditingKey(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast('Link copiado para a área de transferência!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FCFBF6] border-2 border-[#16150F] rounded-xl shadow-[6px_6px_0px_#16150F] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#CDF13B] border-b-2 border-[#16150F] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-[#16150F] text-[#CDF13B] rounded">
              <LinkIcon size={18} />
            </span>
            <div>
              <h2 className="font-brico font-extrabold text-lg sm:text-xl text-[#16150F]">
                Gerenciador de Links Diretos das Imagens
              </h2>
              <p className="font-mono text-xs text-[#16150F]/80">
                Visualize, copie e substitua os links de imagem usados em todas as telas do app.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsImageManagerOpen(false)}
            className="w-8 h-8 rounded border border-[#16150F] bg-[#FCFBF6] flex items-center justify-center font-mono font-bold hover:bg-white transition-colors"
            aria-label="Fechar modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Filter bar & Actions */}
        <div className="p-4 bg-[#EFEBDD] border-b border-[#C9C4B7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-bold text-[#16150F] mr-1">Filtrar:</span>
            {[
              { id: 'all', label: 'Todos (18)' },
              { id: 'hero', label: 'Hero (3)' },
              { id: 'formatos', label: 'Formatos (7)' },
              { id: 'carrossel', label: 'Campanhas (6)' },
              { id: 'estudo', label: 'Estudo (1)' },
              { id: 'plataforma', label: 'Área Alunos (1)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded border border-[#16150F] font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#16150F] text-[#CDF13B]'
                    : 'bg-[#FCFBF6] text-[#16150F] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={resetImages}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#16150F] bg-[#FCFBF6] hover:bg-[#CDF13B] font-bold text-[#16150F] shadow-[2px_2px_0px_#16150F] transition-all"
          >
            <RefreshCw size={13} />
            <span>Restaurar Padrão do HTML</span>
          </button>
        </div>

        {/* Image slots list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-grid-papel">
          <div className="bg-[#FEF9C3] border border-[#16150F] rounded-lg p-3 text-xs font-mono text-[#16150F] flex items-start gap-2">
            <span className="font-bold">💡 Dica:</span>
            <span>
              Você pode inserir links diretos de qualquer imagem (ex: URLs de CDN, Google Drive, Imgur, Cloudinary ou servidores próprios). As alterações refletem imediatamente em todas as seções e no player!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSlots.map((slot) => {
              const isEditing = editingKey === slot.key;

              return (
                <div
                  key={slot.key}
                  className="bg-[#FCFBF6] border-2 border-[#16150F] rounded-lg p-3 shadow-[3px_3px_0px_#16150F] flex flex-col justify-between"
                >
                  <div className="flex gap-3">
                    {/* Thumbnail preview */}
                    <div className="w-20 h-28 flex-shrink-0 bg-neutral-900 border border-[#16150F] rounded overflow-hidden relative">
                      <img
                        src={slot.url}
                        alt={slot.label}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback styled state
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                        <ImageIcon size={18} className="text-white/70" />
                      </div>
                    </div>

                    {/* Metadata & Edit */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[10px] font-bold uppercase bg-[#EFEBDD] px-1.5 py-0.5 rounded border border-[#16150F]">
                          {slot.category}
                        </span>
                        <a
                          href={slot.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-mono text-[#59574F] hover:text-[#16150F] flex items-center gap-0.5 underline"
                        >
                          Abrir <ExternalLink size={10} />
                        </a>
                      </div>

                      <h4 className="font-brico font-bold text-sm text-[#16150F] mt-1 truncate">
                        {slot.label}
                      </h4>
                      <p className="text-[11px] text-[#59574F] line-clamp-2 mt-0.5">
                        {slot.description}
                      </p>
                    </div>
                  </div>

                  {/* URL Input or Action */}
                  <div className="mt-3 pt-2.5 border-t border-[#C9C4B7]">
                    {isEditing ? (
                      <div className="space-y-2">
                        <input
                          type="url"
                          value={tempUrl}
                          onChange={(e) => setTempUrl(e.target.value)}
                          placeholder="Cole a nova URL direta da imagem..."
                          className="w-full px-2.5 py-1.5 text-xs font-mono border border-[#16150F] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#CDF13B]"
                          autoFocus
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditingKey(null)}
                            className="px-2.5 py-1 text-xs font-mono font-bold text-[#59574F] hover:text-[#16150F]"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => saveEditing(slot.key)}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#CDF13B] text-[#16150F] border border-[#16150F] rounded font-mono text-xs font-bold shadow-[1px_1px_0px_#16150F]"
                          >
                            <Check size={12} /> Salvar Link
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-mono text-[10px] text-[#59574F] truncate max-w-[220px] bg-[#EFEBDD]/60 px-2 py-1 rounded border border-[#C9C4B7]">
                          {slot.url}
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => copyToClipboard(slot.url)}
                            className="p-1.5 rounded border border-[#16150F] bg-white hover:bg-[#CDF13B] transition-colors"
                            title="Copiar URL direta"
                          >
                            <Copy size={13} />
                          </button>
                          <button
                            onClick={() => startEditing(slot.key, slot.url)}
                            className="px-2 py-1 rounded border border-[#16150F] bg-[#FCFBF6] hover:bg-[#CDF13B] text-[11px] font-mono font-bold transition-colors"
                          >
                            Alterar Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FCFBF6] border-t-2 border-[#16150F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#59574F]">
            {filteredSlots.length} slots de imagens mapeados com suporte a URLs diretas.
          </span>
          <button
            onClick={() => setIsImageManagerOpen(false)}
            className="w-full sm:w-auto px-5 py-2 bg-[#16150F] text-white font-bold rounded hover:bg-neutral-800 transition-colors"
          >
            Concluir & Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
