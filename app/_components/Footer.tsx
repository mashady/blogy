import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-inherit dark:text-white h-20 relative">
      {/** todo: make a reusable component for handle the max width of the content */}
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="border-t border-gray-200 mb-4" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link href="#" className="text-sm text-muted-foreground ">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground ">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
