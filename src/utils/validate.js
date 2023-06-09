//验证密码
export const validate_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

//验证邮箱
export const reg_email = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

//验证手机
export const reg_phone = /^1[3456789]\d{9}$/;

export function validate_email(value) {
  return reg_email.test(value)
}