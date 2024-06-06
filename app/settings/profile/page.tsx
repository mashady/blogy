import SettingsProfileForm from "@/app/_components/form/SettingsProfileForm";
import { currentUser } from "@/lib/auth";

const page = async () => {
  const user = await currentUser();
  return (
    <>
      <SettingsProfileForm user={user} />
    </>
  );
};

export default page;
