export interface ChatContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ChatContent: React.FC<ChatContentProps> = (
  props: ChatContentProps
) => {
  const { className, ...rest } = props;
  return <div className={className}>ChatContent component works!</div>;
};
