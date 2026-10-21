import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldCheck, Zap, Lock, CreditCard, QrCode, CheckCircle2 } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, selectedPlan, currency, showToast } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isCheckoutOpen) return null;

  const priceFormatted =
    currency === 'BRL'
      ? `R$ ${selectedPlan.priceBRL}`
      : `$ ${selectedPlan.priceUSD}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      showToast('Por favor, preencha seu nome e e-mail.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      showToast('Inscrição confirmada com sucesso! Bem-vindo(a) ao AvatarHype!');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FCFBF6] border-2 border-[#16150F] rounded-2xl shadow-[8px_8px_0px_#16150F] overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#CDF13B] border-b-2 border-[#16150F] p-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#16150F] text-[#CDF13B] px-2 py-0.5 rounded">
              INSCRIÇÃO SEGURA
            </span>
            <h3 className="font-brico font-extrabold text-xl text-[#16150F] mt-1">
              {selectedPlan.name}
            </h3>
          </div>
          <button
            onClick={closeCheckout}
            className="w-8 h-8 rounded border border-[#16150F] bg-white flex items-center justify-center hover:bg-[#16150F] hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {isCompleted ? (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="w-16 h-16 bg-[#CDF13B] border-2 border-[#16150F] rounded-full mx-auto flex items-center justify-center shadow-[3px_3px_0px_#16150F]">
              <CheckCircle2 size={32} className="text-[#16150F]" />
            </div>
            <h4 className="font-brico font-extrabold text-2xl text-[#16150F]">
              Matrícula Confirmada!
            </h4>
            <p className="text-sm text-[#59574F] max-w-md mx-auto">
              Enviamos os dados de acesso imediato para o e-mail{' '}
              <strong className="text-[#16150F]">{email}</strong>. Você já pode acessar a Área de Membros, baixar os 86 prompts e assistir às aulas.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsCompleted(false);
                  closeCheckout();
                }}
                className="px-6 py-3 bg-[#CDF13B] text-[#16150F] font-brico font-bold rounded-lg border-2 border-[#16150F] shadow-[3px_3px_0px_#16150F] hover:shadow-[1px_1px_0px_#16150F] transition-all"
              >
                Começar a Estudar Agora ↗
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-5">
            {/* Price display */}
            <div className="bg-[#EFEBDD] border border-[#16150F]/20 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#59574F] block">Valor do investimento</span>
                <span className="font-brico font-extrabold text-3xl text-[#16150F]">
                  {priceFormatted}
                </span>
                {currency === 'BRL' && (
                  <span className="text-xs font-mono text-[#59574F] block mt-0.5">
                    {selectedPlan.installmentsBRL}
                  </span>
                )}
              </div>
              <div className="text-right font-mono text-[11px] text-[#59574F]">
                <span className="bg-[#CDF13B] text-[#16150F] px-2 py-0.5 rounded font-bold border border-[#16150F] inline-block mb-1">
                  ACESSO VITALÍCIO
                </span>
                <span className="block">Sem renovação automática</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block font-bold text-[#16150F] mb-1">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Nathan Perrud"
                  className="w-full px-3 py-2 border border-[#16150F] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#CDF13B]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#16150F] mb-1">Seu E-mail (onde receberá as aulas):</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: seuemail@gmail.com"
                  className="w-full px-3 py-2 border border-[#16150F] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#CDF13B]"
                />
              </div>
            </div>

            {/* Payment method selector */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#16150F] block">
                Forma de Pagamento:
              </span>
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-lg border-2 border-[#16150F] flex items-center justify-center gap-2 font-bold transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#CDF13B] shadow-[2px_2px_0px_#16150F]'
                      : 'bg-white text-[#59574F]'
                  }`}
                >
                  <CreditCard size={15} />
                  <span>Cartão de Crédito</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-lg border-2 border-[#16150F] flex items-center justify-center gap-2 font-bold transition-all ${
                    paymentMethod === 'pix'
                      ? 'bg-[#CDF13B] shadow-[2px_2px_0px_#16150F]'
                      : 'bg-white text-[#59574F]'
                  }`}
                >
                  <QrCode size={15} />
                  <span>PIX Imediato</span>
                </button>
              </div>
            </div>

            {/* Features check */}
            <div className="bg-white border border-[#C9C4B7] rounded-lg p-3 space-y-1.5 text-xs">
              {selectedPlan.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#59574F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16150F]"></span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 bg-[#CDF13B] hover:bg-[#bde02c] text-[#16150F] font-brico font-extrabold text-base rounded-lg border-2 border-[#16150F] shadow-[4px_4px_0px_#16150F] hover:shadow-[2px_2px_0px_#16150F] transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Processando acesso...</span>
              ) : (
                <>
                  <span>Garantir Minha Vaga por {priceFormatted}</span>
                  <Zap size={16} />
                </>
              )}
            </button>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-[#59574F] pt-2 border-t border-[#C9C4B7]">
              <span className="flex items-center gap-1">
                <Lock size={11} /> Criptografia 256-bit
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={11} /> 7 Dias de Garantia Incondicional
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
