import ProjectCards from "./ProjectCards";
import Introduction from "./Introduction";

const MainPage = () => {
    return ( 
        <div className='mainPage'>
            <Introduction/>
            <ProjectCards/>
        </div>
    );
}
 
export default MainPage;