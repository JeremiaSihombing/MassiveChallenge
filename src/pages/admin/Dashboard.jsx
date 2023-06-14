import Card from "../../utilities/Card.dashboard"
import Akun from "../../../public/icons/user.svg"

const Dashboard = () => {
    return (
        <div className="w-full h-screen bg-red-[#f5f5f5]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore delectus aut provident voluptatibus aspernatur dignissimos et quia consectetur, quo dicta commodi, animi tempora quos veniam earum vero consequatur. Aspernatur, explicabo!</p>
            <Card icon={Akun} title='Account' />
        </div>
    )
}

export default Dashboard