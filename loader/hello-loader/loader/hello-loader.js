module.exports = function loader(source) {
    // source = "hello loader！"
    return `export default ${ JSON.stringify(source) }`; // 返回值
};
