import Layout from "../layout";
import Header from "./header";
import Applicant from "./applicant";
import Highlight from "./highlight";
import Traffic from "./traffic";
import Feedback from "./feedback";
const Home = () => {
    return(
        <Layout>
            <Header />
            <Applicant />
            <Highlight />
            <Traffic />
            <Feedback />
        </Layout>
    )
}
export default Home;