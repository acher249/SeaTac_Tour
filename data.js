var APP_DATA = {
  "scenes": [
    {
      "id": "0-seating-area",
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
        "yaw": 3.115018901405506,
        "pitch": -0.034363515617926055,
        "fov": 1.5671975481182459
      },
      "linkHotspots": [
        {
          "yaw": -3.0442074123539715,
          "pitch": -0.06258099004532625,
          "rotation": 0,
          "target": "1-vendor-area"
        },
        {
          "yaw": 3.0408937863860857,
          "pitch": -0.05573802821917617,
          "rotation": 0,
          "target": "2-bridge-to-concourse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vendor-area",
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
        "yaw": -2.45095933496232,
        "pitch": 0.1301478932693403,
        "fov": 1.5671975481182459
      },
      "linkHotspots": [
        {
          "yaw": 3.126432129861781,
          "pitch": 0.08646648863167883,
          "rotation": 0,
          "target": "0-seating-area"
        },
        {
          "yaw": -0.5748212255611538,
          "pitch": 0.019447818034839415,
          "rotation": 0,
          "target": "2-bridge-to-concourse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bridge-to-concourse",
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
        "yaw": 3.0116714104408526,
        "pitch": 0.0024339556005372742,
        "fov": 1.5671975481182459
      },
      "linkHotspots": [
        {
          "yaw": -3.0096786270601648,
          "pitch": 0.06926485154916939,
          "rotation": 0,
          "target": "0-seating-area"
        },
        {
          "yaw": 2.712320263162596,
          "pitch": 0.018326044221440796,
          "rotation": 0,
          "target": "1-vendor-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
