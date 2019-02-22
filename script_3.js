let number = prompt("Hello , bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function p(height, width) {
  width = width || 1;
  if (height === 1) {
    console.log('#'.repeat(width));
  } else if (height > 1) {
    console.log('  '.repeat(height - 1) + '#'.repeat(width));
    p(height - 1, width + 1);
  }
}

p(number);
