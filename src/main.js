import {app,BrowserWindow} from 'electron';
import logger from 'electron-log';
import {join,resolve} from 'path';
import {format} from 'url';

logger.catchError({
    showDialog:false
});

let mainWindow,
    env=(process.env.WEBPACK_DEV_SERVER==='true')?'development':'production';

function init(){
    mainWindow=new BrowserWindow({
        width:1280,
        height:720,
        show:false,
        center:true,
        icon:join(resolve(),'..','public','icon.png'),
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    let indexPath;

    if(env==='development'){
        indexPath=format({
            protocol:'http',
            host:'localhost:2999',
            pathname:'index.html',
            slashed:true
        });
    }else{
        indexPath=format({
            protocol:'file',
            pathname:join(resolve(),'..','dist','index.html'),
            slashes:true
        });
    }

    mainWindow.loadURL(indexPath);
    mainWindow.setMenu(null);

    mainWindow.once('ready-to-show',()=>{
        mainWindow.show();

        if(env==='development'){
            mainWindow.webContents.openDevTools();
        }
    });

    mainWindow.on('closed',()=>{
        mainWindow=null;
    });
}

app.on('ready',init);

app.on('window-all-closed',()=>{
    app.quit();
});

app.on('activate',()=>{
    if(mainWindow===null){
        init();
    }
});

