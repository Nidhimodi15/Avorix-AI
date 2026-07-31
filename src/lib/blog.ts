import frontMatter from 'front-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string;
  content: string;
}

// Vite feature: Import all .md files in the blog directory as raw text
const mdFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in mdFiles) {
    const rawContent = mdFiles[path] as string;
    
    // Extract frontmatter and markdown body
    const { attributes, body } = frontMatter<any>(rawContent);
    
    // Extract filename without extension to use as slug
    // e.g., "../content/blog/sample-post.md" -> "sample-post"
    const filename = path.split('/').pop() || '';
    const slug = filename.replace(/\.md$/, '');

    posts.push({
      slug,
      title: attributes.title || 'Untitled',
      date: attributes.date || '',
      excerpt: attributes.excerpt || '',
      author: attributes.author || 'Aeviq AI Team',
      coverImage: attributes.coverImage,
      content: body
    });
  }

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}
