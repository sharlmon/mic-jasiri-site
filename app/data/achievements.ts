export interface Achievement {
  index: string
  title: string
  role: string
  format: string
  description: string
  image?: string
  imageAlt: string
  /** Vertical/horizontal focus point so the poster crops well inside the square frame. */
  focus?: 'top' | 'c42' | 'c45' | 'c55'
  badge?: string
  /** YouTube video id: opens the in-page player. */
  videoId?: string
  /** Fallback external link when there is no embeddable video. */
  externalUrl?: { href: string; label: string }
  tag?: string
}

export const achievements: Achievement[] = [
  {
    index: '01', title: 'Shell Club Surprises Campaign', role: 'Producer', format: 'Commercial Campaign',
    description: 'High-profile commercial brand campaign produced for Shell Club, engaging audiences nationwide through dynamic on-location storytelling.',
    image: '/assets/work/posters/shell-club-surprises.jpg', imageAlt: 'Shell Club Surprises campaign poster', badge: 'Featured Campaign', videoId: '9S-1DiG5oqs',
  },
  {
    index: '02', title: 'Jumping for Change', role: 'Producer', format: 'Short Film',
    description: 'NBA award-winning short film celebrating resilience, community impact, and the transformative power of sport in Kenya.',
    image: '/assets/work/posters/jumping-for-change.jpg', imageAlt: 'Jumping for Change film poster', focus: 'c42', badge: 'NBA Award-Winning',
    externalUrl: { href: 'https://www.nba.com/watch/video/jumping-for-change', label: 'Watch on NBA.com' },
  },
  {
    index: '03', title: 'Nai-Rich', role: 'Series & Line Producer', format: 'TV Series',
    description: 'Hit television series produced with full end-to-end production management, scheduling, and high-standard broadcast delivery.',
    image: '/assets/work/posters/nai-rich.jpg', imageAlt: 'Nai-Rich Showmax Original series poster', videoId: 'ONWp-k6Bj3c',
  },
  {
    index: '04', title: 'Oh Sisters', role: 'Content & Line Producer', format: 'Reality TV Series',
    description: 'Celebrated reality TV series steering narrative storylines, episodic content pacing, and comprehensive line production logistics.',
    image: '/assets/work/posters/oh-sisters.jpg', imageAlt: 'Oh Sister! series poster', focus: 'c55', videoId: 'c5Uskh1LuTI',
  },
  {
    index: '05', title: 'Date My Family Kenya', role: 'Producer', format: 'Format Television',
    description: 'Widely acclaimed East African adaptation of the international dating format, produced for major regional broadcast networks.',
    image: '/assets/work/posters/date-my-family-kenya.webp', imageAlt: 'Date My Family Kenya show poster', focus: 'c45', videoId: 'M4_vP6aFimM',
  },
  {
    index: '06', title: 'Date My Family Uganda', role: 'Production Manager', format: 'Format Television',
    description: 'Cross-border production management leading technical crews, casting operations, and multi-location field shoots across Uganda.',
    imageAlt: 'Date My Family Uganda', tag: 'Broadcast Production Management',
  },
]
