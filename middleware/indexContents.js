export default function({store, redirect}){
    console.log('page redirected!')
    return redirect(301,'/posts')
}