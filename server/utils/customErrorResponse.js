

export default function customErrorResponse(message,error){
    return ({
        success:false,
        message:message,
        error:error
    })
}