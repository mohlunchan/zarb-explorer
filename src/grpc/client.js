var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    __dirname + '/zarb.proto',
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [
            __dirname + '/googleapis',
        ]
    });

var zarb = grpc.loadPackageDefinition(packageDefinition).zarb;

function main() {
    var client = new zarb.Zarb("139.162.135.180:9090",
        grpc.credentials.createInsecure());

    client.getBlock({ height: 100, verbosity: 1 }, function (err, response) {
        console.log('Error:', err);
        console.log('Response:', response.json);
    });
}

main();