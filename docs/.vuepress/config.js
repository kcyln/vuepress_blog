module.exports = {
  "title": "天涯海阁 | 流年的学习日志",
  "description": "一笑风雷震，一怒沧海寒;一手破苍穹，一剑舞长天！",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "教程文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/theme-reco/"
          },
          {
            "text": "常用安装",
            "link": "/常用安装/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-blog",
        "items": [
          {
            "text": "GitHub",
            "icon": "reco-github",
            "link": "https://github.com/kcyln"
          },
          {
            "text": "博客园",
            "icon": "reco-bokeyuan",
            "link": "https://www.cnblogs.com/kcyln/"
          }
        ]
        
      }
    ],
    "sidebar": 'auto',
    "sidebar": {
      "/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/常用安装/": [
        "",
        "mysql",
        "mongoDB",
        "redis",
        "docker",
        "git"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "技术博文"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "kcyln",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['shizuku', 'miku', 'z16'],
        clean: false,
        modelStyle: {
          position: "fixed",
          right: "20px",
          bottom: "10px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 网络文件
          {
            name: 'My Soul,Your Beats!',
            artist: 'Lia',
            url: '/bgm/Lia - My Soul,Your Beats!.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/kcyln/ImageHosting@latest/2020/09/10/bfe0140c9d4aa65e3ecfd6296c5cd86e.png'
          }
        ],
        position: {
            left: '20px',
            bottom: '10px',
            'z-index': '999999'
        }, 
        autoShrink: true,
        shrinkMode: 'float',
        
      }
    ]
  ]
}