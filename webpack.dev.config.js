import {spawn} from 'child_process';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {join,resolve} from 'path';

const SRC_DIR=join(resolve(),'src'),
    OUTPUT_DIR=join(resolve(),'dist'),
    PUBLIC_DIR=join(resolve(),'public');

export default {
    mode:'development',
    entry:SRC_DIR+'/renderer/index.js',
    output:{
        path:OUTPUT_DIR,
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            use:[{
                loader:'babel-loader'
            }]
        },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.(jpe?g|svg|png)$/,
            use:[{
                loader:'file-loader?name=img/[name]__[hash:base64:5].[ext]'
            }]
        },{
            test:/\.(eot|ttf|woff|woff2)$/,
            use:[{
                loader:'file-loader?name=font/[name]__[hash:base64:5].[ext]'
            }]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html',
            inject:'body'
        })
    ],
    target:'electron-renderer',
    watch:true,
    devtool:'cheap-source-map',
    devServer:{
        contentBase:PUBLIC_DIR,
        stats:{
            colors:true,
            chunks:false,
            children:false
        },
        before(){
            spawn('electron',['.'],{
                shell:true,
                env:process.env,
                stdio:'inherit'
            })
            .on('close',()=>process.exit(0))
            .on('error',spawnError=>console.error(spawnError));
        }
    }
};

