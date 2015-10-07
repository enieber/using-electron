var app = require('app')
var BW = require('browser-window')

require('crash-reporter').start()

var mainWindow = null

app.on('window-all-closed', function(){

   if(process.platform != 'darwin'){
	app.quit()
    }
})

app.on('ready', function(){

 mainWindow = new BW({width:1000, height:800})

 mainWindow.loadUrl('file://' + __dirname + '/index.html')

 mainWindow.on('closed', function(){
   mainWindow = null
 })
})


