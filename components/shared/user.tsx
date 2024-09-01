import Image from "next/image";

type User = {
  username: string;
  avatar: string;
};
interface UserProps {
  user: User;
}

export const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="avatar items-center w-fit h-fit hidden screen500:inline-flex">
      <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-0">
        <Image
          src={user.avatar}
          width={48}
          height={48}
          alt={user.username + "- Galsen Mangas"}
        />
      </div>
      <span className="text-xs pl-1 font-bold hidden screen580:block ">
        @{user.username}
      </span>
    </div>
  );
};
