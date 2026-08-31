import { Node, mergeAttributes } from '@tiptap/core';
import katex from 'katex';
import { setupMathLive } from './mathlive-setup';
import { buildPlaceholderLatex } from './math-snippets';

export interface MathChipOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    mathChip: {
      /**
       * Insert a math chip at current selection
       */
      insertMathChip: (options?: { latex?: string; display?: 'inline' | 'block'; startEditing?: boolean }) => ReturnType;
    };
  }
}

export const MathChip = Node.create<MathChipOptions>({
  name: 'mathChip',
  group: 'inline',
  inline: true,
  atom: true,
  selectable: true,
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      latex: {
        default: '',
        parseHTML: (element) => element.getAttribute('data-latex') || '',
        renderHTML: (attributes) => ({
          'data-latex': attributes.latex,
        }),
      },
      display: {
        default: 'inline',
        parseHTML: (element) => element.getAttribute('data-display') || 'inline',
        renderHTML: (attributes) => ({
          'data-display': attributes.display,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type="math-chip"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ 'data-type': 'math-chip' }, this.options.HTMLAttributes, HTMLAttributes)];
  },

  addCommands() {
    return {
      insertMathChip:
        (options = {}) =>
        ({ commands, state }) => {
          const { from, to, empty } = state.selection;
          const selectedText = empty ? '' : state.doc.textBetween(from, to);
          const rawLatex = options.latex !== undefined ? options.latex : (selectedText ? selectedText : '');
          const latex = rawLatex.includes('‹') ? buildPlaceholderLatex(rawLatex, selectedText) : rawLatex;

          return commands.insertContent({
            type: this.name,
            attrs: {
              latex,
              display: options.display || 'inline',
            },
          });
        },
    };
  },

  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      setupMathLive();

      const dom = document.createElement('span');
      dom.className = 'wce-chip wce-math flint-math-node';
      dom.setAttribute('data-type', 'math-chip');
      dom.setAttribute('data-display', node.attrs.display || 'inline');
      dom.tabIndex = 0;

      let isEditing = false;
      let currentLatex = node.attrs.latex || '';
      let activeMf: any = null;
      let lastCursorPos = editor.state.selection.from;

      const onSelectionUpdate = () => {
        const sel = editor.state.selection;
        if (!(sel as any).node) {
          lastCursorPos = sel.from;
        }
      };
      editor.on('selectionUpdate', onSelectionUpdate);

      function renderStaticView() {
        isEditing = false;
        activeMf = null;
        dom.classList.remove('wce-editing');
        dom.innerHTML = '';

        const renderSpan = document.createElement('span');
        renderSpan.className = 'wce-math-render';
        const latex = currentLatex.trim();

        if (latex) {
          try {
            const formattedLatex = node.attrs.display === 'block' || latex.startsWith('\\displaystyle')
              ? latex
              : `\\displaystyle ${latex}`;

            renderSpan.innerHTML = katex.renderToString(formattedLatex, {
              displayMode: node.attrs.display === 'block',
              throwOnError: false,
            });
          } catch (e) {
            renderSpan.className = 'wce-math-render md-math-error';
            renderSpan.textContent = latex;
          }
        } else {
          renderSpan.innerHTML = '<span class="md-syntax-dimmed flint-math-delim">$</span><span class="md-syntax-dimmed flint-math-delim">$</span>';
        }

        dom.appendChild(renderSpan);
      }

      function enterEditMode(opts: { selectAll?: boolean; fromArrow?: 'left' | 'right' | boolean } = {}) {
        if (isEditing || !editor.isEditable) return;
        isEditing = true;
        dom.classList.add('wce-editing');
        dom.innerHTML = '';

        // Left dimmed dollar
        const leftDollar = document.createElement('span');
        leftDollar.className = 'md-syntax-dimmed flint-math-delim';
        leftDollar.textContent = '$';
        dom.appendChild(leftDollar);

        const mf = document.createElement('math-field') as any;
        activeMf = mf;
        mf.className = 'flint-live-math-field';
        mf.mathVirtualKeyboardPolicy = 'manual';
        mf.setAttribute('math-virtual-keyboard-policy', 'manual');
        mf.setAttribute('menu-items', 'none');
        mf.setAttribute('smart-mode', 'false');
        mf.setAttribute('default-mode', node.attrs.display === 'block' ? 'math' : 'inline-math');
        mf.value = currentLatex;
        dom.appendChild(mf);

        // Right dimmed dollar
        const rightDollar = document.createElement('span');
        rightDollar.className = 'md-syntax-dimmed flint-math-delim';
        rightDollar.textContent = '$';
        dom.appendChild(rightDollar);

        const commit = () => {
          if (!isEditing) return;
          const newLatex = mf.value;
          currentLatex = newLatex;

          if (typeof getPos === 'function') {
            const pos = getPos();
            if (typeof pos === 'number') {
              if (!newLatex.trim()) {
                editor.commands.deleteRange({ from: pos, to: pos + 1 });
                return;
              }
              editor.commands.updateAttributes('mathChip', { latex: newLatex });
            }
          }
          renderStaticView();
        };

        mf.addEventListener('input', () => {
          currentLatex = mf.value;
          if (typeof getPos === 'function') {
            const pos = getPos();
            if (typeof pos === 'number') {
              editor.commands.updateAttributes('mathChip', { latex: currentLatex });
            }
          }
        });

        mf.addEventListener('move-out', (e: any) => {
          const dir = e.detail?.direction;
          if (dir === 'backward' || dir === 'left' || dir === 'upward') {
            commit();
            if (typeof getPos === 'function') {
              const pos = getPos();
              if (typeof pos === 'number') {
                editor.chain().focus().setTextSelection(pos).run();
              }
            }
          } else if (dir === 'forward' || dir === 'right' || dir === 'downward') {
            commit();
            if (typeof getPos === 'function') {
              const pos = getPos();
              if (typeof pos === 'number') {
                editor.chain().focus().setTextSelection(pos + 1).run();
              }
            }
          }
        });

        mf.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            commit();
            editor.commands.focus();
          } else if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            commit();
            if (typeof getPos === 'function') {
              const pos = getPos();
              if (typeof pos === 'number') {
                editor.chain().focus().setTextSelection(pos + 1).run();
              }
            }
          } else if (e.key === 'Backspace') {
            const val = (mf.value || '').trim();
            if (!val || val === '\\placeholder{}' || val === '\\square' || val === '') {
              e.preventDefault();
              e.stopPropagation();
              if (typeof getPos === 'function') {
                const pos = getPos();
                if (typeof pos === 'number') {
                  editor.chain().focus().deleteRange({ from: pos, to: pos + 1 }).insertContentAt(pos, '$').run();
                }
              }
            }
          } else if (e.key === 'ArrowLeft' && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            const beforePos = mf.position;
            setTimeout(() => {
              if (isEditing && mf.position === beforePos) {
                commit();
                if (typeof getPos === 'function') {
                  const pos = getPos();
                  if (typeof pos === 'number') {
                    editor.chain().focus().setTextSelection(pos).run();
                  }
                }
              }
            }, 0);
          } else if (e.key === 'ArrowRight' && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
            const beforePos = mf.position;
            setTimeout(() => {
              if (isEditing && mf.position === beforePos) {
                commit();
                if (typeof getPos === 'function') {
                  const pos = getPos();
                  if (typeof pos === 'number') {
                    editor.chain().focus().setTextSelection(pos + 1).run();
                  }
                }
              }
            }, 0);
          } else if (e.key === 'Tab') {
            e.preventDefault();
            e.stopPropagation();
            if (e.shiftKey) {
              const beforePos = mf.position;
              mf.executeCommand('moveToPreviousPlaceholder');
              if (mf.position === beforePos) {
                commit();
                if (typeof getPos === 'function') {
                  const pos = getPos();
                  if (typeof pos === 'number') {
                    editor.chain().focus().setTextSelection(pos).run();
                  }
                }
              }
            } else {
              const beforePos = mf.position;
              mf.executeCommand('moveToNextPlaceholder');
              if (mf.position === beforePos) {
                commit();
                if (typeof getPos === 'function') {
                  const pos = getPos();
                  if (typeof pos === 'number') {
                    editor.chain().focus().setTextSelection(pos + 1).run();
                  }
                }
              }
            }
          }
        });

        mf.addEventListener('blur', () => {
          setTimeout(() => {
            if (dom.contains(document.activeElement)) return;
            commit();
          }, 80);
        });

        setTimeout(() => {
          mf.focus();
          if (opts.selectAll) {
            mf.executeCommand('selectAll');
          } else if (opts.fromArrow === 'left') {
            mf.executeCommand('moveToMathFieldEnd');
          } else if (opts.fromArrow === 'right') {
            mf.executeCommand('moveToMathFieldStart');
          } else if (/\\placeholder\{\}/.test(currentLatex)) {
            mf.executeCommand('moveToNextPlaceholder');
          }
        }, 10);
      }

      // Initial render
      renderStaticView();

      // Click to edit
      dom.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        enterEditMode({ selectAll: false });
      });

      // Keydown on chip when focused in view mode
      dom.addEventListener('keydown', (e) => {
        if (isEditing) return;
        if (e.key === 'Backspace') {
          e.preventDefault();
          e.stopPropagation();
          enterEditMode({ fromArrow: 'left' });
          setTimeout(() => {
            if (activeMf) activeMf.executeCommand('deleteBackward');
          }, 20);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          e.stopPropagation();
          enterEditMode({ fromArrow: 'left' });
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          e.stopPropagation();
          enterEditMode({ fromArrow: 'right' });
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          enterEditMode({ selectAll: false });
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          enterEditMode({ fromArrow: 'left' });
          setTimeout(() => {
            if (activeMf) activeMf.executeCommand(['insert', e.key]);
          }, 20);
        }
      });

      // Auto-enter edit mode if newly inserted with placeholder or empty
      if (node.attrs.latex.includes('\\placeholder') || !node.attrs.latex) {
        setTimeout(() => {
          enterEditMode();
        }, 20);
      }

      return {
        dom,
        selectNode: () => {
          if (isEditing) return;
          let fromDirection: 'left' | 'right' = 'right';
          if (typeof getPos === 'function') {
            const pos = getPos();
            if (typeof pos === 'number') {
              fromDirection = lastCursorPos > pos ? 'left' : 'right';
            }
          }
          enterEditMode({ fromArrow: fromDirection });
        },
        deselectNode: () => {
          // Handled by blur/commit
        },
        stopEvent: (event: Event) => {
          return isEditing;
        },
        ignoreMutation: () => true,
        update: (updatedNode) => {
          if (updatedNode.type.name !== 'mathChip') return false;
          if (updatedNode.attrs.latex !== currentLatex && !isEditing) {
            currentLatex = updatedNode.attrs.latex;
            renderStaticView();
          }
          return true;
        },
        destroy: () => {
          editor.off('selectionUpdate', onSelectionUpdate);
          dom.innerHTML = '';
        },
      };
    };
  },
});
