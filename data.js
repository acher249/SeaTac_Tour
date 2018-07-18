var APP_DATA = {
  "scenes": [
    {
      "id": "0-bridge-to-concourse",
      "name": "Bridge To Concourse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3200,
      "initialViewParameters": {
        "yaw": 2.938646840120133,
        "pitch": 0.02926348004838175,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.013774833666421,
          "pitch": 0.056969612686277316,
          "rotation": 0,
          "target": "1-seating-area"
        },
        {
          "yaw": 2.7020203317258664,
          "pitch": 0.013394073897076808,
          "rotation": 0,
          "target": "2-vendor-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-seating-area",
      "name": "Seating Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3200,
      "initialViewParameters": {
        "yaw": 2.9361317417067054,
        "pitch": -0.015638459005696603,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0504079682053273,
          "pitch": -0.07835010590752489,
          "rotation": 0,
          "target": "2-vendor-area"
        },
        {
          "yaw": 3.0553202411192837,
          "pitch": -0.07707156244661384,
          "rotation": 0,
          "target": "0-bridge-to-concourse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vendor-area",
      "name": "Vendor Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3200,
      "initialViewParameters": {
        "yaw": -2.5748795822162265,
        "pitch": 0.1424837376075061,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5653532796246274,
          "pitch": 0.015758667035058238,
          "rotation": 0,
          "target": "0-bridge-to-concourse"
        },
        {
          "yaw": 3.135258261247717,
          "pitch": 0.07334999647829932,
          "rotation": 0,
          "target": "1-seating-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
