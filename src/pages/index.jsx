import Adress from "../components/Adress"
import Formats from "../components/Formats"
import Animation from "../components/LearCraft/Animation"
import Mentors from "../components/LearCraft/Mentors"
import ProWay from "../components/LearCraft/ProWay"
import Study from "../components/Study"
import Footer from "../layout/Footer"
import Header from "../layout/header/Header"
import MainFinish from "../layout/main/MainFinish"
import OfficeGallery from "../layout/OfficeGallery"
import UsersUs from "../layout/users/Users"

const Index = () => {
    return (
        <div>
            <Header />
            <MainFinish />
            <UsersUs />
            <Animation/>
            {/* <ProWay/> */}
            <Adress />
            <Mentors />
            <OfficeGallery/>
            <Study />
            <Formats />
            <Footer />
        </div>
    )
}
export default Index