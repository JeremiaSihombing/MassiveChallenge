import Card from "../../utilities/Card.dashboard"
import Akun from "../../../public/icons/user.svg"
import Video from "../../../public/icons/vidio.svg"
import Article from "../../../public/icons/artikel.svg"
import Community from "../../../public/icons/community.svg"
import PageTitle from "../../utilities/PageTitle"

const Dashboard = () => {
    return (
        <div className="max-w-[1024px] bg-[#f5f5f5]">
            <div className="title flex flex-col mb-8">
                <PageTitle title='Dashboard' />
                <p>Halo, Admin <b>Jeki</b></p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card link='account' icon={Akun} title='Account' />
                <Card link='community' icon={Community} title='Community' />
                <Card link='video' icon={Video} title='Video' />
                <Card link='article' icon={Article} title='Article' />
            </div>
        </div>
    )
}

export default Dashboard