import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useFlintApp, usePluginList } from '@/core/app/AppContext';
import { Extension as Plugin } from '@/core/extensions/Extension';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { useSettingsStore } from '@/store/settingsStore';
import { CustomSelect } from '@/components/common/CustomSelect';
import {
  Search01Icon,
  Download01Icon,
  CheckIcon,
  SparklesIcon,
  Cancel01Icon,
  LayersIcon,
  Database01Icon,
  Calendar01Icon,
  GitForkIcon,
  NeuralNetworkIcon,
  Edit02Icon,
  Tag01Icon,
  SourceCodeIcon,
  TextFontIcon,
  Layout01Icon,
  BookOpen01Icon,
  Bookmark01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  ArrowDown01Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  Store01Icon,
} from '@/components/common/Icons';
import { DocOptionsMenu } from '@/components/editor/DocOptionsMenu';
import { PageSubHeader } from '@/components/layout/PageSubHeader';
import { renderPropertyIcon } from '@/plugins/core/properties/propertyIcons';
import { usePropertiesSettings } from '@/plugins/core/properties/propertiesSettings';
import { CascadeIcon } from '@/plugins/core/cascade/cascadeIcons';

export interface MarketplacePluginItem {
  id: string;
  name: string;
  version: string;
  author: string;
  authorUrl?: string;
  description: string;
  downloads: string;
  stars: number;
  category: 'Productivity' | 'Visualization' | 'Integration' | 'Formatting';
  icon: React.ReactNode;
  featured?: boolean;
  readme?: string;
  bannerImage?: string;
}

export const COMMUNITY_MARKETPLACE_CATALOGUE: MarketplacePluginItem[] = [
  {
    id: 'flint-cascade',
    name: 'Cascade',
    version: '1.0.0',
    author: 'Yuliet Li',
    description: 'Turn notes into sequential cascades (books) with status-bar linking, graph backlinks, and custom sidebar folders.',
    downloads: '52.4k',
    stars: 5,
    category: 'Productivity',
    featured: true,
    icon: <CascadeIcon size={18} className="text-[#dcddde]" />,
  },
  {
    id: 'flint-dataview',
    name: 'Dataview & Query Engine',
    version: '1.4.2',
    author: 'Blacksmith Labs',
    description: 'Dynamic SQL and DQL database query engine to construct live tables and lists across note metadata.',
    downloads: '48.2k',
    stars: 5,
    category: 'Productivity',
    featured: true,
    icon: <Database01Icon size={18} className="text-[#38bdf8]" />,
  },
  {
    id: 'flint-calendar',
    name: 'Calendar & Journal Timeline',
    version: '2.1.0',
    author: 'Liam C.',
    description: 'Interactive monthly calendar view with dots indicating note frequency, mood trackers, and daily logs.',
    downloads: '39.8k',
    stars: 5,
    category: 'Productivity',
    featured: true,
    icon: <Calendar01Icon size={18} className="text-[#f59e0b]" />,
  },
  {
    id: 'flint-excalidraw',
    name: 'Excalidraw Whiteboard',
    version: '1.9.5',
    author: 'Zsolt V.',
    description: 'Infinite hand-drawn whiteboard canvas to sketch diagrams, wireframes, and embed interactive drawings into notes.',
    downloads: '35.1k',
    stars: 5,
    category: 'Visualization',
    featured: true,
    icon: <Layout01Icon size={18} className="text-[#ec4899]" />,
  },
  {
    id: 'flint-mermaid-pro',
    name: 'Mermaid Diagrams Pro',
    version: '1.2.0',
    author: 'Chartist',
    description: 'Extended interactive preview for Mermaid flowcharts, sequence diagrams, mindmaps, and Gantt charts.',
    downloads: '26.4k',
    stars: 4.9,
    category: 'Visualization',
    icon: <NeuralNetworkIcon size={18} className="text-[#a855f7]" />,
  },
  {
    id: 'flint-git-sync',
    name: 'Git Automated Sync',
    version: '1.3.1',
    author: 'Denis O.',
    description: 'Automated background Git backup, periodic auto-commit, push to GitHub/GitLab, and version history.',
    downloads: '31.7k',
    stars: 4.8,
    category: 'Integration',
    featured: true,
    icon: <SourceCodeIcon size={18} className="text-[#10b981]" />,
  },
  {
    id: 'flint-readwise',
    name: 'Readwise & Kindle Sync',
    version: '2.0.1',
    author: 'Readwise Team',
    description: 'Sync your book highlights, Kindle notes, Twitter bookmarks, and web articles seamlessly into your vault.',
    downloads: '22.8k',
    stars: 4.9,
    category: 'Integration',
    icon: <Bookmark01Icon size={18} className="text-[#6366f1]" />,
  },
  {
    id: 'flint-advanced-tables',
    name: 'Advanced Markdown Tables',
    version: '1.5.0',
    author: 'Tony G.',
    description: 'Obsidian-grade table editing with tab/enter navigation, formula calculations, sorting, and markdown alignment.',
    downloads: '42.9k',
    stars: 5,
    category: 'Formatting',
    featured: true,
    icon: <LayersIcon size={18} className="text-[#3b82f6]" />,
  },
  {
    id: 'flint-paste-url',
    name: 'Paste URL as Link Title',
    version: '1.1.2',
    author: 'Oliver K.',
    description: 'Automatically fetches webpage titles when pasting URLs to create clean formatted markdown hyperlinks.',
    downloads: '18.6k',
    stars: 4.8,
    category: 'Productivity',
    icon: <Edit02Icon size={18} className="text-[#14b8a6]" />,
  },
  {
    id: 'flint-linter',
    name: 'Markdown Linter & Formatter',
    version: '1.8.3',
    author: 'Victor B.',
    description: 'Automatic formatting rules for spacing, list indentation, YAML frontmatter consistency, and heading structure.',
    downloads: '29.3k',
    stars: 4.9,
    category: 'Formatting',
    icon: <TextFontIcon size={18} className="text-[#8b5cf6]" />,
  },
  {
    id: 'flint-omnisearch',
    name: 'Omnisearch AI & OCR',
    version: '1.6.0',
    author: 'Scry Team',
    description: 'Deep semantic search engine that indexes handwritten notes, PDFs, images, and full-text documents.',
    downloads: '24.7k',
    stars: 4.9,
    category: 'Productivity',
    icon: <Search01Icon size={18} className="text-[#06b6d4]" />,
  },
  {
    id: 'flint-bionic-reading',
    name: 'Bionic Reading Mode',
    version: '1.0.4',
    author: 'Focus Lab',
    description: 'Emphasizes initial letters of words in Reading view to guide fixation points and maximize reading speed.',
    downloads: '14.1k',
    stars: 4.7,
    category: 'Productivity',
    icon: <SparklesIcon size={18} className="text-[#eab308]" />,
  },
  {
    id: 'flint-tag-wrangler',
    name: 'Tag Wrangler & Renamer',
    version: '1.2.5',
    author: 'P. Johnson',
    description: 'Bulk rename, merge, alias, and manage hierarchies of tags throughout all vault documents.',
    downloads: '19.8k',
    stars: 4.8,
    category: 'Formatting',
    icon: <Tag01Icon size={18} className="text-[#f43f5e]" />,
  },
];

export const MarketplaceView: React.FC = () => {
  const app = useFlintApp();
  const pluginList = usePluginList();
  const {
    canGoBack,
    canGoForward,
    navigateBack,
    navigateForward,
    showToast,
  } = useWorkspaceStore();

  const { propertyIcons, showInDocument: showPropsInDoc, startFolded: startPropsFolded } = usePropertiesSettings();
  const {
    readableLineLength,
    propertiesInDoc,
    foldHeading,
    fontSize,
  } = useSettingsStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'name'>('popular');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isFindOpen, setIsFindOpen] = useState(false);
  const [isPropertiesFolded, setIsPropertiesFolded] = useState(startPropsFolded);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [installingIds, setInstallingIds] = useState<Set<string>>(new Set());
  const [localInstalledIds, setLocalInstalledIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('flint_installed_community_plugins');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const categories = ['All', 'Featured', 'Productivity', 'Visualization', 'Integration', 'Formatting', 'Installed'];

  // Global find shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        setIsFindOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isFindOpen) {
        setIsFindOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFindOpen]);

  useEffect(() => {
    if (isFindOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }, 30);
    }
  }, [isFindOpen]);

  const isPluginInstalled = (id: string) => {
    return (
      localInstalledIds.has(id) ||
      pluginList.community.some((p) => p.id === id) ||
      pluginList.core.some((p) => p.id === id)
    );
  };

  const handleInstallPlugin = (plugin: MarketplacePluginItem) => {
    setInstallingIds((prev) => new Set(prev).add(plugin.id));

    setTimeout(() => {
      // Register in local installed state
      setLocalInstalledIds((prev) => {
        const next = new Set(prev).add(plugin.id);
        localStorage.setItem('flint_installed_community_plugins', JSON.stringify(Array.from(next)));
        return next;
      });

      // Register into runtime plugin manager
      try {
        class CommunityPluginStub extends Plugin {
          onload() {
            console.log(`[Community Plugin] Loaded ${plugin.name}`);
          }
        }

        app.plugins.registerPlugin(
          {
            id: plugin.id,
            name: plugin.name,
            version: plugin.version,
            description: plugin.description,
            author: plugin.author,
            isCore: false,
          },
          CommunityPluginStub
        );
      } catch (err) {
        console.warn('Registered in runtime manager:', err);
      }

      setInstallingIds((prev) => {
        const next = new Set(prev);
        next.delete(plugin.id);
        return next;
      });

      showToast(`Installed "${plugin.name}"`, 'success');
    }, 600);
  };

  const handleUninstallPlugin = (plugin: MarketplacePluginItem) => {
    setLocalInstalledIds((prev) => {
      const next = new Set(prev);
      next.delete(plugin.id);
      localStorage.setItem('flint_installed_community_plugins', JSON.stringify(Array.from(next)));
      return next;
    });

    app.plugins.disablePlugin(plugin.id);
    showToast(`Uninstalled "${plugin.name}"`, 'info');
  };

  const filteredPlugins = useMemo(() => {
    let list = [...COMMUNITY_MARKETPLACE_CATALOGUE];

    // Category filter
    if (selectedCategory === 'Featured') {
      list = list.filter((p) => p.featured);
    } else if (selectedCategory === 'Installed') {
      list = list.filter((p) => isPluginInstalled(p.id));
    } else if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'popular') {
      list.sort((a, b) => {
        const diff = parseFloat(b.downloads) - parseFloat(a.downloads);
        return sortOrder === 'asc' ? -diff : diff;
      });
    } else if (sortBy === 'rating') {
      list.sort((a, b) => {
        const diff = b.stars - a.stars;
        return sortOrder === 'asc' ? -diff : diff;
      });
    } else if (sortBy === 'name') {
      list.sort((a, b) => {
        const diff = a.name.localeCompare(b.name);
        return sortOrder === 'desc' ? -diff : diff;
      });
    }

    return list;
  }, [searchQuery, selectedCategory, sortBy, sortOrder, localInstalledIds, pluginList]);

  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden bg-[#181818] text-[var(--flint-text-primary)] select-none">
      {/* 100% Consistent Page Subheader */}
      <PageSubHeader
        title="Marketplace"
        icon={<Store01Icon size={13} />}
        document={null}
        isFindOpen={isFindOpen}
        onToggleFind={() => setIsFindOpen((prev) => !prev)}
      />

      {/* Main Page Body: Respects exact Note Page margins and empty space */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative">
        {/* In-Note Find Floating Overlay Bar (Exact same search experience as basic pages) */}
        {isFindOpen && (
          <div className="sticky top-2 z-40 px-10 max-w-3xl mx-auto flex justify-end">
            <div className="bg-[#1c1c1c] border border-[#333333] rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.6)] p-1.5 text-xs flex items-center gap-2 w-80">
              <Search01Icon size={13} className="text-[#666] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find in community plugins..."
                className="bg-transparent outline-none flex-1 text-xs text-white placeholder-[#555]"
              />
              {searchQuery && (
                <span className="text-[10px] text-[#777] font-mono shrink-0">
                  {filteredPlugins.length} found
                </span>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsFindOpen(false);
                  setSearchQuery('');
                }}
                className="p-1 rounded text-[#777] hover:text-white hover:bg-[#282828] cursor-pointer"
              >
                <Cancel01Icon size={12} />
              </button>
            </div>
          </div>
        )}

        <div
          className={`mx-auto pt-4 pb-12 flex flex-col min-h-full ${
            readableLineLength ? 'max-w-3xl px-10' : 'w-full px-12 max-w-none'
          }`}
        >
          {/* Document Header: Note Title + In-Document Properties */}
          <div className="relative group/title mb-4">
            {/* Note Title Header */}
            <div className={`${showPropsInDoc && propertiesInDoc !== 'Hidden' && !isPropertiesFolded ? 'mb-3' : 'mb-4'} relative`}>
              {/* Fold button on Document Title Header */}
              {foldHeading && showPropsInDoc && propertiesInDoc !== 'Hidden' && (
                <button
                  type="button"
                  onClick={() => setIsPropertiesFolded((prev) => !prev)}
                  title={isPropertiesFolded ? 'Unfold properties' : 'Fold properties'}
                  className={`absolute -left-[36px] top-[calc(50%-4px)] -translate-y-1/2 w-[36px] h-[32px] flex items-center justify-start pl-[2px] text-[#777] hover:text-[#dcddde] transition-opacity cursor-pointer z-10 ${
                    isPropertiesFolded ? 'opacity-100 text-[#aaa]' : 'opacity-0 group-hover/title:opacity-100'
                  }`}
                >
                  {isPropertiesFolded ? <ChevronRightIcon size={18} /> : <ChevronDownIcon size={18} />}
                </button>
              )}

              <h1
                style={{ fontSize: 'calc(var(--editor-font-size, 12px) * 2.3)' }}
                className="w-full font-bold text-[var(--flint-text-primary)] pb-2 font-sans tracking-tight leading-tight select-text"
              >
                Community Plugins
              </h1>
            </div>

            {/* In-Document Frontmatter Properties Header (100% parity with standard note properties) */}
            {showPropsInDoc && propertiesInDoc !== 'Hidden' && !isPropertiesFolded && (
              <div className="mb-3 text-xs">
                <div className="flex flex-col gap-1.5">
                  {/* Property: Tags */}
                  <div className="flex items-center gap-2 flex-wrap min-h-[28px]">
                    <div className="relative flex items-center shrink-0 w-24">
                      <span className="p-1 -ml-1 text-[var(--flint-text-muted)] cursor-default flex items-center justify-center shrink-0 mr-1 select-none">
                        {renderPropertyIcon('tags', propertyIcons, { size: 12, className: 'text-[var(--flint-text-muted)] shrink-0' })}
                      </span>
                      <span className="text-[11px] font-medium text-[var(--flint-text-muted)] cursor-default truncate flex-1 min-w-0 leading-tight">
                        Tags
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap flex-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[5px] bg-[var(--flint-bg-card)] hover:bg-[var(--flint-bg-card-hover)] text-[var(--flint-text-secondary)] hover:text-[var(--flint-text-primary)] border border-[var(--flint-border-base)] hover:border-[var(--flint-border-strong)] shadow-xs transition-all font-medium text-xs">
                        #marketplace
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[5px] bg-[var(--flint-bg-card)] hover:bg-[var(--flint-bg-card-hover)] text-[var(--flint-text-secondary)] hover:text-[var(--flint-text-primary)] border border-[var(--flint-border-base)] hover:border-[var(--flint-border-strong)] shadow-xs transition-all font-medium text-xs">
                        #extensions
                      </span>
                    </div>
                  </div>

                  {/* Property: Description */}
                  <div className="flex items-center gap-2 min-h-[28px]">
                    <div className="relative flex items-center shrink-0 w-24">
                      <span className="p-1 -ml-1 text-[var(--flint-text-muted)] cursor-default flex items-center justify-center shrink-0 mr-1 select-none">
                        {renderPropertyIcon('description', propertyIcons, { size: 12, className: 'text-[var(--flint-text-muted)] shrink-0' })}
                      </span>
                      <span className="text-[11px] font-medium text-[var(--flint-text-muted)] cursor-default truncate flex-1 min-w-0 leading-tight">
                        Description
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <span className="text-[11px] text-[var(--flint-text-secondary)] font-normal leading-tight font-sans select-text">
                        Discover, install, and extend your Flint vault with community plugins.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Divider Line under Document Header */}
            <div className="border-b border-[var(--flint-border-subtle)] mb-5" />
          </div>

          {/* Category Chips & Sort Controls */}
          <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222] flex-wrap">
            {/* Category Chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-[5px] text-xs transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.35)] ${
                      isSelected
                        ? 'bg-[var(--flint-accent)] hover:bg-[var(--flint-accent-hover)] active:bg-[var(--flint-accent-active)] text-white font-semibold border border-black/20'
                        : 'bg-[#252525] hover:bg-[#2f2f2f] active:bg-[#202020] text-[#999] hover:text-white border border-[#383838] hover:border-[#484848] font-medium'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort Select & Direction Toggle */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#666]">Sort:</span>
              <CustomSelect
                value={sortBy}
                onChange={(val) => setSortBy(val as any)}
                options={[
                  { value: 'popular', label: 'Most Popular' },
                  { value: 'rating', label: 'Top Rated' },
                  { value: 'name', label: 'Name' },
                ]}
                className="w-32"
              />
              <button
                type="button"
                onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                title={sortOrder === 'asc' ? 'Ascending\nClick for descending' : 'Descending\nClick for ascending'}
                className="p-1.5 rounded-[5px] bg-[#252525] hover:bg-[#2f2f2f] active:bg-[#202020] text-[#999] hover:text-white border border-[#383838] hover:border-[#484848] transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.35)] flex items-center justify-center"
              >
                {sortOrder === 'asc' ? <ArrowUp01Icon size={14} /> : <ArrowDown01Icon size={14} />}
              </button>
            </div>
          </div>

          {/* 2-Column Plugin Cards Grid matching page width */}
          {filteredPlugins.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <p className="text-xs text-[#777] mb-3">
                No community plugins match your filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#333333] active:bg-[#222222] text-[#dcddde] hover:text-white rounded-[5px] text-xs font-medium border border-[#383838] hover:border-[#484848] shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredPlugins.map((plugin) => {
                const isInstalled = isPluginInstalled(plugin.id);
                const isInstalling = installingIds.has(plugin.id);

                return (
                  <div
                    key={plugin.id}
                    className="p-3.5 rounded-xl bg-[#1b1b1b] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#333333] transition-all flex flex-col justify-between gap-2.5 group relative shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
                  >
                    {/* Optional Card Banner Image */}
                    {plugin.bannerImage && (
                      <div className="w-full h-24 mb-1 rounded-lg overflow-hidden border border-[#2a2a2a] bg-[#161616]">
                        <img src={plugin.bannerImage} alt={plugin.name} className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Top Row: Icon + Title + Version + Category */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#222222] border border-[#2c2c2c] flex items-center justify-center shrink-0">
                        {plugin.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5 truncate">
                            <button
                              type="button"
                              onClick={() => useWorkspaceStore.getState().openPluginDocTab(plugin.id, plugin.name)}
                              className="text-xs font-medium text-white hover:text-[var(--flint-accent)] transition-colors truncate text-left cursor-pointer"
                            >
                              {plugin.name}
                            </button>
                            <span className="text-[10px] text-[#666] font-mono">v{plugin.version}</span>
                          </div>

                          <span className="text-[10px] px-2 py-0.5 rounded-[5px] bg-[#222222] text-[#999] border border-[#333333] shadow-[0_1px_2px_rgba(0,0,0,0.25)] shrink-0 font-medium">
                            {plugin.category}
                          </span>
                        </div>

                        <div className="text-[10px] text-[#666] mt-0.5 flex items-center gap-1.5">
                          <span>by {plugin.author}</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5">
                            <Download01Icon size={10} className="text-[#555]" />
                            {plugin.downloads}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-[#999] leading-relaxed line-clamp-2 min-h-[32px]">
                      {plugin.description}
                    </p>

                    {/* Bottom Row: Rating & Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#242424] mt-auto">
                      <div className="flex items-center gap-1 text-[#f59e0b] text-[10px]">
                        <span>{'★'.repeat(plugin.stars)}</span>
                        <span className="text-[#666] text-[10px] ml-0.5">{plugin.stars.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {plugin.readme && (
                          <button
                            type="button"
                            onClick={() => useWorkspaceStore.getState().openPluginDocTab(plugin.id, plugin.name)}
                            title={`View ${plugin.name} documentation`}
                            className="w-7 h-7 bg-[#2a2a2a] hover:bg-[#333333] active:bg-[#222222] text-[#dcddde] hover:text-white rounded-[5px] border border-[#383838] hover:border-[#484848] transition-all cursor-pointer flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                          >
                            <BookOpen01Icon size={13} />
                          </button>
                        )}

                        {isInstalled ? (
                          <div className="flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 text-[10px] text-[#10b981] font-medium px-2 py-0.5 rounded-[5px] bg-[#10b981]/10 border border-[#10b981]/25 shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                              <CheckIcon size={11} /> Installed
                            </span>

                            <button
                              type="button"
                              onClick={() => handleUninstallPlugin(plugin)}
                              className="text-[10px] text-[#777] hover:text-[#f85153] px-1.5 py-0.5 rounded hover:bg-[#252525] transition-colors cursor-pointer"
                            >
                              Uninstall
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleInstallPlugin(plugin)}
                            disabled={isInstalling}
                            className="px-3 py-1 bg-[#2a2a2a] hover:bg-[#333333] active:bg-[#222222] text-[#dcddde] hover:text-white rounded-[5px] border border-[#383838] hover:border-[#484848] text-[11px] font-medium transition-all cursor-pointer flex items-center gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.35)] disabled:opacity-50"
                          >
                            <Download01Icon size={11} className={isInstalling ? 'animate-bounce' : ''} />
                            <span>{isInstalling ? 'Installing...' : 'Install'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
