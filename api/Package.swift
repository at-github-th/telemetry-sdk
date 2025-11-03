
// swift-tools-version:5.9
import PackageDescription
let package = Package(
  name: "telemetry-sdk-api",
  platforms: [.macOS(.v13)],
  products: [.executable(name: "telemetry-sdk-api", targets: ["App"])],
  dependencies: [
    .package(url: "https://github.com/vapor/vapor.git", from: "4.92.0")
  ],
  targets: [
    .executableTarget(name: "App", dependencies: [
      .product(name: "Vapor", package: "vapor")
    ])
  ]
)
