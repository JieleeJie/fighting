/* 
    https://blog.csdn.net/sanlingwu/article/details/88375116
    https://blog.csdn.net/xuedan1992/article/details/80188661
*/

var readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var sum=0;//最终结果
var n=0;//一共有几行，是第一个输入值
var count=0;
var lines=[];//存每行的输入字符串
rl.on('line',function(line){
    if(count===0){
        n=parseInt(line.split(' ')[0]);
        count=1;
    }  
    else{
        lines.push(line);
        count++;
        if(count-1===n){//n行全部输入完成
            for(var i=0;i<lines.length;i++){
                var lineitem=lines[i].split(' ');
                sum+=parseInt(lineitem[0])+parseInt(lineitem[1]);//累加每一行的两个数
            }
            console.log(sum);//输出最终结果
        }
    }
});
// 输入一行
// rl.on('line', function(line){
//    var tokens = line.split(' ');
//     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
// });
