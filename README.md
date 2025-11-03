# Telemetry SDK

**Stack:** Node.js (Express)  
**API:** http://127.0.0.1:5108  
**Web:** http://localhost:5508

## Run (local)

### API
cd telemetry-sdk-native/api && npm i && node index.js

### Web (static tester)
cd telemetry-sdk-native/web && python3 -m http.server 5508

## Test
- **Ping:** curl -s http://127.0.0.1:5108 | jq .
- **Ingest:** POST /api/events/ingest\n- **Recent:** GET /api/events/recent

