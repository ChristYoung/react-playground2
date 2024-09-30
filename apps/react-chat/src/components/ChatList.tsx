import { UserInfo } from './UserInfo';

export interface ChatListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ChatList: React.FC<ChatListProps> = (props: ChatListProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <UserInfo />
    </div>
  );
};
