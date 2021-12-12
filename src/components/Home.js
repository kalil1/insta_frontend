import Post from "./Post";
import Stories from "./Stories";
import Profile_icon from "./Profile_icon";

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <Stories />
        </div>
        <hr></hr>   
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            {[...Array(10)].map((x, i) => (
              <Post />
            ))}
          </div>
          <div className="col-lg-3">
            <div className="shadow-lg p-4 mb-2 bg-white author">
              <ui class="contacts">
                {[...Array(4)].map((x, i) => (
                  <li class="active">
                    <Profile_icon />
                  </li>
                ))}
              </ui>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
