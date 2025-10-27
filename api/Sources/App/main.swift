import Vapor
func routes(_ app: Application) throws {
  app.get { req in ["name":"Telemetry SDK API","ok": true] }
  app.get("api","dash","summary") { req in ["events":1024,"users":87,"errors":3] as [String:Any] }
}
var env = try! Environment.detect(); try! LoggingSystem.bootstrap(from: &env)
let app = Application(env); defer { app.shutdown() }
let cors = CORSMiddleware(configuration: .init(allowedOrigin: .all, allowedMethods: [.GET,.POST,.PUT,.DELETE,.OPTIONS], allowedHeaders: [.accept,.contentType,.origin,.authorization,.xRequestedWith]))
app.middleware.use(cors)
try routes(app); app.http.server.configuration.port = 5108; try app.run()
