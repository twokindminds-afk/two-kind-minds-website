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
export type PillarId = typeof pillars[number]['id'];
export interface ContentItem {id:string;title:string;description:string;pillar:PillarId;format:'Podcast'|'Video'|'Article';url:string}
// Add verified published content here. Empty arrays show coming-soon states.
export const content: ContentItem[] = [];
export interface Episode {id:string;title:string;description:string;url:string;guest?:string}
export const episodes: Episode[] = [];
export const reflections: Episode[] = [];
