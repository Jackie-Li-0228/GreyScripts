if params.len != 3 or params[0]== "-h" or params[0]== "--help" then
    print("Usage: ./scpso <host> <user> <password>\n If <user> is 'guest', password can put whatever you like.");
    exit();
end if
shell = get_shell
remoteshell = connect_service(shell,params[0],22,params[1],params[2])
// 定义一个list，里面存放需要上传的so文件
so_list = ["init.so","kernel_module.so","net.so","aptclient.so","blockchain.so","libssh.so","metaxploit.so","crypto.so","librshell.so"]
for i in range(0,8)
    result = scp(remoteshell,so_list[i],"/lib/",shell)
    if typeof(result) == "string" then
        print("There was an error while sending file: " + result)
    else
        print("File " + so_list[i] + " was sent successfully")
    end if
end for