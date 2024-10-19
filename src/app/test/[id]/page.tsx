import TestView from "@/components/Test"


async function getTestById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/tests/${id}`, {
      method: "GET", cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getQuestions = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/questions/`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get questions", error)
  }
}

export default async function TestPage({ params }: any) {
  const test = await getTestById(params.id)
  const questions = await getQuestions()
  
  return (
    <>
      <TestView
        key={test.id}
        test={test}
        questions={questions}
      />
    </>
  );
};


