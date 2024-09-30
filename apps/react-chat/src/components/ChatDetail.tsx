export interface ChatDetailProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ChatDetail: React.FC<ChatDetailProps> = (
  props: ChatDetailProps
) => {
  const { className } = props;
  return <div className={className}>ChatDetail component works!</div>;
};
