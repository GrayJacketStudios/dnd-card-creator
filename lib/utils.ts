import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const convertAsterisksToBold = (text: string): string => {
  // Simple conversion: Replace *text* with <b>text</b>
  // Note: This example doesn't escape HTML for simplicity; consider security implications.
  return text.replace(/(\*)(.*?)(\*)/g, '<b>$2</b>');
};

// @ts-ignore
export function drawFormattedText(ctx, text, startX, startY, lineHeight, size= '14px', font= 'Palatino') {
  const lines = text.split('\n'); // Split the text into lines

  lines.forEach((line: string, lineIndex: number) => {
    let x = startX;
    let y = startY + lineIndex * lineHeight;

    // Split the line into parts for bold (*) and underline (_) text
    const parts = line.split(/(\*[^*]+\*|_[^_]+_)/g);

    parts.forEach(part => {
      let isBold = part.startsWith('*') && part.endsWith('*');
      let isUnderline = part.startsWith('_') && part.endsWith('_');

      // Remove the markers if present
      if (isBold || isUnderline) {
        part = part.substring(1, part.length - 1);
      }

      // Check again in case there is nested formatting
      if (part.startsWith('*') && part.endsWith('*')) {
        isBold = true;
        part = part.substring(1, part.length - 1);
      }
      if (part.startsWith('_') && part.endsWith('_')) {
        isUnderline = true;
        part = part.substring(1, part.length - 1);
      }

      // Set font style based on whether the part is bold
      ctx.font = isBold ? `bold ${size} ${font}` : `${size} ${font}`;

      // Draw the text part
      ctx.fillText(part, x, y);

      // Draw underline if needed
      if (isUnderline) {
        const textWidth = ctx.measureText(part).width;
        ctx.beginPath();
        ctx.moveTo(x, y + 2); // Move a bit below the text; adjust as needed
        ctx.lineTo(x + textWidth, y + 2); // Draw line to the end of the text
        ctx.strokeStyle = 'black'; // Set the line color same as the text
        ctx.stroke();
      }

      // Move x coordinate for the next text part
      x += ctx.measureText(part).width;
    });
  });
}