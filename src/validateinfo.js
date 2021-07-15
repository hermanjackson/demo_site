export default function validateInfo(values){
    let  errors = {}

    if(!values.username.trim()){
        errors.username = "Username required" 
    }
    if(!values.email){
        errors.email ="email require"

    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.%+-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email ="Email address is invalid"
    }
    if(!values.password){
        errors.password = 'Password is required'
    } else if (values.password.length <9){
        errors.password = "password needs to be 9 characters or more"
    }
    if(!values.password2){
        errors.password2 = "password is required"
    }else if (values.password2 !== values.password){
        errors.password2 = "Passwords do not match";
    }
    return errors;
}