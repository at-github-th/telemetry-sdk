# Telemetry SDK

Language: Node.js (Express)

## How to run

API
```bash
cd telemetry-sdk-native/api && npm i && node index.js
```

Web
```bash
cd telemetry-sdk-native/web && python3 -m http.server 5508
```

Open http://localhost:5508

## Endpoints
- Ingest: POST /api/events/ingest\n- Recent: GET /api/events/recent
