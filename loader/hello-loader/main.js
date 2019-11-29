// 这里要导入我们创建的文件，因为不是js类型的文件，所以webpack会按照默认的js进行识别打包
// 所以我们这里的导入就是使用文件，来触发loader进行转换
import data from './test.hello';
function test() {
    let element = document.getElementById('app');
    console.log(data);
    element.innerText = data;
}
test();
