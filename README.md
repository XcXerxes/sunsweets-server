#sunSweets-server


二、forever
forever能做更多的事情，比如分别记录输出和错误日志，宕机重启，热部署。比如可以在js中作为api使用
2.1安装forever
npm install forever -g
2.2启动服务
service forever start
2.2使用forever启动js文件
forever start app.js
2.3停止js文件
forever stop app.js
2.4启动js文件并输出日志文件
forever start -l forever.log -o out.log -e err.log app.js
2.5重启js文件
forever restart app.js
     2.6查看正在运行的进程
forever list

