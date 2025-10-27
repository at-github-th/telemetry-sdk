
import Vapor

func routes(_ app: Application) throws {
  app.get { req in ["name":"SDK for Telemetry/Analytics API","ok": true] }
  app.get("api","dash","summary") { req in ["events":1024,"users":87,"errors":3] as [String:Any] }
}

var env = try Environment.detect()
try LoggingSystem.bootstrap(from: &env)
let app = Application(env)
defer { app.shutdown() }
try routes(app)
app.http.server.configuration.port = 5108
try app.run()
