import Background from '../../assets/communitybg.jpg'
import Button from '../../utilities/Button'

const Community = () => {
    return (
        <div className="h-screen relative bg-[#8c8c8c] flex justify-center">
            <img src={Background} className='absolute z-0 object-cover h-screen w-full opacity-70' alt="background" />
            <div className="w-[1024px] h-screen flex items-center z-50">
                <div className="max-w-[768px] flex flex-col gap-4 text-white">
                    <h1 className='text-5xl font-bold'>Bijaklah Dalam Mengelola Makanan</h1>
                    <p>Jutaan orang sudah bergabung bersama Exless dan mampu mengatasi permasalahannya, sekarang giliran anda !</p>
                    <Button text='JOIN US' color='bg-[#f48c06]' />
                </div>
            </div>
        </div>
    )
}

export default Community