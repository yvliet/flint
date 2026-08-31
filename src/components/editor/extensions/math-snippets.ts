/**
 * Math Snippet Templates and Placeholder Engine (ported from user's math editor)
 */

export interface MathSnippet {
  label: string;
  title: string;
  tex: string;
}

export const KIR_MATH_SNIPPETS: MathSnippet[] = [
  { label: 'x²', title: 'Superscript / Power', tex: '^{‹a›}' },
  { label: 'x₂', title: 'Subscript', tex: '_{‹a›}' },
  { label: 'a/b', title: 'Fraction', tex: '\\frac{‹a›}{‹b›}' },
  { label: '√', title: 'Square root', tex: '\\sqrt{‹a›}' },
  { label: 'ⁿ√', title: 'nth root', tex: '\\sqrt[‹a›]{‹b›}' },
  { label: 'Σ', title: 'Summation', tex: '\\sum_{i=1}^{n} ‹a›' },
  { label: '∫', title: 'Definite Integral', tex: '\\int_{‹a›}^{‹b›}\\,dx' },
  { label: 'lim', title: 'Limit', tex: '\\lim_{‹a› \\to ‹b›} ‹c›' },
  { label: '→', title: 'Arrow', tex: '\\rightarrow ‹a›' },
  { label: 'π', title: 'Pi', tex: '\\pi' },
  { label: 'Δ', title: 'Delta', tex: '\\Delta' },
  { label: '≤', title: 'Less than or equal', tex: '\\leq' },
  { label: '≥', title: 'Greater than or equal', tex: '\\geq' },
  { label: '≠', title: 'Not equal', tex: '\\neq' },
  { label: '±', title: 'Plus-minus', tex: '\\pm' },
  { label: '·', title: 'Dot', tex: '\\cdot' },
  { label: '∞', title: 'Infinity', tex: '\\infty' },
  { label: '( )', title: 'Parentheses', tex: '\\left( ‹a› \\right)' },
  { label: '[ ]', title: 'Brackets', tex: '\\left[ ‹a› \\right]' },
  { label: '{ }', title: 'Braces', tex: '\\left\\{ ‹a› \\right\\}' },
  { label: '| |', title: 'Absolute value', tex: '\\left| ‹a› \\right|' },
  { label: 'matrix', title: 'Matrix 2x2', tex: '\\begin{pmatrix} ‹a› & ‹b› \\\\ ‹c› & ‹d› \\end{pmatrix}' },
  { label: 'cases', title: 'Piecewise cases', tex: '\\begin{cases} ‹a› \\\\ ‹b› \\end{cases}' },
  { label: '$…$', title: 'New custom formula', tex: '‹a›' },
];

export interface TemplatePart {
  type: 'static' | 'slot';
  text?: string;
  id?: string;
}

export function splitTemplate(tex: string): TemplatePart[] {
  const parts: TemplatePart[] = [];
  const re = /‹([a-z])›/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(tex)) !== null) {
    if (m.index > last) {
      parts.push({ type: 'static', text: tex.slice(last, m.index) });
    }
    parts.push({ type: 'slot', id: m[1] });
    last = re.lastIndex;
  }
  if (last < tex.length) {
    parts.push({ type: 'static', text: tex.slice(last) });
  }
  return parts;
}

export function buildPlaceholderLatex(templateTex: string, selectedText?: string): string {
  const isBareDollar = templateTex.startsWith('$') && templateTex.endsWith('$');
  const inner = isBareDollar ? templateTex.slice(1, -1) : templateTex;
  const parts = splitTemplate(inner);

  let latex = '';
  let sawSlot = false;
  parts.forEach((part) => {
    if (part.type === 'static') {
      latex += part.text || '';
    } else if (!sawSlot && selectedText) {
      latex += selectedText;
      sawSlot = true;
    } else {
      latex += '\\placeholder{}';
      sawSlot = true;
    }
  });

  return latex || (selectedText || '\\placeholder{}');
}
