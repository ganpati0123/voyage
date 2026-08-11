const embeds = {
  cursedGold: {
    title: '👑 Cursed Gold 💀 || Pirate tale',
    src: 'https://sketchfab.com/models/b1e28eeec0fd48799155c24ab0e07a56/embed',
  },
  forestLoner: {
    title: 'DAE Diorama - Forest Loner',
    src: 'https://sketchfab.com/models/2c5593e43ce84fec9cb0e70e3b06fa19/embed',
  },
  pirateFlag: {
    title: 'Pirate Flag animated',
    src: 'https://sketchfab.com/models/e6b2c8a5be864ad6afba3bdfdde1aff2/embed',
  },
  mobileHome: {
    title: 'Mobile Home',
    src: 'https://sketchfab.com/models/5240b1dbc29c4ea28be7f91b3638951a/embed',
  },
}

export default function SketchfabEmbed({ model }) {
  const embed = embeds[model]

  if (!embed) {
    throw new Error(`Unknown Sketchfab model: ${model}`)
  }

  return (
    <div className="sketchfab-visual">
      <div className="sketchfab-frame">
        <iframe
          title={embed.title}
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          src={embed.src}
        />
      </div>
      <span className="sketchfab-caption">Live 3D chart · Native animation</span>
    </div>
  )
}