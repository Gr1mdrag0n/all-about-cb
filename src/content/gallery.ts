// The photography gallery. One entry per photo.
// `px` is the matching 500px page URL (filled in as they're mapped;
// empty string falls back to the profile link).

export interface GalleryPhoto {
  file: string // basename in src/assets/gallery/
  alt: string
  px: string
  loc?: string // location caption, where known
}

export interface GallerySection {
  title: string
  photos: GalleryPhoto[]
}

export const PX_PROFILE = 'https://500px.com/cbisesar'

export const GALLERY: GallerySection[] = [
  {
    title: 'Wildlife',
    photos: [
      { file: 'img-8707', alt: 'An osprey diving, talons out', px: '' },
      { file: 'img-8701', alt: 'A hawk gliding across a blue sky', px: '' },
      { file: 'img-8635', alt: 'A hawk high in a clear blue sky', px: '' },
      { file: 'img-8438', alt: 'A duck and her ducklings on sparkling water', px: '' },
      { file: 'img-8465', alt: 'A duck paddling through golden water', px: '' },
      { file: 'img-8583', alt: 'A squirrel peering around a tree trunk', px: '' },
      { file: 'img-8593', alt: 'A squirrel alert on the forest floor', px: '' },
      { file: 'img-1119', alt: 'A squirrel making its way down a tree', px: 'https://500px.com/photo/1039064270/ecureuil-by-caradec-bisesar' },
      { file: 'img-8596', alt: 'Two squirrels on a tree trunk', px: '' },
    ],
  },
  {
    title: 'Cities & Landmarks',
    photos: [
      { file: 'img-2801-enhanced-nr', alt: 'Tower Bridge lit up at night, from above', px: '', loc: 'London' },
      { file: 'img-3043-enhanced-nr', alt: 'Tower Bridge at night from the river', px: '', loc: 'London' },
      { file: 'img-2976-enhanced-nr-edit', alt: 'The Old Royal Naval College at dusk', px: '', loc: 'Greenwich, London' },
      { file: 'img-3466-hdr', alt: 'The Eiffel Tower from below, looking up', px: '', loc: 'Paris' },
      { file: 'img-3460-hdr-edit', alt: 'The Eiffel Tower against a blue sky', px: '', loc: 'Paris' },
      { file: 'img-3741-enhanced-nr', alt: 'Wellington Arch at dusk with light trails', px: '', loc: 'London' },
      { file: 'img-4032-enhanced-nr-edit', alt: 'Elizabeth Tower (Big Ben) at night', px: 'https://500px.com/photo/1081293058/elizabeth-tower-at-night-by-caradec-bisesar', loc: 'London' },
      { file: 'img-4020', alt: 'The London Eye up close, glowing magenta', px: '', loc: 'London' },
      { file: 'img-4012', alt: 'The London Eye lit magenta, across the Thames', px: '', loc: 'London' },
    ],
  },
  {
    title: 'Landscapes',
    photos: [
      { file: 'img-2327', alt: 'A sky full of golden sunset clouds', px: 'https://500px.com/photo/39592482/sunset-july-05-2013-by-caradec-bisesar' },
      { file: 'img-3400-hdr', alt: 'Stone ruins backlit by the setting sun', px: 'https://500px.com/photo/161437549/ruins-in-the-sunset-by-caradec-bisesar' },
      { file: 'img-4322-edit-edit-edit', alt: 'Flowerpot Island rock formation over turquoise water', px: 'https://500px.com/photo/168321127/flowerpot-island-by-caradec-bisesar', loc: 'Tobermory, ON' },
      { file: 'img-4624', alt: 'Big Tub Lighthouse on a rocky shore', px: '', loc: 'Tobermory, ON' },
      { file: 'img-7853', alt: 'A lone tree above the valley', px: 'https://500px.com/photo/226098039/stawamus-chief-by-caradec-bisesar', loc: 'Stawamus Chief, Squamish BC' },
      { file: 'img-3369', alt: 'A classical statue among autumn trees', px: '' },
      { file: 'img-4297-enhanced-nr', alt: 'A moody black-and-white waterfront', px: '' },
      { file: 'img-8668', alt: 'Driftwood on still water', px: '' },
      { file: 'img-9057', alt: 'Backlit grasses at golden hour', px: '' },
      { file: 'img-1042-2', alt: 'A wide, dramatic sunset over the city', px: 'https://500px.com/photo/116368007/falling-sun-by-caradec-bisesar' },
    ],
  },
  {
    title: 'After Dark',
    photos: [
      { file: 'img-1667-trail', alt: 'Star trails raining across the night sky', px: 'https://500px.com/photo/180883517/raining-stars-by-caradec-bisesar' },
      { file: 'img-5124-edit-2', alt: 'Star trails over a lake and a dock', px: 'https://500px.com/photo/180697643/take-cover!-by-caradec-bisesar' },
      { file: 'img-5152-edit', alt: 'Star trails over the night sky', px: 'https://500px.com/photo/122347821/cancun-star-trails-by-caradec-bisesar', loc: 'Cancún' },
      { file: 'img-1527', alt: 'A row of candles glowing in the dark', px: 'https://500px.com/photo/38355444/candles-in-a-row-by-caradec-bisesar' },
      { file: 'img-6854', alt: 'An illuminated crossing at night', px: 'https://500px.com/photo/63650503/winter-crossroads-by-caradec-bisesar' },
      { file: 'img-6251', alt: 'A little red door set into a tree in the woods', px: 'https://500px.com/photo/226684571/little-red-door-in-the-woods-by-caradec-bisesar' },
    ],
  },
]
