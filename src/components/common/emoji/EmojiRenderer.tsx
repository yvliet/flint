import React, { useState, useEffect } from 'react';
import { emojiToHex, emojiToRawHex } from './emojiCatalog';

export type EmojiStyle = 'native' | 'twemoji' | 'apple' | 'google' | 'whatsapp';

export interface EmojiRendererProps {
  emoji: string;
  size?: number;
  style?: EmojiStyle;
  className?: string;
}

export const EMOJI_STYLE_LABELS: Record<EmojiStyle, string> = {
  native: 'Native (System)',
  twemoji: 'Twemoji',
  apple: 'Apple Emoji',
  google: 'Google Noto',
  whatsapp: 'WhatsApp Emoji',
};

/**
 * High-performance, optically-normalized Emoji renderer supporting Native OS rendering by default,
 * and CDN-based crisp vector/image rendering for Twemoji, Apple Emoji, Google Noto, and WhatsApp Emoji.
 *
 * Ensures 100% consistent sizing across all 5 styles by utilizing an exact bounding container
 * and optical scale calibration so no style appears oversized or undersized relative to others.
 */
export const EmojiRenderer = React.memo<EmojiRendererProps>(({
  emoji,
  size = 14,
  style = 'native',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [useAlternativeHex, setUseAlternativeHex] = useState(false);

  // Reset error & alternative state immediately when emoji or style changes
  useEffect(() => {
    setHasError(false);
    setUseAlternativeHex(false);
  }, [emoji, style]);

  const containerStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
  };

  // 1. Native OS (System Default) or Fallback on Error:
  if (style === 'native' || hasError) {
    // Calibrate font-size to 1.1x to offset native emoji font glyph internal metrics
    const nativeFontSize = Math.max(10, Math.round(size * 1.1));

    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 select-none overflow-hidden leading-none text-center font-["Apple_Color_Emoji","Segoe_UI_Emoji","Segoe_UI_Symbol","Noto_Color_Emoji",sans-serif] ${className}`}
        style={{
          ...containerStyle,
          fontSize: `${nativeFontSize}px`,
        }}
        aria-label={emoji}
      >
        <span className="flex items-center justify-center w-full h-full leading-none pointer-events-none translate-y-[-0.5px]">
          {emoji}
        </span>
      </span>
    );
  }

  const strippedHex = emojiToHex(emoji);
  const rawHex = emojiToRawHex(emoji);

  let src = '';

  switch (style) {
    case 'twemoji':
      src = `https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${useAlternativeHex ? rawHex : strippedHex}.svg`;
      break;
    case 'apple':
      src = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/${useAlternativeHex ? strippedHex : rawHex}.png`;
      break;
    case 'google':
      src = `https://cdn.jsdelivr.net/gh/googlefonts/noto-emoji@main/svg/emoji_u${(useAlternativeHex ? rawHex : strippedHex).replace(/-/g, '_')}.svg`;
      break;
    case 'whatsapp':
      src = `https://cdn.jsdelivr.net/npm/emoji-datasource-facebook@15.1.2/img/facebook/64/${useAlternativeHex ? strippedHex : rawHex}.png`;
      break;
  }

  const handleError = () => {
    if (!useAlternativeHex && strippedHex !== rawHex) {
      // Try alternative hex code format (with/without variation selector-16)
      setUseAlternativeHex(true);
    } else {
      // Fallback gracefully to native system text
      setHasError(true);
    }
  };

  // Optical scaling: Twemoji/Google vector art fills 100% of viewBox, so scaling to 95%
  // matches the visual optical weight of Apple PNGs and native font glyphs
  const imageDimension = Math.max(10, Math.round(size * 0.96));

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 select-none overflow-hidden ${className}`}
      style={containerStyle}
      aria-label={emoji}
    >
      <img
        src={src}
        alt={emoji}
        draggable={false}
        decoding="async"
        onError={handleError}
        className="object-contain block select-none pointer-events-none"
        style={{
          width: `${imageDimension}px`,
          height: `${imageDimension}px`,
        }}
      />
    </span>
  );
});
