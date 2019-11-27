// 这里要导入我们创建的文件，因为文件创建之后不使用，是不会被打包的，也就不要loader
// 所以我们这里的导入就是使用文件，来触发loader进行转换
import data from './test.hello';
function test() {
    let element = document.getElementById('app');
    console.log(data);
    element.innerText = data;
}
test();
