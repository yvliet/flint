import 'mathlive';

let isMathLiveConfigured = false;

/**
 * Configure MathLive global settings and custom virtual keyboard layout
 * to match Flint's dark theme and the custom keypad layout.
 */
export function setupMathLive(): void {
  if (isMathLiveConfigured || typeof window === 'undefined') return;
  isMathLiveConfigured = true;

  if (window.mathVirtualKeyboard) {
    // Customize virtual keyboard layouts
    window.mathVirtualKeyboard.layouts = [
      {
        label: '123',
        tooltip: 'Numbers & Common Math',
        rows: [
          [
            { latex: 'x^{#?}', label: '<i>x</i><sup><i>y</i></sup>', class: 'flint-math-key' },
            { latex: 'n^{#?}', label: '<i>n</i><sup><i>a</i></sup>', class: 'flint-math-key flint-math-gap-right' },
            { latex: '7', class: 'flint-math-key' },
            { latex: '8', class: 'flint-math-key' },
            { latex: '9', class: 'flint-math-key' },
            { latex: '\\div', label: '÷', class: 'flint-math-key flint-math-gap-right' },
            { latex: 'e', label: 'e<sup>ln</sup>', class: 'flint-math-key' },
            { latex: 'i', class: 'flint-math-key' },
            { latex: '\\pi', label: 'π<sup>sin</sup>', class: 'flint-math-key' },
          ],
          [
            { latex: '<', class: 'flint-math-key' },
            { latex: '>', class: 'flint-math-key flint-math-gap-right' },
            { latex: '4', class: 'flint-math-key' },
            { latex: '5', class: 'flint-math-key' },
            { latex: '6', class: 'flint-math-key' },
            { latex: '\\times', label: '×', class: 'flint-math-key flint-math-gap-right' },
            { latex: '{#?}^2', label: '■<sup>2</sup>', class: 'flint-math-key' },
            { latex: '{#?}^{#?}', label: '■<sup>□</sup>', class: 'flint-math-key' },
            { latex: '\\sqrt{#?}', label: '√□', class: 'flint-math-key' },
          ],
          [
            { latex: '(', class: 'flint-math-key' },
            { latex: ')', class: 'flint-math-key flint-math-gap-right' },
            { latex: '1', class: 'flint-math-key' },
            { latex: '2', class: 'flint-math-key' },
            { latex: '3', class: 'flint-math-key' },
            { latex: '-', class: 'flint-math-key flint-math-gap-right' },
            { latex: '\\int_{0}^{\\infty} {#?} \\, dx', label: '∫<sub>0</sub><sup>∞</sup>□dx', class: 'flint-math-key' },
            { latex: '\\forall', label: '∀', class: 'flint-math-key' },
            {
              command: ['performWithFeedback', 'deleteBackward'],
              label: '⌫',
              class: 'flint-math-key flint-action-key',
            },
          ],
          [
            {
              command: ['switchKeyboardLayer', 'shift'],
              label: '⇧',
              class: 'flint-math-key flint-shift-key',
            },
            { latex: '\\frac{#?}{#?}', label: '<sup>□</sup>/<sub>□</sub>', class: 'flint-math-key flint-math-gap-right' },
            { latex: '0', class: 'flint-math-key' },
            { latex: '.', class: 'flint-math-key' },
            { latex: '=', class: 'flint-math-key' },
            { latex: '+', class: 'flint-math-key flint-math-gap-right' },
            {
              command: ['performWithFeedback', 'moveToPreviousChar'],
              label: '‹',
              class: 'flint-math-key',
            },
            {
              command: ['performWithFeedback', 'moveToNextChar'],
              label: '›',
              class: 'flint-math-key',
            },
            {
              command: ['performWithFeedback', 'commit'],
              label: '⏎',
              class: 'flint-math-key flint-action-key',
            },
          ],
        ],
      },
      {
        label: '∞≠∈',
        tooltip: 'Symbols & Relations',
        rows: [
          [
            { latex: '\\infty', label: '∞', class: 'flint-math-key' },
            { latex: '\\neq', label: '≠', class: 'flint-math-key' },
            { latex: '\\in', label: '∈', class: 'flint-math-key' },
            { latex: '\\notin', label: '∉', class: 'flint-math-key' },
            { latex: '\\subset', label: '⊂', class: 'flint-math-key' },
            { latex: '\\subseteq', label: '⊆', class: 'flint-math-key' },
            { latex: '\\cup', label: '∪', class: 'flint-math-key' },
            { latex: '\\cap', label: '∩', class: 'flint-math-key' },
          ],
          [
            { latex: '\\leq', label: '≤', class: 'flint-math-key' },
            { latex: '\\geq', label: '≥', class: 'flint-math-key' },
            { latex: '\\approx', label: '≈', class: 'flint-math-key' },
            { latex: '\\equiv', label: '≡', class: 'flint-math-key' },
            { latex: '\\pm', label: '±', class: 'flint-math-key' },
            { latex: '\\mp', label: '∓', class: 'flint-math-key' },
            { latex: '\\cdot', label: '·', class: 'flint-math-key' },
            { latex: '\\partial', label: '∂', class: 'flint-math-key' },
          ],
          [
            { latex: '\\sum_{{#?}=1}^{#?}', label: '∑', class: 'flint-math-key' },
            { latex: '\\prod_{{#?}=1}^{#?}', label: '∏', class: 'flint-math-key' },
            { latex: '\\int_{#?}^{#?}', label: '∫', class: 'flint-math-key' },
            { latex: '\\lim_{{#?} \\to {#?}}', label: 'lim', class: 'flint-math-key' },
            { latex: '\\rightarrow', label: '→', class: 'flint-math-key' },
            { latex: '\\leftarrow', label: '←', class: 'flint-math-key' },
            { latex: '\\implies', label: '⟹', class: 'flint-math-key' },
            { latex: '\\iff', label: '⟺', class: 'flint-math-key' },
          ],
          [
            { latex: '\\left[ {#?} \\right]', label: '[ ]', class: 'flint-math-key' },
            { latex: '\\left\\{ {#?} \\right\\}', label: '{ }', class: 'flint-math-key' },
            { latex: '\\left| {#?} \\right|', label: '| |', class: 'flint-math-key' },
            { latex: '\\begin{pmatrix} {#?} & {#?} \\\\ {#?} & {#?} \\end{pmatrix}', label: '( matrix )', class: 'flint-math-key' },
            { latex: '\\begin{cases} {#?} \\\\ {#?} \\end{cases}', label: '{ cases', class: 'flint-math-key' },
            { latex: '\\text{{#?}}', label: 'text', class: 'flint-math-key' },
            {
              command: ['performWithFeedback', 'deleteBackward'],
              label: '⌫',
              class: 'flint-math-key flint-action-key',
            },
            {
              command: ['performWithFeedback', 'commit'],
              label: '⏎',
              class: 'flint-math-key flint-action-key',
            },
          ],
        ],
      },
      {
        label: 'abc',
        tooltip: 'Variables & Alphabet',
        rows: [
          [
            { latex: 'a', class: 'flint-math-key' },
            { latex: 'b', class: 'flint-math-key' },
            { latex: 'c', class: 'flint-math-key' },
            { latex: 'd', class: 'flint-math-key' },
            { latex: 'e', class: 'flint-math-key' },
            { latex: 'f', class: 'flint-math-key' },
            { latex: 'g', class: 'flint-math-key' },
            { latex: 'h', class: 'flint-math-key' },
            { latex: 'i', class: 'flint-math-key' },
            { latex: 'j', class: 'flint-math-key' },
          ],
          [
            { latex: 'k', class: 'flint-math-key' },
            { latex: 'l', class: 'flint-math-key' },
            { latex: 'm', class: 'flint-math-key' },
            { latex: 'n', class: 'flint-math-key' },
            { latex: 'o', class: 'flint-math-key' },
            { latex: 'p', class: 'flint-math-key' },
            { latex: 'q', class: 'flint-math-key' },
            { latex: 'r', class: 'flint-math-key' },
            { latex: 's', class: 'flint-math-key' },
            { latex: 't', class: 'flint-math-key' },
          ],
          [
            { latex: 'u', class: 'flint-math-key' },
            { latex: 'v', class: 'flint-math-key' },
            { latex: 'w', class: 'flint-math-key' },
            { latex: 'x', class: 'flint-math-key' },
            { latex: 'y', class: 'flint-math-key' },
            { latex: 'z', class: 'flint-math-key' },
            { latex: 'A', class: 'flint-math-key' },
            { latex: 'B', class: 'flint-math-key' },
            { latex: 'C', class: 'flint-math-key' },
            {
              command: ['performWithFeedback', 'deleteBackward'],
              label: '⌫',
              class: 'flint-math-key flint-action-key',
            },
          ],
        ],
      },
      {
        label: 'αβγ',
        tooltip: 'Greek Alphabet',
        rows: [
          [
            { latex: '\\alpha', label: 'α', class: 'flint-math-key' },
            { latex: '\\beta', label: 'β', class: 'flint-math-key' },
            { latex: '\\gamma', label: 'γ', class: 'flint-math-key' },
            { latex: '\\delta', label: 'δ', class: 'flint-math-key' },
            { latex: '\\epsilon', label: 'ε', class: 'flint-math-key' },
            { latex: '\\zeta', label: 'ζ', class: 'flint-math-key' },
            { latex: '\\eta', label: 'η', class: 'flint-math-key' },
            { latex: '\\theta', label: 'θ', class: 'flint-math-key' },
          ],
          [
            { latex: '\\iota', label: 'ι', class: 'flint-math-key' },
            { latex: '\\kappa', label: 'κ', class: 'flint-math-key' },
            { latex: '\\lambda', label: 'λ', class: 'flint-math-key' },
            { latex: '\\mu', label: 'μ', class: 'flint-math-key' },
            { latex: '\\nu', label: 'ν', class: 'flint-math-key' },
            { latex: '\\xi', label: 'ξ', class: 'flint-math-key' },
            { latex: '\\pi', label: 'π', class: 'flint-math-key' },
            { latex: '\\rho', label: 'ρ', class: 'flint-math-key' },
          ],
          [
            { latex: '\\sigma', label: 'σ', class: 'flint-math-key' },
            { latex: '\\tau', label: 'τ', class: 'flint-math-key' },
            { latex: '\\phi', label: 'φ', class: 'flint-math-key' },
            { latex: '\\chi', label: 'χ', class: 'flint-math-key' },
            { latex: '\\psi', label: 'ψ', class: 'flint-math-key' },
            { latex: '\\omega', label: 'ω', class: 'flint-math-key' },
            { latex: '\\Delta', label: 'Δ', class: 'flint-math-key' },
            { latex: '\\Gamma', label: 'Γ', class: 'flint-math-key' },
          ],
          [
            { latex: '\\Theta', label: 'Θ', class: 'flint-math-key' },
            { latex: '\\Lambda', label: 'Λ', class: 'flint-math-key' },
            { latex: '\\Sigma', label: 'Σ', class: 'flint-math-key' },
            { latex: '\\Phi', label: 'Φ', class: 'flint-math-key' },
            { latex: '\\Psi', label: 'Ψ', class: 'flint-math-key' },
            { latex: '\\Omega', label: 'Ω', class: 'flint-math-key' },
            {
              command: ['performWithFeedback', 'deleteBackward'],
              label: '⌫',
              class: 'flint-math-key flint-action-key',
            },
            {
              command: ['performWithFeedback', 'commit'],
              label: '⏎',
              class: 'flint-math-key flint-action-key',
            },
          ],
        ],
      },
    ];
  }
}
