import Link from "next/link";

let registerPagePoster =
  "https://cdn.dribbble.com/users/9072136/screenshots/16399743/media/d74799668d326e68a74be78daf1092e6.png?resize=1000x750&vertical=center";
const RegisterForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
      <div className="hidden lg:flex">
        <img
          className="rounded object-cover"
          src={registerPagePoster}
          alt="just image"
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div>
          <div className="mb-8  ">
            <h1 className="text-4xl font-semibold">Welcome✨</h1>
            <p>Please enter your details.</p>
          </div>

          <form className="text-centers w-[300px]">
            <div className="flex flex-col mb-2">
              <label className="text-lg">Name</label>
              <input
                type="text"
                placeholder="enter your full name"
                className="bg-inherit text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[#4242423b] dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full mt-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg">Email</label>
              <input
                type="text"
                placeholder="enter your email address"
                className="bg-inherit text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[#4242423b] dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full mt-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-lg">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="bg-inherit text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[#4242423b] dark:border-[#fff] border-[1px] outline-none rounded p-2 w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <span className="hover:underline">
                <Link href="/forget-password">Forget password</Link>
              </span>
            </div>
            <button className="flex items-center justify-center gap-3 bg-[#1f4d78] text-white rounded w-full h-[50px] px-4">
              Sign Up
            </button>
            <div className="text-center mt-2">
              <span className="hover:underline">
                <Link href="/login">Already have an account? Login up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
