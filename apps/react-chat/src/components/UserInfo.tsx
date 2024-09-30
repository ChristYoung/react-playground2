export interface UserInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
  return <div className="__UserInfo">UserInfo component works!</div>;
};
