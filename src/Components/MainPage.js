import ProjectCards from "./ProjectCards";
import Introduction from "./Introduction";
import Rozbot from "./Rozbot";

const MainPage = () => {
    return ( 
        <div className='mainPage'>
            <Introduction/>
            <ProjectCards/>
        </div>
    );
}
 
export default MainPage;