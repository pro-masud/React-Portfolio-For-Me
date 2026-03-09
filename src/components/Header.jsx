import UserImage from "../assets/image/user.png";
const Header = () => {
  return (
    <>
      <div className="header-top"></div>
      <header>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  flex-col md:flex-row w-full items-center py-10 px-1 gap-5">
            <div className="header-info flex justify-center flex-col w-full order-2 lg:order-1  gap-2">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Masud Rana
              </h1>
              <h4 className="text-[21px] lg:text-3xl font-bold text-secondary-ur">
                Web Application Developer
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A results-oriented WordPress Developer with a passion for
                crafting innovative websites that prioritize user experience and
                functionality. Dedicated to delivering high-quality solutions
                that exceed expectations while staying abreast of the latest
                technologies. Committed to contributing effectively to project
                success and pursuing continual personal growth in the field.
              </p>
              <div className="flex">
                <a href="#">Portfolio</a>
                <a href="#">Resume</a>
              </div>
            </div>
            <div className="profile-image w-full flex justify-end order-1 lg:order-2">
              <img
                className="rounded w-100 h-100 object-cover"
                src={UserImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
