
export default function customSuccessResponse(message,data){
    return ({
        success:true,
        message:message,
        data:data
    })
}