const { FuseBox } = require('fuse-box')
const {
    QuantumPlugin,
    WebIndexPlugin,
    CSSPlugin,
    ImageBase64Plugin,
    PostCSSPlugin,
    UglifyJSPlugin
} = require('fuse-box')

const isProduction = !!process.env.NODE_ENV

const fuse = FuseBox.init({
    homeDir: 'src',
    tsConfig: './config/tsconfig.build.json',
    plugins: [
        CSSPlugin(),
        WebIndexPlugin({
            title: 'Mithril HN',
            template: 'src/index.html'
        }),
        ImageBase64Plugin({ useDefault: true }),
        isProduction &&
            QuantumPlugin({
                removeExportsInterop: false,
                uglify: true,
                treeshake: true
            })
    ],
    output: 'dist/$name.js'
})

const vendor = fuse.bundle('vendor').instructions('~ index.ts')
const app = fuse.bundle('app').instructions(`!> [index.ts]`)

if (!isProduction) {
    fuse.dev({ port: 8090 })
    app.sourceMaps(true).watch().hmr()
}

fuse.run()
