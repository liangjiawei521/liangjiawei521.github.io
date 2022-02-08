export const validateAccount = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号'));
    } else {
        if (/^[a-z\d]{3,6}$/i.test(value)) {
            callback();
        } else {
            callback("请输入3-6之间的字母或数字");
        }
    }
};
export const validatePw = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (/^[a-z\d]{3,6}$/i.test(value)) {
            callback();
        } else {
            callback("请输入3-6之间的字母或数字");
        }
    }
};