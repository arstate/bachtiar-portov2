const fs = require('fs');

let content = fs.readFileSync('components/selected-works-section.tsx', 'utf8');

// Replace Video Modal
content = content.replace(
  /\{\/\* Video Modal \*\/\}\s*<AnimatePresence>\s*\{selectedVideo && \(\s*<motion\.div[\s\S]*?onClick=\{\(\) => setSelectedVideo\(null\)\}\s*>\s*<motion\.div[\s\S]*?onClick=\{\(e\) => e\.stopPropagation\(\)\}\s*>/,
  `{/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
            className="fixed inset-0 z-[9999] w-full h-[100dvh] overflow-y-auto bg-[#111] flex flex-col"
          >`
);

// We need to fix the closing tags of Video Modal since we removed one </div>
const videoModalEndRegex = /<\/div>\s*<\/motion\.div>\s*<\/motion\.div>\s*<\/AnimatePresence>/;
content = content.replace(
  videoModalEndRegex,
  `</div>\n            </motion.div>\n        )}\n      </AnimatePresence>`
);
// wait the end might be different for video modal.
// Let's use string replace for Video Modal start.
