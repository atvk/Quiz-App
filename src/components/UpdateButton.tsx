"use client"
import { useRouter } from "next/navigation";
type Props = { answerId: string; };

const UpdateButton = ({ answerId }: Props) => {
const router = useRouter();
  async function updateAnswer(answerId: string) {
    await fetch(`http://localhost:3000/api/answer/${answerId}`, {
      method: "POST",
      body: JSON.stringify({ description: "Anton" })
    })
  }
  return (
    <div>
      <button
        onClick={() => { updateAnswer(answerId).then(router.refresh) }}
        className="text-violet-400  rounded-md border-violet-400 border px-4 py-2"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateButton;