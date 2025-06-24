import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import useGetConversations from "./../../hooks/useGetConversations";

const Conversations = () => {
  // here conversations are the users to show at the sidebar
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
