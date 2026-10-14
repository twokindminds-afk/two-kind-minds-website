export const socials = [
{name:'YouTube',url:'https://www.youtube.com/@twokindminds'},
{name:'Instagram',url:'https://www.instagram.com/twokindminds/'},
{name:'TikTok',url:'https://www.tiktok.com/@twokindminds'},
{name:'X',url:'https://x.com/webby7981'}];
export const pillars = [
{id:'financial',title:'Financial Freedom',description:'Explore Bitcoin, money and the possibilities of a more independent financial future.',symbol:'◈'},
{id:'mind',title:'Freedom of Mind',description:'Question old beliefs, discover fresh perspectives and make room for inner growth.',symbol:'☼'},
{id:'family',title:'Family & Relationships',description:'Build deeper connections through compassion, awareness and shared understanding.',symbol:'♡'},
{id:'living',title:'Freedom to Live',description:'Create a conscious, meaningful life that reflects what matters to you.',symbol:'↗'}] as const;
// Put the supplied photo in public/images/ and set src to 'images/mat-and-bobbie.jpg'.
// Relative image paths are resolved against Vite's base, including GitHub Pages.
export const storyPhoto: { src: string; alt: string; objectPosition?: string } | null = {src:'7CC4914C-6B98-42C7-8A52-10E4B96E10A8_1_105_c.jpeg',alt:'Mat and Bobbie standing together outdoors in front of green foliage',objectPosition:'center 42%'};

export type PillarId = typeof pillars[number]['id'];
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  pillar: PillarId;
  format: 'Podcast' | 'Video' | 'Article';
  url: string;
  // Optional thumbnail supplied for a real published video or article.
  thumbnail?: { src: string; alt: string };
}

export function assetUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;
}
// Add verified published content here. Empty arrays show coming-soon states.
export const content: ContentItem[] = [{id:'how-ready-are-we',title:'How Ready Are We? Bitcoin and the Broken Money System',description:'Mat explores financial preparedness, questioning the money system and why Bitcoin deserves a closer look.',pillar:'financial',format:'Podcast',url:'https://www.youtube.com/watch?v=Lvg88G2l-lw',thumbnail:{src:'https://img.youtube.com/vi/Lvg88G2l-lw/hqdefault.jpg',alt:'YouTube thumbnail for Mat’s Bitcoin podcast episode'}}];
export interface Episode {id:string;title:string;description:string;url:string;guest?:string}
export const episodes: Episode[] = [{id:'how-ready-are-we',title:'How Ready Are We? Bitcoin and the Broken Money System',description:'Mat reflects on being prepared, the financial system and Bitcoin as an alternative.',url:'https://www.youtube.com/watch?v=Lvg88G2l-lw'}];
export const reflections: Episode[] = [];
