import React, { useState } from 'react';
import { Home, DollarSign, FileText, Truck, Users, PawPrint, Flame, Leaf } from 'lucide-react';

const mockData = {
  viaturas: {
    salvamento: 12,
    socorro: 25,
    resgate: 18,
    outras: 7
  },
  impactoSocial: {
    vitimasAtendidas: 156,
    animaisSalvos: 43,
    incendiosCombatidos: 89,
    meioAmbiente: 34
  },
  recursos: {
    valorTotal: 1250000.00
  }
};

const IndexPage: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [dashboardData] = useState(mockData);
  
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [dashboardData] = useState(mockData);

  const MainScreen = () => (
    <div className="min-h-screen font-sans relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(#00339922 1px, transparent 1px),
                         linear-gradient(to right, #00339922 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}>
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 2% 5%, rgba(255,0,0,0.08) 0%, transparent 25%),
                      radial-gradient(circle at 98% 98%, rgba(0,51,153,0.08) 0%, transparent 25%)`
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-sm p-6 shadow-lg">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-white p-2 shadow-lg">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="100" fill="#FF0000"/>
              <circle cx="100" cy="100" r="85" fill="#003399"/>
              <path d="M 50 100 L 150 100" stroke="white" strokeWidth="10"/>
              <text x="100" y="150" textAnchor="middle" fill="white" fontSize="20" className="font-sans">CBMPR</text>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-center mt-6 text-[#003399] tracking-wide">TRANSPARÊNCIA</h1>
          <h2 className="text-xl font-medium text-center text-gray-800 tracking-wide mt-2">RECURSOS ALTERNATIVOS</h2>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <div className="w-2 h-2 rounded-full bg-[#003399]"></div>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="p-6 space-y-4">
          {/* Card Container */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentScreen('viaturas')}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl flex items-center justify-between shadow-md hover:from-red-700 hover:to-red-800 text-lg font-medium tracking-wide mb-4 group transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="bg-red-600/50 p-2 rounded-lg group-hover:bg-red-500/50 transition-all duration-300">
                  <Truck className="w-8 h-8" />
                </div>
                <span className="ml-4">VIATURAS</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</div>
            </button>

            <a 
              href="https://drive.google.com/file/d/1n0O4-rxDbRGVD0sSuf7I4E3DZKkaqNrC/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#003399] to-blue-800 text-white p-6 rounded-xl flex items-center justify-between shadow-md hover:from-blue-800 hover:to-blue-900 text-lg font-medium tracking-wide group transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="bg-blue-800/50 p-2 rounded-lg group-hover:bg-blue-700/50 transition-all duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="ml-4">PORTFÓLIO</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</div>
            </a>
          </div>

          {/* Quick Info Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-bold text-[#003399] mb-2">Última Atualização</h3>
            <div className="text-sm text-gray-700">
              <p className="mb-1">Os dados foram atualizados em:</p>
              <p className="font-semibold text-[#003399]">05/02/2025 às 15:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ViaturasScreen = () => (
    <div className="bg-[#003399] min-h-screen pb-20 font-sans">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">VIATURAS</h1>
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="100" fill="#FF0000"/>
            <circle cx="100" cy="100" r="85" fill="#003399"/>
            <text x="100" y="120" textAnchor="middle" fill="white" fontSize="24" className="font-sans">CBMPR</text>
          </svg>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4">
        <div className="bg-blue-900/50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-4 gap-4 text-white text-center">
            <div>
              <div className="text-2xl font-bold">{dashboardData.viaturas.salvamento}</div>
              <div className="text-xs font-medium tracking-wide">SALVAMENTO</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dashboardData.viaturas.socorro}</div>
              <div className="text-xs font-medium tracking-wide">SOCORRO</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dashboardData.viaturas.resgate}</div>
              <div className="text-xs font-medium tracking-wide">RESGATE</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dashboardData.viaturas.outras}</div>
              <div className="text-xs font-medium tracking-wide">OUTRAS</div>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold mb-4 text-[#003399] tracking-wide">IMPACTO SOCIAL</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-[#003399]" />
                <span className="font-medium tracking-wide">VÍTIMAS ATENDIDAS</span>
              </div>
              <span className="font-bold">{dashboardData.impactoSocial.vitimasAtendidas}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <PawPrint className="w-6 h-6 mr-2 text-[#003399]" />
                <span className="font-medium tracking-wide">ANIMAIS SALVOS</span>
              </div>
              <span className="font-bold">{dashboardData.impactoSocial.animaisSalvos}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Flame className="w-6 h-6 mr-2 text-red-600" />
                <span className="font-medium tracking-wide">INCÊNDIOS COMBATIDOS</span>
              </div>
              <span className="font-bold">{dashboardData.impactoSocial.incendiosCombatidos}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Leaf className="w-6 h-6 mr-2 text-[#003399]" />
                <span className="font-medium tracking-wide">MEIO AMBIENTE</span>
              </div>
              <span className="font-bold">{dashboardData.impactoSocial.meioAmbiente}</span>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4 text-[#003399] tracking-wide">RECURSOS DESTINADOS</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-green-600" />
              <span className="font-medium tracking-wide">VALOR TOTAL INDICADO AO CBMPR</span>
            </div>
            <span className="font-bold">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dashboardData.recursos.valorTotal)}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 flex justify-around p-4">
        <button onClick={() => setCurrentScreen('main')} className="text-white hover:text-gray-300">
          <Home className="w-6 h-6" />
        </button>
        <button className="text-white hover:text-gray-300">
          <Truck className="w-6 h-6" />
        </button>
        <a 
          href="https://drive.google.com/file/d/1n0O4-rxDbRGVD0sSuf7I4E3DZKkaqNrC/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FileText className="w-6 h-6" />
        </a>
      </div>
    </div>
  );

  return currentScreen === 'main' ? <MainScreen /> : <ViaturasScreen />;
}

export default IndexPage;
