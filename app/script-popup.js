const fs = require('fs');

let content = fs.readFileSync('components/selected-works-section.tsx', 'utf8');

// Replace Left Side text content wrapper
content = content.replace(
  /<div className="w-full md:w-\[30%\] h-full flex flex-col p-8 lg:p-12 border-r border-white\/10 overflow-y-auto custom-scrollbar">/,
  `<div className={\`w-full md:w-[30%] flex flex-col bg-[#111] z-20 border-r border-white/10 transition-all duration-500 ease-in-out custom-scrollbar \${
                  showMobileDetails 
                    ? "h-[60vh] md:h-full overflow-y-auto p-6 md:p-8 lg:p-12" 
                    : "h-auto p-6 md:p-8 lg:p-12 overflow-hidden"
                }\`}>
                
                {/* Mobile Toggle Button */}
                <button 
                  className="md:hidden w-full flex justify-center items-center py-2 mb-2 text-white/50 hover:text-white transition-colors"
                  onClick={() => setShowMobileDetails(!showMobileDetails)}
                >
                  <svg 
                    className={\`w-6 h-6 transition-transform duration-300 \${showMobileDetails ? "rotate-180" : ""}\`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
`
);

content = content.replace(
  /<div className="flex-1 h-full overflow-y-auto custom-scrollbar p-4 md:p-8 bg-\[#0a0a0a\]">/,
  `<div className="flex-1 h-full overflow-y-auto custom-scrollbar p-4 md:p-8 bg-[#0a0a0a] pb-[150px] md:pb-8">`
);

content = content.replace(
  /className="relative w-full max-w-\[95vw\] md:max-w-7xl h-\[85vh\] md:h-\[80vh\] bg-\[#111\] border border-white\/10 flex flex-col md:flex-row overflow-hidden shadow-2xl"/,
  `className="relative w-full max-w-[95vw] md:max-w-7xl h-[85vh] md:h-[80vh] bg-[#111] border border-white/10 flex flex-col-reverse md:flex-row overflow-hidden shadow-2xl"`
);

// We need to hide the description on mobile if not expanded.
// Also, the Event Name / Location should be shown at the bottom.
// Wait, the user wants: "NAMANYA AJA MISAL PREWEDDING NITA & BUSTA"
// Right now, Category is "PREWEDDING" and Location is usually the event name.
// We can wrap the rest of the text content in a div that is hidden on mobile unless expanded.

// Let's modify the text area to group the title/location and hide the rest.

// We will do this manually in the next step.

fs.writeFileSync('components/selected-works-section.tsx', content);
