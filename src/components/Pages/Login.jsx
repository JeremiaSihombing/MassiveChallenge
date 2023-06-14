import Background from "../../assets/bglogin.jpg"
import User from "../../../public/icons/user.svg"
import FormInput from "../../utilities/FormInput"
import Button from "../../utilities/Button"

const Login = () => {
    return(
        <div>
            <img src={Background} className="h-screen w-full object-cover z-0" alt="" />
            <div className="h-screen w-full bg-white/40 absolute top-0 z-50 flex justify-center items-center">
                <div className="w-[500px] h-fit bg-[#1A4D2E] rounded-3xl text-white flex flex-col items-center justify-start p-8 gap-4">
                    <h1 className="font-semibold text-4xl">ADMIN LOGIN</h1>
                    <img src={User} height={115} width={115} alt="user" />
                    <form className="flex flex-col gap-4" action="/dashboard">
                        <FormInput type='input' id='username' title='Username' />
                        <FormInput type='password' id='password' title='Password' />
                        <div className="w-full flex justify-center">
                            <Button text='LOGIN' color='outline outline-white outline-1 w-[150px] rounded-xl' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login