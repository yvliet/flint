import { dbAdapter } from './adapter';

export interface FTSResult {
  document_id: string;
  document_title: string;
  block_id: string;
  content_text: string;
  snippet?: string;
}

export async function searchFullText(queryText: string): Promise<FTSResult[]> {
  if (!queryText || !queryText.trim()) return [];

  const sanitized = queryText.trim().replace(/['"*]/g, '');
  if (!sanitized) return [];

  try {
    // Search both FTS5 and titles
    const ftsResults = await dbAdapter.query<any>(
      `SELECT b.block_id, b.document_id, b.content_text, d.title as document_title
       FROM blocks_fts b
       JOIN documents d ON d.id = b.document_id
       WHERE blocks_fts MATCH ?
       LIMIT 25`,
      [`${sanitized}*`]
    );

    if (ftsResults.length > 0) {
      return ftsResults;
    }

    // Fallback LIKE query if FTS returns no matches
    const fallbackResults = await dbAdapter.query<any>(
      `SELECT b.id as block_id, b.document_id, b.content_text, d.title as document_title
       FROM blocks b
       JOIN documents d ON d.id = b.document_id
       WHERE b.content_text LIKE ? OR d.title LIKE ?
       LIMIT 25`,
      [`%${sanitized}%`, `%${sanitized}%`]
    );

    return fallbackResults;
  } catch (err) {
    console.error('[Flint FTS] Search error:', err);
    return [];
  }
}
